#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(appRoot, '..', '..');
const courseRoot = path.join(repoRoot, 'course');
const modulesRoot = path.join(courseRoot, '01-course-modules');
const catalogPath = path.join(courseRoot, 'catalog', 'courses.catalog.json');

/** @type {string[]} */
const errors = [];
/** @type {string[]} */
const warnings = [];

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    errors.push(`${rel(filePath)}: invalid JSON (${error.message})`);
    return null;
  }
}

function rel(filePath) {
  return path.relative(repoRoot, filePath).replace(/\\/g, '/');
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateCatalog(catalog) {
  assert(Array.isArray(catalog), `${rel(catalogPath)}: root must be an array`);
  if (!Array.isArray(catalog)) {
    return [];
  }

  const ids = new Set();
  for (const [index, course] of catalog.entries()) {
    const prefix = `${rel(catalogPath)}[${index}]`;
    assert(course && typeof course === 'object', `${prefix}: must be an object`);
    if (!course || typeof course !== 'object') {
      continue;
    }

    assert(isNonEmptyString(course.id), `${prefix}.id is required`);
    if (isNonEmptyString(course.id)) {
      assert(slugPattern.test(course.id), `${prefix}.id must be kebab-case`);
      assert(!ids.has(course.id), `${prefix}.id duplicate value: ${course.id}`);
      ids.add(course.id);
    }

    assert(isNonEmptyString(course.title), `${prefix}.title is required`);
    assert(['live', 'coming-soon', 'archived'].includes(course.status), `${prefix}.status must be live | coming-soon | archived`);
    assert(isNonEmptyString(course.defaultModuleId), `${prefix}.defaultModuleId is required`);
    assert(Array.isArray(course.moduleIds) && course.moduleIds.length > 0, `${prefix}.moduleIds must be a non-empty array`);
    assert(isNonEmptyString(course.language), `${prefix}.language is required`);
    assert(Number.isInteger(course.version) && course.version >= 1, `${prefix}.version must be an integer >= 1`);

    if (Array.isArray(course.moduleIds)) {
      const moduleSet = new Set(course.moduleIds);
      assert(moduleSet.size === course.moduleIds.length, `${prefix}.moduleIds contains duplicates`);
      if (isNonEmptyString(course.defaultModuleId)) {
        assert(moduleSet.has(course.defaultModuleId), `${prefix}.defaultModuleId must exist in moduleIds`);
      }
    }
  }

  return catalog;
}

function validateCourseMeta(courseId, metaPath) {
  const meta = readJson(metaPath);
  if (!meta) return;

  const prefix = rel(metaPath);
  assert(meta.id === courseId, `${prefix}: id must match folder courseId (${courseId})`);
  assert(isNonEmptyString(meta.shortTitle), `${prefix}: shortTitle is required`);
  assert(Array.isArray(meta.audience) && meta.audience.length > 0, `${prefix}: audience must be a non-empty array`);
  assert(isNonEmptyString(meta.outcome), `${prefix}: outcome is required`);
  assert(Array.isArray(meta.owners) && meta.owners.length > 0, `${prefix}: owners must be a non-empty array`);
  assert(Number.isInteger(meta.version) && meta.version >= 1, `${prefix}: version must be an integer >= 1`);
}

function validateModuleMeta(courseId, moduleId, metaPath) {
  const meta = readJson(metaPath);
  if (!meta) return;

  const prefix = rel(metaPath);
  assert(meta.id === moduleId, `${prefix}: id must match folder moduleId (${moduleId})`);
  assert(meta.courseId === courseId, `${prefix}: courseId must match parent course (${courseId})`);
  assert(isNonEmptyString(meta.title), `${prefix}: title is required`);
  assert(Number.isInteger(meta.order) && meta.order >= 1, `${prefix}: order must be an integer >= 1`);
  assert(['guided', 'self-paced', 'workshop'].includes(meta.type), `${prefix}: type must be guided | self-paced | workshop`);
  assert(isNonEmptyString(meta.completionRule), `${prefix}: completionRule is required`);
  assert(Number.isInteger(meta.version) && meta.version >= 1, `${prefix}: version must be an integer >= 1`);

  if (meta.templateId !== undefined) {
    assert(isNonEmptyString(meta.templateId) && slugPattern.test(meta.templateId), `${prefix}: templateId must be kebab-case when set`);
  }
  if (meta.compatibilityTags !== undefined) {
    assert(Array.isArray(meta.compatibilityTags), `${prefix}: compatibilityTags must be an array when set`);
  }
  if (meta.estimatedDurationMinutes !== undefined) {
    assert(Number.isInteger(meta.estimatedDurationMinutes) && meta.estimatedDurationMinutes > 0, `${prefix}: estimatedDurationMinutes must be an integer > 0 when set`);
  }
}

function validateStepManifest(moduleId, manifestPath) {
  const manifest = readJson(manifestPath);
  if (!manifest) return;

  const prefix = rel(manifestPath);
  assert(manifest.moduleId === moduleId, `${prefix}: moduleId must match folder moduleId (${moduleId})`);
  assert(Array.isArray(manifest.steps) && manifest.steps.length > 0, `${prefix}: steps must be a non-empty array`);
  assert(Number.isInteger(manifest.version) && manifest.version >= 1, `${prefix}: version must be an integer >= 1`);

  if (!Array.isArray(manifest.steps)) {
    return;
  }

  const stepIds = new Set();
  for (const [index, step] of manifest.steps.entries()) {
    const stepPrefix = `${prefix}.steps[${index}]`;
    assert(step && typeof step === 'object', `${stepPrefix}: must be an object`);
    if (!step || typeof step !== 'object') continue;

    assert(Number.isInteger(step.id) && step.id >= 1, `${stepPrefix}.id must be an integer >= 1`);
    if (Number.isInteger(step.id)) {
      assert(!stepIds.has(step.id), `${stepPrefix}.id duplicate value: ${step.id}`);
      stepIds.add(step.id);
    }

    assert(isNonEmptyString(step.slug) && slugPattern.test(step.slug), `${stepPrefix}.slug must be kebab-case`);
    assert(isNonEmptyString(step.title), `${stepPrefix}.title is required`);
    assert(typeof step.required === 'boolean', `${stepPrefix}.required must be boolean`);
    assert(Array.isArray(step.sections) && step.sections.length > 0, `${stepPrefix}.sections must be a non-empty array`);

    if (Array.isArray(step.sections)) {
      for (const [sectionIndex, section] of step.sections.entries()) {
        const sectionPrefix = `${stepPrefix}.sections[${sectionIndex}]`;
        assert(section && typeof section === 'object', `${sectionPrefix}: must be an object`);
        if (!section || typeof section !== 'object') continue;

        assert(['lesson', 'tasks', 'uebung'].includes(section.type), `${sectionPrefix}.type must be lesson | tasks | uebung`);
        assert(isNonEmptyString(section.file), `${sectionPrefix}.file is required`);
        if (isNonEmptyString(section.file)) {
          const sectionFilePath = path.resolve(path.dirname(manifestPath), section.file);
          assert(fs.existsSync(sectionFilePath), `${sectionPrefix}.file not found: ${rel(sectionFilePath)}`);
        }
      }
    }

    if (step.prerequisites !== undefined) {
      assert(Array.isArray(step.prerequisites), `${stepPrefix}.prerequisites must be an array when set`);
    }
    if (step.visibilityRule !== undefined) {
      assert(['always', 'gated', 'conditional'].includes(step.visibilityRule), `${stepPrefix}.visibilityRule must be always | gated | conditional`);
    }
    if (step.completionMode !== undefined) {
      assert(['lesson-only', 'tasks-only', 'lesson-and-tasks'].includes(step.completionMode), `${stepPrefix}.completionMode must be lesson-only | tasks-only | lesson-and-tasks`);
    }
    if (step.featureFlags !== undefined) {
      assert(Array.isArray(step.featureFlags), `${stepPrefix}.featureFlags must be an array when set`);
    }
  }
}

function run() {
  if (!fs.existsSync(catalogPath)) {
    errors.push(`${rel(catalogPath)} not found`);
  }

  const catalog = fs.existsSync(catalogPath) ? validateCatalog(readJson(catalogPath)) : [];

  const courseIds = Array.isArray(catalog)
    ? catalog.map((course) => course.id).filter((id) => isNonEmptyString(id))
    : [];

  for (const courseId of courseIds) {
    const courseDir = path.join(modulesRoot, courseId);
    if (!fs.existsSync(courseDir)) {
      errors.push(`${rel(courseDir)} not found for catalog courseId=${courseId}`);
      continue;
    }

    const courseMetaPath = path.join(courseDir, 'course.meta.json');
    if (!fs.existsSync(courseMetaPath)) {
      errors.push(`${rel(courseMetaPath)} not found`);
    } else {
      validateCourseMeta(courseId, courseMetaPath);
    }

    const modulesDir = path.join(courseDir, 'modules');
    if (!fs.existsSync(modulesDir)) {
      errors.push(`${rel(modulesDir)} not found`);
      continue;
    }

    const moduleFolders = fs
      .readdirSync(modulesDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    const catalogEntry = catalog.find((course) => course.id === courseId);
    if (catalogEntry && Array.isArray(catalogEntry.moduleIds)) {
      const moduleSet = new Set(moduleFolders);
      for (const moduleId of catalogEntry.moduleIds) {
        if (!moduleSet.has(moduleId)) {
          errors.push(`${rel(modulesDir)} missing module folder for moduleId=${moduleId}`);
        }
      }
    }

    for (const moduleId of moduleFolders) {
      const moduleDir = path.join(modulesDir, moduleId);
      const moduleMetaPath = path.join(moduleDir, 'module.meta.json');
      const stepManifestPath = path.join(moduleDir, 'step-manifest.json');

      if (!fs.existsSync(moduleMetaPath)) {
        errors.push(`${rel(moduleMetaPath)} not found`);
      } else {
        validateModuleMeta(courseId, moduleId, moduleMetaPath);
      }

      if (!fs.existsSync(stepManifestPath)) {
        errors.push(`${rel(stepManifestPath)} not found`);
      } else {
        validateStepManifest(moduleId, stepManifestPath);
      }
    }
  }

  if (warnings.length > 0) {
    console.log('Warnings:');
    for (const warning of warnings) {
      console.log(`- ${warning}`);
    }
  }

  if (errors.length > 0) {
    console.error('Validation failed with errors:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log('Learning content validation passed.');
}

run();
