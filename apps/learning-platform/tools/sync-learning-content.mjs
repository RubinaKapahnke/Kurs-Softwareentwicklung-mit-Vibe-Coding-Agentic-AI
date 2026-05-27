#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(appRoot, '..', '..');

const sourceCatalog = path.join(repoRoot, 'course', 'catalog', 'courses.catalog.json');
const sourceModules = path.join(repoRoot, 'course', '01-course-modules');
const sourceLibrary = path.join(repoRoot, 'course', '03-course-library');

const targetRoot = path.join(appRoot, 'public', 'content');
const targetCatalogDir = path.join(targetRoot, 'catalog');
const targetModulesDir = path.join(targetRoot, 'modules');
const targetLibraryDir = path.join(targetRoot, 'library');

const contentContractV1 = {
  version: 1,
  requiredFrontmatter: ['title', 'contentType', 'renderAs', 'summary', 'sourceLayer'],
  allowedContentTypes: ['lesson', 'article', 'task', 'library'],
  allowedRenderAs: ['lesson-flow', 'markdown-article', 'task-panel'],
  allowedSourceLayers: ['course-module', 'course-library', 'course-guide', 'course-exercise'],
  slideRule: {
    renderAs: 'lesson-flow',
    heading: '##',
    markdownHeadingLevel: 2
  }
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyFile(source, target) {
  ensureDir(path.dirname(target));
  fs.copyFileSync(source, target);
}

function copyDir(source, target) {
  if (!fs.existsSync(source)) {
    return;
  }

  ensureDir(target);
  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
      continue;
    }

    copyFile(sourcePath, targetPath);
  }
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function toSlug(value) {
  return value
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function readMarkdown(sourcePath) {
  return fs.readFileSync(sourcePath, 'utf8');
}

function parseScalar(value) {
  const trimmed = value.trim();

  if (trimmed === 'true') {
    return true;
  }

  if (trimmed === 'false') {
    return false;
  }

  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed.replace(/^['"]|['"]$/g, '');
}

function parseFrontmatter(markdown, sourcePath) {
  if (!markdown.startsWith('---\n') && !markdown.startsWith('---\r\n')) {
    return {
      frontmatter: null,
      body: markdown
    };
  }

  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    throw new Error(`Invalid frontmatter fence in ${sourcePath}`);
  }

  const frontmatter = {};
  const lines = match[1].split(/\r?\n/);
  let currentListKey = null;

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) {
      continue;
    }

    const listItem = line.match(/^\s+-\s+(.+)$/);
    if (listItem && currentListKey) {
      frontmatter[currentListKey].push(parseScalar(listItem[1]));
      continue;
    }

    const pair = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!pair) {
      throw new Error(`Unsupported frontmatter line in ${sourcePath}: ${line}`);
    }

    currentListKey = null;

    if (pair[2].trim() === '') {
      frontmatter[pair[1]] = [];
      currentListKey = pair[1];
      continue;
    }

    frontmatter[pair[1]] = parseScalar(pair[2]);
  }

  return {
    frontmatter,
    body: markdown.slice(match[0].length)
  };
}

function validateFrontmatter(frontmatter, sourcePath) {
  const missing = contentContractV1.requiredFrontmatter.filter((field) => !(field in frontmatter));

  if (missing.length > 0) {
    throw new Error(`Missing required frontmatter in ${sourcePath}: ${missing.join(', ')}`);
  }

  if (!contentContractV1.allowedContentTypes.includes(frontmatter.contentType)) {
    throw new Error(`Invalid contentType "${frontmatter.contentType}" in ${sourcePath}`);
  }

  if (!contentContractV1.allowedRenderAs.includes(frontmatter.renderAs)) {
    throw new Error(`Invalid renderAs "${frontmatter.renderAs}" in ${sourcePath}`);
  }

  if (!contentContractV1.allowedSourceLayers.includes(frontmatter.sourceLayer)) {
    throw new Error(`Invalid sourceLayer "${frontmatter.sourceLayer}" in ${sourcePath}`);
  }

  return {
    status: 'valid',
    warnings: []
  };
}

function inferMetadata(sourcePath, fallback, sourceLayer) {
  const markdown = readMarkdown(sourcePath);
  const { frontmatter, body } = parseFrontmatter(markdown, sourcePath);

  if (frontmatter) {
    return {
      metadata: frontmatter,
      body,
      validation: validateFrontmatter(frontmatter, sourcePath)
    };
  }

  const title = titleFromMarkdown(sourcePath, fallback);
  return {
    metadata: {
      title,
      contentType: sourceLayer === 'course-library' ? 'article' : 'lesson',
      renderAs: sourceLayer === 'course-library' ? 'markdown-article' : 'lesson-flow',
      summary: `Automatisch aus ${fallback} abgeleiteter Legacy-Inhalt.`,
      sourceLayer
    },
    body,
    validation: {
      status: 'legacy-derived',
      warnings: ['missing-frontmatter']
    }
  };
}

