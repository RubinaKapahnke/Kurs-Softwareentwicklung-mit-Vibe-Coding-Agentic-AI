import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import contentSyncConfig from './content-sync.config.mjs';

const appRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(appRoot, '../..');
const publicContentRoot = path.resolve(appRoot, 'public/content');
const SUBHEADING_PREFIX = '__subheading__';

function assertInside(basePath, filePath, label) {
  const relative = path.relative(basePath, filePath);
  const isOutside = relative.startsWith('..') || path.isAbsolute(relative);
  if (isOutside) {
    throw new Error(`${label} is outside allowed path: ${filePath}`);
  }
}

function extractMarkedSection(markdown, sectionId, sourcePath) {
  const startMarker = `<!-- onboarding:start ${sectionId} -->`;
  const endMarker = `<!-- onboarding:end ${sectionId} -->`;

  const startIndex = markdown.indexOf(startMarker);
  const endIndex = markdown.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error(
      `Missing or invalid onboarding markers for section '${sectionId}' in ${sourcePath}`
    );
  }

  const contentStart = startIndex + startMarker.length;
  return markdown.slice(contentStart, endIndex).trim() + '\n';
}

function parseHeading(line) {
  const match = line.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
  if (!match) {
    return null;
  }

  return {
    level: match[1].length,
    text: match[2].trim()
  };
}

function sanitizeInlineMarkdown(text) {
  return text.trim();
}

function finalizeLessonSection(section) {
  const next = {};
  if (section.heading) {
    next.heading = section.heading;
  }
  if (section.tone) {
    next.tone = section.tone;
  }
  if (section.paragraphs.length > 0) {
    next.paragraphs = section.paragraphs;
  }
  if (section.orderedItems.length > 0) {
    next.orderedItems = section.orderedItems;
  }
  if (section.unorderedItems.length > 0) {
    next.unorderedItems = section.unorderedItems;
  }
  return next;
}

function headingToTone(headingText) {
  const normalized = headingText.trim().toLowerCase();
  if (normalized.startsWith('erfolg:') || normalized.startsWith('ok:') || normalized.startsWith('gruen:')) {
    return 'success';
  }
  if (normalized.startsWith('info:') || normalized.startsWith('tipp:')) {
    return 'tip';
  }
  if (normalized.startsWith('blau:')) {
    return 'info';
  }
  if (normalized.startsWith('achtung:')) {
    return 'danger';
  }
  if (normalized.startsWith('wichtig:') || normalized.startsWith('hinweis:')) {
    return 'highlight';
  }
  return undefined;
}

function stripTonePrefixFromHeading(headingText) {
  return headingText.replace(/^(Wichtig|Hinweis|Achtung|Erfolg|OK|Gruen|Info|Tipp|Blau)\s*:\s*/i, '').trim();
}

function parseSlideSections(lines) {
  const sections = [];
  let current = { heading: undefined, tone: undefined, paragraphs: [], orderedItems: [], unorderedItems: [] };
  let paragraphBuffer = [];

  const flushParagraphBuffer = () => {
    if (paragraphBuffer.length === 0) {
      return;
    }

    // Keep multiline markdown blocks intact so tables and similar block syntax survive manifest sync.
    current.paragraphs.push(paragraphBuffer.join('\n'));
    paragraphBuffer = [];
  };

  const pushCurrent = () => {
    flushParagraphBuffer();
    const next = finalizeLessonSection(current);
    if (!next.heading && !next.paragraphs?.length && !next.orderedItems?.length) {
      return;
    }
    sections.push(next);
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const heading = parseHeading(rawLine);

    if (heading) {
      if (heading.level === 3) {
        pushCurrent();
        const headingText = sanitizeInlineMarkdown(heading.text);
        const displayHeading = stripTonePrefixFromHeading(headingText);
        current = {
          heading: displayHeading || headingText,
          tone: headingToTone(headingText),
          paragraphs: [],
          orderedItems: [],
          unorderedItems: [],
        };
      } else if (heading.level === 4) {
        flushParagraphBuffer();
        current.paragraphs.push(`${SUBHEADING_PREFIX}${sanitizeInlineMarkdown(heading.text)}`);
      }
      continue;
    }

    const line = rawLine.trim();
    if (!line) {
      flushParagraphBuffer();
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraphBuffer();
      current.orderedItems.push(sanitizeInlineMarkdown(orderedMatch[1]));
      continue;
    }

    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraphBuffer();
      current.unorderedItems.push(sanitizeInlineMarkdown(bulletMatch[1]));
      continue;
    }

    paragraphBuffer.push(sanitizeInlineMarkdown(line));
  }

  pushCurrent();
  return sections;
}

