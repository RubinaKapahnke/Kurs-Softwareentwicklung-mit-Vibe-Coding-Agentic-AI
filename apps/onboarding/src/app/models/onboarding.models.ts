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
  tone?: 'default' | 'highlight';
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
  goal: string;
  tasks: string[];
  fallbackHelp: OnboardingHelpItem[];
  successCriterion: string;
  resources?: OnboardingResourceLink[];
  desktopHint?: string[];
  vscodeHint?: string[];
  markdownSource?: string; // Pfad zur optionalen Markdown-Erklärung
  lessonFlow?: OnboardingLessonFlow;
}