function collectLibraryLinks(markdown) {
  const links = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+\.md)(#[^)]+)?\)/g;
  let match;

  while ((match = linkPattern.exec(markdown)) !== null) {
    const href = match[2];
    const courseLibraryMatch = href.match(/(?:^|\/)course\/03-course-library\/(.+\.md)$/);
    const legacyLibraryMatch = href.match(/(?:^|\/)03-course-library\/(.+\.md)$/);

    if (courseLibraryMatch || legacyLibraryMatch) {
      links.push({
        label: match[1],
        href,
        contentPath: `/content/library/${courseLibraryMatch?.[1] ?? legacyLibraryMatch?.[1]}`
      });
    }
  }

  return links;
}

function collectTaskDirectives(markdown, lineOffset = 0) {
  return markdown
    .split(/\r?\n/)
    .map((line, index) => {
      const match = line.match(/^Aufgabe:\s+(.+)$/i);
      const lineNumber = lineOffset + index + 1;
      return match
        ? {
            id: `task-${lineNumber}-${toSlug(match[1])}`,
            directive: 'Aufgabe',
            href: match[1].trim(),
            line: lineNumber
          }
        : null;
    })
    .filter(Boolean);
}

function collectTodos(markdown, lineOffset = 0) {
  return markdown
    .split(/\r?\n/)
    .map((line, index) => {
      const match = line.match(/^\s*[-*]\s+\[( |x|X)\]\s+(.+)$/);
      const lineNumber = lineOffset + index + 1;
      return match
        ? {
            id: `todo-${lineNumber}-${toSlug(match[2])}`,
            label: match[2].trim(),
            checked: match[1].toLowerCase() === 'x',
            line: lineNumber
          }
        : null;
    })
    .filter(Boolean);
}