function findTaskSectionLines(lines) {
  const startIndex = lines.findIndex((line) => /^\s*#{2,6}\s+Aufgaben\b/i.test(line));
  if (startIndex === -1) return [];
  const sectionLines = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    if (/^\s*#{2,6}\s+/.test(lines[i])) break;
    sectionLines.push(lines[i]);
  }
  return sectionLines;
}

function extractTasksFromMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const taskSectionLines = findTaskSectionLines(lines);
  const normalizedLines = taskSectionLines.length > 0 ? taskSectionLines : lines;

  const checkboxTasks = normalizedLines
    .map((line) => line.match(/^\s*[-*]\s+\[(?: |x|X)\]\s+(.+)$/)?.[1]?.trim() ?? null)
    .filter(Boolean);

  if (checkboxTasks.length > 0) {
    const noteLines = normalizedLines.filter((line) => !/^\s*[-*]\s+\[(?: |x|X)\]\s+(.+)$/i.test(line));
    return { tasks: checkboxTasks, taskNotes: parseSlideSections(noteLines) };
  }

  const listTasks = normalizedLines
    .map((line) => {
      const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
      if (ordered?.[1]) return ordered[1].trim();
      const bullet = line.match(/^\s*[-*]\s+(.+)$/);
      if (bullet?.[1] && !bullet[1].trim().startsWith('[')) return bullet[1].trim();
      return null;
    })
    .filter(Boolean);

  const noteLines = normalizedLines.filter(
    (line) => !/^\s*\d+\.\s+(.+)$/i.test(line) && !/^\s*[-*]\s+(.+)$/i.test(line)
  );
  return { tasks: listTasks, taskNotes: parseSlideSections(noteLines) };
}

function parseQuizSlideFromMarkdown(blockTitle, contentLines, sourceLabel) {
  const title = sanitizeInlineMarkdown(blockTitle.replace(/^quiz\s*[:\-]?\s*/i, '').trim()) || 'Quiz';
  let prompt = '';
  let instruction = undefined;
  let successMessage = '';
  let errorMessage = undefined;
  let multiSelect = false;
  const options = [];
  const noteLines = [];

  for (let i = 0; i < contentLines.length; i++) {
    const rawLine = contentLines[i];
    const line = rawLine.trim();
    if (!line) {
      noteLines.push(rawLine);
      continue;
    }

    const promptMatch = line.match(/^frage:\s*(.+)$/i);
    if (promptMatch) {
      prompt = sanitizeInlineMarkdown(promptMatch[1]);
      continue;
    }

    const instructionMatch = line.match(/^(hinweis|anleitung):\s*(.+)$/i);
    if (instructionMatch) {
      instruction = sanitizeInlineMarkdown(instructionMatch[2]);
      continue;
    }

    const successMatch = line.match(/^(erfolg|richtig):\s*(.+)$/i);
    if (successMatch) {
      successMessage = sanitizeInlineMarkdown(successMatch[2]);
      continue;
    }

    const errorMatch = line.match(/^(fehler|falsch):\s*(.+)$/i);
    if (errorMatch) {
      errorMessage = sanitizeInlineMarkdown(errorMatch[2]);
      continue;
    }

    const multiMatch = line.match(/^mehrfachauswahl:\s*(ja|true|1|nein|false|0)$/i);
    if (multiMatch) {
      multiSelect = /^(ja|true|1)$/i.test(multiMatch[1]);
      continue;
    }

    const optionMatch = line.match(/^[-*]\s+\[(x|\s)\]\s+(.+)$/i);
    if (optionMatch) {
      const id = String.fromCharCode(97 + options.length);
      options.push({
        id,
        label: sanitizeInlineMarkdown(optionMatch[2]),
        isCorrect: optionMatch[1].toLowerCase() === 'x',
      });
      continue;
    }

    noteLines.push(rawLine);
  }

  if (!prompt) {
    throw new Error(`Quiz block without 'Frage:' in ${sourceLabel}`);
  }

  if (options.length < 2) {
    throw new Error(`Quiz block needs at least two options (- [x]/- [ ]) in ${sourceLabel}`);
  }

  if (!options.some((option) => option.isCorrect)) {
    throw new Error(`Quiz block needs at least one correct option (- [x]) in ${sourceLabel}`);
  }

  const correctOptionCount = options.filter((option) => option.isCorrect).length;
  if (correctOptionCount > 1) {
    multiSelect = true;
    instruction = `Wähle die besten ${correctOptionCount} Antworten.`;
  }

  if (!successMessage) {
    successMessage = 'Richtig.';
  }

  const quizSlide = {
    type: 'quiz',
    title,
    prompt,
    options,
    successMessage,
  };

  if (instruction) {
    quizSlide.instruction = instruction;
  }

  if (errorMessage) {
    quizSlide.errorMessage = errorMessage;
  }

  if (multiSelect) {
    quizSlide.multiSelect = true;
  }

  const parsedNotes = parseSlideSections(noteLines);
  if (parsedNotes.length > 0) {
    quizSlide.notes = parsedNotes;
  }

  return quizSlide;
}

