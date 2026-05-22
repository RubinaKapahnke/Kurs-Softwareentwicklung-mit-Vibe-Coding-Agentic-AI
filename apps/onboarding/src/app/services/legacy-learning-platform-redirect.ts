const DEFAULT_COURSE_ID = 'vibe-coding-agentic-ai';

export const LEARNING_PLATFORM_BASE_URL = 'http://localhost:4201';
export const LEGACY_REDIRECT_FLAG_KEY = 'learning_platform_redirect_enabled';

function normalizePath(pathname: string): string {
  const value = pathname.trim();
  return value.length > 0 ? value : '/';
}

export function isLegacyRedirectEnabled(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(LEGACY_REDIRECT_FLAG_KEY) === '1';
}

export function setLegacyRedirectEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(LEGACY_REDIRECT_FLAG_KEY, enabled ? '1' : '0');
}

export function mapLegacyPathToLearningPlatform(pathname: string): string {
  const normalized = normalizePath(pathname);

  let match = normalized.match(/^\/kurse\/([^/]+)\/onboarding\/step\/(\d+)$/);
  if (match) {
    return `/kurse/${match[1]}/module/m01-onboarding/step/${match[2]}`;
  }

  match = normalized.match(/^\/onboarding\/step\/(\d+)$/);
  if (match) {
    return `/kurse/${DEFAULT_COURSE_ID}/module/m01-onboarding/step/${match[1]}`;
  }

  match = normalized.match(/^\/kurse\/([^/]+)\/onboarding\/zusammenfassung$/);
  if (match) {
    return `/kurse/${match[1]}/module/m01-onboarding`;
  }

  if (normalized === '/onboarding/zusammenfassung') {
    return `/kurse/${DEFAULT_COURSE_ID}/module/m01-onboarding`;
  }

  match = normalized.match(/^\/kurse\/([^/]+)\/onboarding$/);
  if (match) {
    return `/kurse/${match[1]}/module/m01-onboarding`;
  }

  match = normalized.match(/^\/kurse\/([^/]+)$/);
  if (match) {
    return `/kurse/${match[1]}/module/m01-onboarding`;
  }

  if (normalized === '/onboarding') {
    return `/kurse/${DEFAULT_COURSE_ID}/module/m01-onboarding`;
  }

  return '/';
}

export function buildLearningPlatformRedirectUrl(pathname: string): string {
  const mappedPath = mapLegacyPathToLearningPlatform(pathname);
  return `${LEARNING_PLATFORM_BASE_URL}${mappedPath}`;
}