function collectSlides(markdown) {
  const lines = markdown.split(/\r?\n/);
  const slides = [];

  for (const [index, line] of lines.entries()) {
    const match = line.match(/^##\s+(.+)$/);

    if (match) {
      slides.push({
        id: slides.length + 1,
        title: match[1].trim(),
        anchor: toSlug(match[1]),
        sourceHeading: '##',
        startLine: index + 1,
        markdown: '',
        libraryLinks: [],
        tasks: [],
        todos: []
      });
    }
  }

  if (slides.length === 0) {
    return [];
  }

  for (const [index, slide] of slides.entries()) {
    const startLine = slide.startLine - 1;
    const endLine = index < slides.length - 1 ? slides[index + 1].startLine - 1 : lines.length;
    const slideMarkdown = lines.slice(startLine, endLine).join('\n');
    slide.markdown = slideMarkdown;
    slide.libraryLinks = collectLibraryLinks(slideMarkdown);
    slide.tasks = collectTaskDirectives(slideMarkdown, startLine);
    slide.todos = collectTodos(slideMarkdown, startLine);
  }

  return slides;
}

function titleFromMarkdown(sourcePath, fallback) {
  const markdown = readMarkdown(sourcePath);
  const { body } = parseFrontmatter(markdown, sourcePath);
  const heading = markdown
    ? body
    .split(/\r?\n/)
    .map((line) => line.match(/^\uFEFF?#\s+(.+)$/)?.[1]?.trim())
    .find(Boolean)
    : null;

  return heading ?? path.basename(fallback).replace(/\.md$/i, '');
}

function syncCatalog() {
  if (!fs.existsSync(sourceCatalog)) {
    throw new Error(`Catalog not found: ${sourceCatalog}`);
  }

  ensureDir(targetCatalogDir);
  copyFile(sourceCatalog, path.join(targetCatalogDir, 'courses.catalog.json'));
}

function syncModules() {
  if (!fs.existsSync(sourceModules)) {
    throw new Error(`Modules root not found: ${sourceModules}`);
  }

  ensureDir(targetModulesDir);

  const courseDirs = fs
    .readdirSync(sourceModules, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  for (const courseDir of courseDirs) {
    const courseId = courseDir.name;
    const sourceCourseRoot = path.join(sourceModules, courseId);
    const sourceCourseMeta = path.join(sourceCourseRoot, 'course.meta.json');
    const sourceCourseModules = path.join(sourceCourseRoot, 'modules');

    if (!fs.existsSync(sourceCourseMeta) || !fs.existsSync(sourceCourseModules)) {
      continue;
    }

    const targetCourseRoot = path.join(targetModulesDir, courseId);
    ensureDir(targetCourseRoot);
    copyFile(sourceCourseMeta, path.join(targetCourseRoot, 'course.meta.json'));

    const moduleDirs = fs
      .readdirSync(sourceCourseModules, { withFileTypes: true })
      .filter((entry) => entry.isDirectory());

    for (const moduleDir of moduleDirs) {
      const moduleId = moduleDir.name;
      const sourceModuleRoot = path.join(sourceCourseModules, moduleId);
      const targetModuleRoot = path.join(targetCourseRoot, moduleId);
      copyDir(sourceModuleRoot, targetModuleRoot);
      enrichStepManifest(sourceModuleRoot, targetModuleRoot, courseId, moduleId);
    }
  }
}

function enrichStepManifest(sourceModuleRoot, targetModuleRoot, courseId, moduleId) {
  const sourceManifestPath = path.join(sourceModuleRoot, 'step-manifest.json');

  if (!fs.existsSync(sourceManifestPath)) {
    return;
  }

  const manifest = JSON.parse(fs.readFileSync(sourceManifestPath, 'utf8'));
  const steps = Array.isArray(manifest.steps) ? manifest.steps : [];

  const enrichedSteps = steps.map((step) => {
    const sections = Array.isArray(step.sections) ? step.sections : [];

    return {
      ...step,
      sections: sections.map((section) => {
        const sourcePath = path.join(sourceModuleRoot, section.file);

        if (!fs.existsSync(sourcePath) || !section.file.toLowerCase().endsWith('.md')) {
          return section;
        }

        const { metadata, body, validation } = inferMetadata(sourcePath, section.file, 'course-module');
        const contentPath = `/content/modules/${courseId}/${moduleId}/${toPosixPath(section.file)}`;

        return {
          ...section,
          contentPath,
          contentContract: {
            version: contentContractV1.version,
            status: validation.status,
            warnings: validation.warnings
          },
          frontmatter: metadata,
          slides: metadata.renderAs === 'lesson-flow' ? collectSlides(body) : [],
          libraryLinks: collectLibraryLinks(body),
          taskDirectives: collectTaskDirectives(body),
          todos: collectTodos(body)
        };
      })
    };
  });

  const enrichedManifest = {
    ...manifest,
    contentContract: contentContractV1,
    steps: enrichedSteps
  };

  fs.writeFileSync(
    path.join(targetModuleRoot, 'step-manifest.json'),
    `${JSON.stringify(enrichedManifest, null, 2)}\n`,
    'utf8'
  );
}

function collectLibraryEntries() {
  if (!fs.existsSync(sourceLibrary)) {
    throw new Error(`Library root not found: ${sourceLibrary}`);
  }

  const entries = [];
  const moduleDirs = fs
    .readdirSync(sourceLibrary, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));

  for (const moduleDir of moduleDirs) {
    const sourceModuleRoot = path.join(sourceLibrary, moduleDir.name);
    const files = fs
      .readdirSync(sourceModuleRoot, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.md'))
      .sort((a, b) => a.name.localeCompare(b.name, 'de'));

    for (const file of files) {
      const sourcePath = path.join(sourceModuleRoot, file.name);
      const relativePath = toPosixPath(path.relative(sourceLibrary, sourcePath));
      const { metadata, body, validation } = inferMetadata(sourcePath, file.name, 'course-library');

      entries.push({
        moduleId: moduleDir.name,
        title: metadata.title,
        filename: file.name,
        summary: metadata.summary,
        contentType: metadata.contentType,
        renderAs: metadata.renderAs,
        sourceLayer: metadata.sourceLayer,
        contentContract: {
          version: contentContractV1.version,
          status: validation.status,
          warnings: validation.warnings
        },
        headings: collectSlides(body).map(({ id, title, anchor, startLine }) => ({
          id,
          title,
          anchor,
          sourceHeading: '##',
          startLine
        })),
        libraryLinks: collectLibraryLinks(body),
        todos: collectTodos(body),
        contentPath: `/content/library/${relativePath}`,
        routePath: `/bibliothek/${relativePath.replace(/\.md$/i, '')}`
      });
    }
  }

  return entries;
}

function syncLibrary() {
  copyDir(sourceLibrary, targetLibraryDir);
  const index = {
    generatedFrom: 'course/03-course-library',
    contentContract: contentContractV1,
    entries: collectLibraryEntries()
  };

  ensureDir(targetLibraryDir);
  fs.writeFileSync(path.join(targetLibraryDir, 'library-index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
}

function run() {
  syncCatalog();
  syncModules();
  syncLibrary();
  console.log('Learning content synced to public/content.');
}

run();
