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
  type: 'lesson' | 'tasks' | 'uebung';
  file: string;
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
