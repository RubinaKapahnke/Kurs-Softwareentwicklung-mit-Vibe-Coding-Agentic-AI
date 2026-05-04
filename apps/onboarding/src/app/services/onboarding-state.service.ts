import { Injectable, signal } from '@angular/core';

const KEY_MAX_STEP = 'onboarding_max_step';
const KEY_EXP = 'onboarding_step2_exp';
const KEY_VISIBILITY = 'onboarding_visibility_confirmed';

export type Step2ExperienceChoice = 'new' | 'existing' | null;

@Injectable({
  providedIn: 'root'
})
export class OnboardingStateService {
  private readonly _maxUnlockedStep = signal(this.loadMaxStep());
  private readonly _step2Experience = signal<Step2ExperienceChoice>(this.loadExp());
  private readonly _githubVisibilityConfirmed = signal(this.loadVisibility());

  readonly maxUnlockedStep = this._maxUnlockedStep.asReadonly();
  readonly step2Experience = this._step2Experience.asReadonly();
  readonly githubVisibilityConfirmed = this._githubVisibilityConfirmed.asReadonly();

  canAccessStep(stepId: number): boolean {
    return stepId >= 1 && stepId <= 6 && stepId <= this._maxUnlockedStep();
  }

  markStepCompleted(stepId: number): void {
    if (stepId < 1 || stepId > 6) {
      return;
    }
    const nextUnlocked = Math.min(6, stepId + 1);
    this._maxUnlockedStep.update((current) => Math.max(current, nextUnlocked));
    sessionStorage.setItem(KEY_MAX_STEP, String(this._maxUnlockedStep()));
  }

  setStep2Experience(choice: Step2ExperienceChoice): void {
    this._step2Experience.set(choice);
    if (choice !== null) {
      sessionStorage.setItem(KEY_EXP, choice);
    } else {
      sessionStorage.removeItem(KEY_EXP);
    }
  }

  confirmGithubVisibility(confirmed: boolean): void {
    this._githubVisibilityConfirmed.set(confirmed);
    sessionStorage.setItem(KEY_VISIBILITY, confirmed ? '1' : '0');
  }

  canCompleteStep2(): boolean {
    const exp = this._step2Experience();
    if (exp === null) return false;
    if (exp === 'existing') return this._githubVisibilityConfirmed();
    return true;
  }

  resetStep2ToNewPath(): void {
    this._step2Experience.set('new');
    this._githubVisibilityConfirmed.set(false);
    sessionStorage.setItem(KEY_EXP, 'new');
    sessionStorage.removeItem(KEY_VISIBILITY);
  }

  getProgressPercent(): number {
    return (this._maxUnlockedStep() / 6) * 100;
  }

  private loadMaxStep(): number {
    const stored = sessionStorage.getItem(KEY_MAX_STEP);
    const parsed = Number(stored);
    return Number.isInteger(parsed) && parsed >= 1 && parsed <= 6 ? parsed : 1;
  }

  private loadExp(): Step2ExperienceChoice {
    const stored = sessionStorage.getItem(KEY_EXP);
    return stored === 'new' || stored === 'existing' ? stored : null;
  }

  private loadVisibility(): boolean {
    return sessionStorage.getItem(KEY_VISIBILITY) === '1';
  }
}
