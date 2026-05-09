import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import contentSyncConfig from './content-sync.config.mjs';

const appRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(appRoot, '../..');
const publicContentRoot = path.resolve(appRoot, 'public/content');

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

async function syncEntry(entry) {
  const sourcePath = path.resolve(appRoot, entry.source);
  const targetPath = path.resolve(appRoot, entry.target);

  assertInside(repoRoot, sourcePath, 'Source path');
  assertInside(publicContentRoot, targetPath, 'Target path');

  const markdown = await fs.readFile(sourcePath, 'utf8');
  const section = extractMarkedSection(markdown, entry.sectionId, sourcePath);

  const header = [
    '<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->',
    `<!-- Source: ${entry.source} -->`,
    `<!-- Section: ${entry.sectionId} -->`,
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
    if (!entry?.source || !entry?.target || !entry?.sectionId) {
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
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
