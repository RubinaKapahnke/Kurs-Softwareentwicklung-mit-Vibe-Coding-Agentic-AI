export interface OnboardingHelpItem {
  title: string;
  detail: string;
}

export interface OnboardingResourceLink {
  label: string;
  href: string;
}

export interface OnboardingStep {
  id: number;
  title: string;
  goal: string;
  tasks: string[];
  fallbackHelp: OnboardingHelpItem[];
  successCriterion: string;
  resources?: OnboardingResourceLink[];
  vscodeHint?: string[];
  markdownSource?: string; // Pfad zur optionalen Markdown-Erklärung
}
