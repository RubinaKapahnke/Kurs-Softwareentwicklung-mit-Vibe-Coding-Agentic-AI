#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(appRoot, '..', '..');

const sourceCatalog = path.join(repoRoot, 'course', 'catalog', 'courses.catalog.json');
const sourceModules = path.join(repoRoot, 'course', '01-course-modules');

const targetRoot = path.join(appRoot, 'public', 'content');
const targetCatalogDir = path.join(targetRoot, 'catalog');
const targetModulesDir = path.join(targetRoot, 'modules');

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
      copyDir(path.join(sourceCourseModules, moduleId), path.join(targetCourseRoot, moduleId));
    }
  }
}

function run() {
  syncCatalog();
  syncModules();
  console.log('Learning content synced to public/content.');
}

run();
