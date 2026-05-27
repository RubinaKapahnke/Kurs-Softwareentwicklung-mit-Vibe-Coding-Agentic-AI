export type CourseStatus = 'live' | 'coming-soon' | 'archived';

export interface CourseCatalogEntry {
  id: string;
  title: string;
  status: CourseStatus;
  defaultModuleId: string;
  moduleIds: string[];
  language: string;
  version: number;
}

export interface CourseMeta {
  id: string;
  shortTitle: string;
  audience: string[];
  outcome: string;
  owners: string[];
  version: number;
}

export interface ModuleMeta {
  id: string;
  courseId: string;
  title: string;
  order: number;
  type: 'guided' | 'self-paced' | 'workshop';
  completionRule: string;
  entryRule?: string;
  strategy?: string;
  templateId?: string;
  compatibilityTags?: string[];
  estimatedDurationMinutes?: number;
  variantOf?: string;
  variantKey?: string;
  version: number;
}

export interface StepManifestSection {
  type: 'lesson' | 'tasks' | 'übung';
  file: string;
  contentPath?: string;
  contentContract?: {
    version: number;
    status: 'valid' | 'legacy-derived';
    warnings: string[];
  };
  frontmatter?: {
    title: string;
    contentType: 'lesson' | 'article' | 'task' | 'library';
    renderAs: 'lesson-flow' | 'markdown-article' | 'task-panel';
    summary: string;
    sourceLayer: 'course-module' | 'course-library' | 'course-guide' | 'course-exercise';
    estimatedMinutes?: number;
    tags?: string[];
    libraryPreview?: boolean;
    knowledgeCheck?: 'required' | 'optional' | 'off';
  };
  slides?: StepManifestSlide[];
  libraryLinks?: StepManifestContentLink[];
  taskDirectives?: StepManifestTaskDirective[];
  todos?: StepManifestTodo[];
}

export interface StepManifestContentLink {
  label: string;
  href: string;
  contentPath: string;
}

export interface StepManifestTaskDirective {
  id: string;
  directive: 'Aufgabe';
  href: string;
  line: number;
}

export interface StepManifestTodo {
  id: string;
  label: string;
  checked: boolean;
  line: number;
}

export interface StepManifestSlide {
  id: number;
  title: string;
  anchor: string;
  sourceHeading: '##';
  startLine: number;
  markdown: string;
  libraryLinks: StepManifestContentLink[];
  tasks: StepManifestTaskDirective[];
  todos: StepManifestTodo[];
}

export interface StepManifestResource {
  label: string;
  href: string;
}

export interface ModuleStep {
  id: number;
  slug: string;
  title: string;
  required: boolean;
  sections: StepManifestSection[];
  resources?: StepManifestResource[];
  prerequisites?: number[];
  visibilityRule?: 'always' | 'gated' | 'conditional';
  completionMode?: 'lesson-only' | 'tasks-only' | 'lesson-and-tasks';
  featureFlags?: string[];
}

export interface StepManifest {
  moduleId: string;
  steps: ModuleStep[];
  deprecatedStepIds?: number[];
  version: number;
}
