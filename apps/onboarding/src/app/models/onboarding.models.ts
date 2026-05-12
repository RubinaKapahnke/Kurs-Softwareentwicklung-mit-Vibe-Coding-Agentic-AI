export interface StepManifestSection {
  type: 'lesson' | 'tasks' | 'uebung';
  file: string;
}

export interface StepManifestEntry {
  title: string | null;
  goal: string | null;
  sections: StepManifestSection[];
  requiresLessonCompletion?: boolean;
  lessonFlow?: OnboardingLessonFlow | null;
}

export type StepManifest = Record<number, StepManifestEntry>;

export interface OnboardingHelpItem {
  title: string;
  detail: string;
}

export interface OnboardingResourceLink {
  label: string;
  href: string;
}

export interface OnboardingLessonContentSection {
  heading?: string;
  paragraphs?: string[];
  orderedItems?: string[];
  unorderedItems?: string[];
  tone?: 'default' | 'highlight' | 'danger' | 'success' | 'info' | 'tip';
}

export interface OnboardingLessonContentSlide {
  type: 'content';
  title?: string;
  sections: OnboardingLessonContentSection[];
}

export interface OnboardingLessonQuizOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface OnboardingLessonQuizSlide {
  type: 'quiz';
  title: string;
  prompt: string;
  instruction?: string;
  notes?: OnboardingLessonContentSection[];
  options: OnboardingLessonQuizOption[];
  successMessage: string;
  errorMessage?: string;
  multiSelect?: boolean;
}

export type OnboardingLessonSlide = OnboardingLessonContentSlide | OnboardingLessonQuizSlide;

export interface OnboardingLessonFlow {
  title: string;
  slides: OnboardingLessonSlide[];
  continueLabel?: string;
  finishLabel?: string;
  disableFinishAction?: boolean;
}

export interface OnboardingStep {
  id: number;
  title: string;
  moduleTitle?: string; // Titel der Kursmodul-Gruppe (nur beim ersten Schritt der Gruppe gesetzt)
  goal: string;
  tasks: string[];
  fallbackHelp: OnboardingHelpItem[];
  successCriterion: string;
  resources?: OnboardingResourceLink[];
  desktopHint?: string[];
  vscodeHint?: string[];
  markdownSource?: string;
  lessonFlow?: OnboardingLessonFlow;
}