function parseLessonFlowFromMarkdown(markdown, fallbackTitle, sourceLabel) {
  const lines = markdown.split(/\r?\n/);
  const h1 = lines.find((line) => /^\s*#\s+/.test(line));
  const lessonTitle = h1
    ? sanitizeInlineMarkdown(h1.replace(/^\s*#\s+/, '').replace(/^Lektion\s+\d+:\s*/i, ''))
    : fallbackTitle;

  const h2Blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const heading = parseHeading(lines[i]);
    if (heading?.level === 2) {
      h2Blocks.push({ index: i, title: heading.text.trim() });
    }
  }

  const ignoredH2 = new Set(['ziel', 'aufgaben', 'fallback', 'erfolgskriterium']);
  const slides = [];

  for (let i = 0; i < h2Blocks.length; i++) {
    const block = h2Blocks[i];
    const normalized = block.title.toLowerCase();
    if (ignoredH2.has(normalized)) {
      continue;
    }

    const start = block.index + 1;
    const end = i + 1 < h2Blocks.length ? h2Blocks[i + 1].index : lines.length;
    const contentLines = lines.slice(start, end);

    if (/^quiz\b/i.test(block.title.trim())) {
      slides.push(parseQuizSlideFromMarkdown(block.title, contentLines, sourceLabel));
      continue;
    }

    const sections = parseSlideSections(contentLines);

    if (sections.length === 0) {
      continue;
    }

    slides.push({
      type: 'content',
      title: sanitizeInlineMarkdown(block.title),
      sections,
    });
  }

  return {
    title: lessonTitle || fallbackTitle,
    slides,
  };
}

function extractSectionByHeading(markdown, fromHeading, sourcePath) {
  const lines = markdown.split(/\r?\n/);
  const normalizedTarget = fromHeading.trim().toLowerCase();

  let startIndex = -1;
  let startLevel = 0;

  for (let index = 0; index < lines.length; index++) {
    const heading = parseHeading(lines[index]);
    if (!heading) {
      continue;
    }

    if (heading.text.toLowerCase() === normalizedTarget) {
      startIndex = index;
      startLevel = heading.level;
      break;
    }
  }

  if (startIndex === -1) {
    throw new Error(`Heading '${fromHeading}' not found in ${sourcePath}`);
  }

  let endIndex = lines.length;
  for (let index = startIndex + 1; index < lines.length; index++) {
    const heading = parseHeading(lines[index]);
    if (!heading) {
      continue;
    }

    if (heading.level <= startLevel) {
      endIndex = index;
      break;
    }
  }

  const section = lines.slice(startIndex, endIndex).join('\n').trim();
  if (!section) {
    throw new Error(`Heading section '${fromHeading}' is empty in ${sourcePath}`);
  }

  return section + '\n';
}

function extractSection(markdown, entry, sourcePath) {
  if (entry.fullFile) {
    return markdown.trim() + '\n';
  }

  if (entry.fromHeading) {
    return extractSectionByHeading(markdown, entry.fromHeading, sourcePath);
  }

  if (entry.sectionId) {
    return extractMarkedSection(markdown, entry.sectionId, sourcePath);
  }

  throw new Error(
    `Sync entry must define either 'fullFile', 'sectionId' or 'fromHeading': ${JSON.stringify(entry)}`
  );
}

async function syncEntry(entry) {
  const sourcePath = path.resolve(appRoot, entry.source);
  const targetPath = path.resolve(appRoot, entry.target);

  assertInside(repoRoot, sourcePath, 'Source path');
  assertInside(publicContentRoot, targetPath, 'Target path');

  const markdown = await fs.readFile(sourcePath, 'utf8');
  const section = extractSection(markdown, entry, sourcePath);
  const selectorLabel = entry.fullFile
    ? 'Full file'
    : entry.fromHeading
      ? `Heading: ${entry.fromHeading}`
      : `Section: ${entry.sectionId}`;

  const header = [
    '<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->',
    `<!-- Source: ${entry.source} -->`,
    `<!-- ${selectorLabel} -->`,
    ''
  ].join('\n');

  const output = header + section;

  let current = null;
  try {
    current = await fs.readFile(targetPath, 'utf8');
  } catch {
    current = null;
  }

  if (current === output) {
    return { changed: false, target: entry.target };
  }

  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, output, 'utf8');
  return { changed: true, target: entry.target };
}

async function main() {
  if (!Array.isArray(contentSyncConfig) || contentSyncConfig.length === 0) {
    console.log('No content sync entries configured.');
    return;
  }

  const results = [];
  for (const entry of contentSyncConfig) {
    if (!entry?.source || !entry?.target || (!entry?.sectionId && !entry?.fromHeading && !entry?.fullFile)) {
      throw new Error(`Invalid sync entry: ${JSON.stringify(entry)}`);
    }
    const result = await syncEntry(entry);
    results.push(result);
  }

  for (const result of results) {
    if (result.changed) {
      console.log(`Synced: ${result.target}`);
    } else {
      console.log(`Unchanged: ${result.target}`);
    }
  }

  const manifestResult = await syncLerninhalteManifest();
  console.log(`${manifestResult}: public/content/step-manifest.json`);
}

// Map: filename → section type (defines the convention)
const SECTION_TYPE_MAP = {
  'lektion-inhalte.md': 'lesson',
  'aufgaben.md': 'tasks',
  'uebung.md': 'uebung',
};

const KURSMODULE_ROOT = path.resolve(appRoot, '../../course/01-course-modules');
const LESSON_FOLDER_PATTERN = /^(?:lektion-)?(\d{2})-/;
const FLAT_STEP_FILE_PATTERN = /^(\d{2})-(.+)\.md$/i;

function getLessonFolderStepId(folderName) {
  const match = folderName.match(LESSON_FOLDER_PATTERN);
  return match ? Number(match[1]) : null;
}

function isLessonFolderName(folderName) {
  return getLessonFolderStepId(folderName) !== null;
}

function getFlatStepFileInfo(fileName) {
  const match = fileName.match(FLAT_STEP_FILE_PATTERN);
  if (!match) return null;

  const stepId = Number(match[1]);
  const slug = match[2].toLowerCase();
  if (slug === 'aufgaben') {
    return { stepId, sectionType: 'tasks', outputFilename: 'aufgaben.md' };
  }
  if (slug === 'uebung') {
    return { stepId, sectionType: 'uebung', outputFilename: 'uebung.md' };
  }

  return { stepId, sectionType: 'lesson', outputFilename: 'lektion-inhalte.md' };
}

function isFlatLessonContent(markdown, stepId) {
  const h1 = markdown.split(/\r?\n/).find((line) => /^\s*#\s+/.test(line));
  if (!h1) return false;

  const match = h1.match(/^\s*#\s+Lektion\s+(\d+)\s*:/i);
  return match ? Number(match[1]) === stepId : false;
}

async function collectFlatStepEntries(rootPath, dirEntries) {
  const groupedFiles = new Map();

  for (const entry of dirEntries) {
    if (!entry.isFile()) continue;

    const info = getFlatStepFileInfo(entry.name);
    if (!info) continue;

    const srcPath = path.join(rootPath, entry.name);
    if (info.sectionType === 'lesson') {
      const content = await fs.readFile(srcPath, 'utf8');
      if (!isFlatLessonContent(content, info.stepId)) continue;
    }

    const group = groupedFiles.get(info.stepId) ?? [];
    group.push({
      sectionType: info.sectionType,
      outputFilename: info.outputFilename,
      sourceLabel: entry.name,
      srcPath,
    });
    groupedFiles.set(info.stepId, group);
  }

  return Array.from(groupedFiles.entries()).map(([stepId, files]) => ({
    stepId,
    sourceLabel: files.find((file) => file.sectionType === 'lesson')?.sourceLabel ?? files[0].sourceLabel,
    files,
  }));
}

async function resolveLerninhalteRoot() {
  const entries = await fs.readdir(KURSMODULE_ROOT, { withFileTypes: true });
  const onboardingCandidates = entries
    .filter((entry) => entry.isDirectory() && /^01-/i.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const candidate of onboardingCandidates) {
    const moduleRootPath = path.join(KURSMODULE_ROOT, candidate.name);
    const directLessonFolders = await fs.readdir(moduleRootPath, { withFileTypes: true })
      .then(async (moduleEntries) => {
        if (moduleEntries.some((entry) => entry.isDirectory() && isLessonFolderName(entry.name))) {
          return true;
        }

        const flatEntries = await collectFlatStepEntries(moduleRootPath, moduleEntries);
        return flatEntries.length > 0;
      });

    if (directLessonFolders) {
      return moduleRootPath;
    }

    const lerninhaltePath = path.join(moduleRootPath, 'lerninhalte');
    try {
      const stats = await fs.stat(lerninhaltePath);
      if (stats.isDirectory()) {
        return lerninhaltePath;
      }
    } catch {
      // Candidate without lerninhalte directory.
    }
  }

  throw new Error(
    `Onboarding module directory not found under ${KURSMODULE_ROOT}. Expected a folder like 01-*/ with direct XX-* or lektion-XX-* folders (or legacy lerninhalte/).`
  );
}

async function syncLerninhalteManifest() {
  const lerninhalteRoot = await resolveLerninhalteRoot();
  const dirEntries = await fs.readdir(lerninhalteRoot, { withFileTypes: true });
  const folderStepEntries = dirEntries
    .filter(e => e.isDirectory() && isLessonFolderName(e.name))
    .map((folder) => {
      const stepId = getLessonFolderStepId(folder.name);
      const folderPath = path.join(lerninhalteRoot, folder.name);
      return {
        stepId,
        sourceLabel: folder.name,
        folderPath,
        files: null,
      };
    });

  const flatStepEntries = await collectFlatStepEntries(lerninhalteRoot, dirEntries);
  const stepEntries = [...folderStepEntries, ...flatStepEntries]
    .filter((entry) => entry.stepId !== null)
    .sort((a, b) => a.stepId - b.stepId || a.sourceLabel.localeCompare(b.sourceLabel));

  const manifest = {};
  const seenStepIds = new Map();

  for (const stepEntry of stepEntries) {
    const stepId = stepEntry.stepId;

    const previousFolder = seenStepIds.get(stepId);
    if (previousFolder) {
      throw new Error(
        `Duplicate onboarding lesson step ${stepId}: ${previousFolder} and ${stepEntry.sourceLabel}`
      );
    }
    seenStepIds.set(stepId, stepEntry.sourceLabel);

    const stepSlug = `step-${String(stepId).padStart(2, '0')}`;
    const targetDir = path.join(publicContentRoot, stepSlug);

    const filesToSync = stepEntry.files ?? await Promise.all(
      Object.entries(SECTION_TYPE_MAP).map(async ([filename, sectionType]) => {
        const srcPath = path.join(stepEntry.folderPath, filename);
        try {
          await fs.access(srcPath);
          return {
            sectionType,
            outputFilename: filename,
            sourceLabel: `${stepEntry.sourceLabel}/${filename}`,
            srcPath,
          };
        } catch {
          return null;
        }
      })
    ).then((files) => files.filter(Boolean));

    const sections = [];
    let title = null;
    let goal = null;
    let requiresLessonCompletion = false;
    let lessonFlow = null;
    let manifestTasks = null;
    let manifestTaskNotes = null;

    for (const fileToSync of filesToSync) {
      const { outputFilename, sectionType, sourceLabel, srcPath } = fileToSync;
      const dstPath = path.join(targetDir, outputFilename);
      assertInside(repoRoot, srcPath, 'Lerninhalte source');
      assertInside(publicContentRoot, dstPath, 'Lerninhalte target');

      const content = await fs.readFile(srcPath, 'utf8');

      // Extract title and goal from lesson file for manifest metadata
      if (sectionType === 'lesson') {
        const lines = content.split(/\r?\n/);
        const h1 = lines.find(l => /^\s*#\s+/.test(l));
        if (h1) {
          const raw = h1.replace(/^\s*#\s+/, '').trim();
          title = raw.replace(/^Lektion\s+\d+:\s*/i, '').trim() || null;
        }
        const zielIdx = lines.findIndex(l => /^\s*##\s+Ziel\s*$/i.test(l));
        if (zielIdx !== -1) {
          for (let i = zielIdx + 1; i < lines.length; i++) {
            if (/^\s*#{1,6}\s+/.test(lines[i])) break;
            const t = lines[i].trim();
            if (t) { goal = t; break; }
          }
        }

        const parsedLessonFlow = parseLessonFlowFromMarkdown(
          content,
          `Lektion ${stepId}`,
          sourceLabel
        );
        if (parsedLessonFlow.slides.length > 0) {
          lessonFlow = parsedLessonFlow;
          requiresLessonCompletion = parsedLessonFlow.slides.some((slide) => slide.type === 'quiz');
        }
      }

      // Pre-parse tasks from aufgaben.md for manifest embedding
      if (sectionType === 'tasks') {
        const extracted = extractTasksFromMarkdown(content);
        if (extracted.tasks.length > 0) {
          manifestTasks = extracted.tasks;
          manifestTaskNotes = extracted.taskNotes;
        }
      }

      // Copy file to public/content/step-NN/
      await fs.mkdir(targetDir, { recursive: true });
      const header = `<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->\n<!-- Source: ${sourceLabel} -->\n\n`;
      const output = header + content.trim() + '\n';

      let current = null;
      try { current = await fs.readFile(dstPath, 'utf8'); } catch { /* file does not exist yet */ }
      if (current !== output) {
        await fs.writeFile(dstPath, output, 'utf8');
      }

      sections.push({ type: sectionType, file: `/content/${stepSlug}/${outputFilename}` });
    }

    if (sections.length > 0) {
      const entry = { title, goal, sections, lessonFlow, requiresLessonCompletion };
      if (manifestTasks !== null) {
        entry.tasks = manifestTasks;
        entry.taskNotes = manifestTaskNotes;
      }
      manifest[stepId] = entry;
    }
  }

  // Write step-manifest.json
  const manifestPath = path.join(publicContentRoot, 'step-manifest.json');
  const manifestOutput = JSON.stringify(manifest, null, 2) + '\n';
  let currentManifest = null;
  try { currentManifest = await fs.readFile(manifestPath, 'utf8'); } catch { /* does not exist yet */ }

  if (currentManifest === manifestOutput) return 'Unchanged';

  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  await fs.writeFile(manifestPath, manifestOutput, 'utf8');
  return 'Synced';
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
