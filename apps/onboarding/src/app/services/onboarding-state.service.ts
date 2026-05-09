import { Injectable, signal } from '@angular/core';

import { ONBOARDING_STEP_COUNT } from '../data/onboarding-steps.data';

const KEY_EXP = 'onboarding_step2_exp';
const KEY_VISIBILITY = 'onboarding_visibility_confirmed';
const KEY_COMPLETED = 'onboarding_completed_steps';
const KEY_SUBTASKS = 'onboarding_completed_subtasks';
const KEY_VOUCHER = 'onboarding_voucher';

/** MVP: Ein einziger gültiger Code. Wird später durch echte API-Validierung ersetzt. */
const VALID_VOUCHER_CODE = '90001';

export type Step2ExperienceChoice = 'new' | 'existing' | 'existing-beginner' | 'existing-experienced' | null;
export type ParticipationStatus = 'active' | 'new' | null;
export type HasVoucherAnswer = boolean | null;

@Injectable({
  providedIn: 'root'
})
export class OnboardingStateService {
  private readonly _completedSteps = signal<Set<number>>(this.loadCompletedSteps());
  private readonly _completedSubtasks = signal<Record<number, Set<number>>>(this.loadCompletedSubtasks());
  private readonly _step2Experience = signal<Step2ExperienceChoice>(this.loadExp());
  private readonly _githubVisibilityConfirmed = signal(this.loadVisibility());

  // Voucher-Gate (Step 1)
  private readonly _voucherValidated = signal<boolean>(sessionStorage.getItem(KEY_VOUCHER) === 'ok');
  private readonly _participationStatus = signal<ParticipationStatus>(null);
  private readonly _hasVoucherAnswer = signal<HasVoucherAnswer>(null);

  readonly step2Experience = this._step2Experience.asReadonly();
  readonly githubVisibilityConfirmed = this._githubVisibilityConfirmed.asReadonly();
  readonly voucherValidated = this._voucherValidated.asReadonly();
  readonly participationStatus = this._participationStatus.asReadonly();
  readonly hasVoucherAnswer = this._hasVoucherAnswer.asReadonly();

  isStepDone(stepId: number): boolean {
    return this._completedSteps().has(stepId);
  }

  getCompletedCount(): number {
    return this._completedSteps().size;
  }

  getCompletedStepIds(): number[] {
    return [...this._completedSteps()].sort((a, b) => a - b);
  }

  getFirstIncompleteStepId(): number | null {
    for (let stepId = 1; stepId <= ONBOARDING_STEP_COUNT; stepId++) {
      if (!this.isStepDone(stepId)) {
        return stepId;
      }
    }
    return null;
  }

  markStepCompleted(stepId: number): void {
    if (stepId < 1 || stepId > ONBOARDING_STEP_COUNT) return;
    this._completedSteps.update(set => new Set([...set, stepId]));
    this.persistCompletedSteps();
  }

  toggleStepCompleted(stepId: number): void {
    if (this.isStepDone(stepId)) {
      this.unmarkStepCompleted(stepId);
      return;
    }
    this.markStepCompleted(stepId);
  }

  unmarkStepCompleted(stepId: number): void {
    this._completedSteps.update(set => {
      const next = new Set(set);
      next.delete(stepId);
      return next;
    });
    this.persistCompletedSteps();
  }

  isSubtaskDone(stepId: number, taskIndex: number): boolean {
    return this._completedSubtasks()[stepId]?.has(taskIndex) ?? false;
  }

  areStepSubtasksDone(stepId: number, taskCount: number): boolean {
    if (taskCount === 0) return true;
    const completedTasks = this._completedSubtasks()[stepId];
    return Array.from({ length: taskCount }).every((_, index) => completedTasks?.has(index));
  }

  setSubtaskDone(stepId: number, taskIndex: number, done: boolean): void {
    if (stepId < 1 || stepId > ONBOARDING_STEP_COUNT || taskIndex < 0) return;
    this._completedSubtasks.update(current => {
      const next: Record<number, Set<number>> = { ...current };
      const stepTasks = new Set(next[stepId] ?? []);
      if (done) {
        stepTasks.add(taskIndex);
      } else {
        stepTasks.delete(taskIndex);
      }
      next[stepId] = stepTasks;
      return next;
    });
    if (!done) {
      this.unmarkStepCompleted(stepId);
    }
    this.persistCompletedSubtasks();
  }

  /** Keine Sperre mehr – behalten für mögliche externe Aufrufe, tut nichts */
  unlockStep(_stepId: number): void { /* no-op */ }

  setParticipationStatus(status: ParticipationStatus): void {
    this._participationStatus.set(status);
    this._hasVoucherAnswer.set(null); // Reset bei Statuswechsel
  }

  setHasVoucherAnswer(val: boolean): void {
    this._hasVoucherAnswer.set(val);
  }

  /**
   * Validiert den eingegebenen Voucher-Code.
   * MVP: Einziger gültiger Code ist '90001'.
   * @returns true wenn gültig, false wenn ungültig
   */
  validateVoucher(code: string): boolean {
    if (code.trim() === VALID_VOUCHER_CODE) {
      this._voucherValidated.set(true);
      sessionStorage.setItem(KEY_VOUCHER, 'ok');
      return true;
    }
    return false;
  }

  setStep2Experience(choice: Step2ExperienceChoice): void {
    this._step2Experience.set(choice);
    if (choice !== null) {
      sessionStorage.setItem(KEY_EXP, choice);
    } else {
      sessionStorage.removeItem(KEY_EXP);
    }
  }

  /** Spezialisiert 'existing' zu 'existing-beginner' oder 'existing-experienced' */
  setRepoExperience(experience: 'beginner' | 'experienced'): void {
    const choice: Step2ExperienceChoice = experience === 'beginner' ? 'existing-beginner' : 'existing-experienced';
    this._step2Experience.set(choice);
    sessionStorage.setItem(KEY_EXP, choice);
  }

  confirmGithubVisibility(confirmed: boolean): void {
    this._githubVisibilityConfirmed.set(confirmed);
    sessionStorage.setItem(KEY_VISIBILITY, confirmed ? '1' : '0');
  }

  canCompleteStep2(): boolean {
    const exp = this._step2Experience();
    if (exp === null || exp === 'existing') return false; // Nicht fertig bis spezialisiert
    if (exp === 'existing-beginner' || exp === 'existing-experienced') {
      return this._githubVisibilityConfirmed();
    }
    return true;
  }

  resetStep2ToNewPath(): void {
    this._step2Experience.set('new');
    this._githubVisibilityConfirmed.set(false);
    sessionStorage.setItem(KEY_EXP, 'new');
    sessionStorage.removeItem(KEY_VISIBILITY);
  }

  getProgressPercent(): number {
    return (this._completedSteps().size / ONBOARDING_STEP_COUNT) * 100;
  }

  private loadCompletedSteps(): Set<number> {
    const stored = sessionStorage.getItem(KEY_COMPLETED);
    if (!stored) return new Set();
    return new Set(stored.split(',').map(Number).filter(n => Number.isInteger(n) && n >= 1 && n <= ONBOARDING_STEP_COUNT));
  }

  private persistCompletedSteps(): void {
    sessionStorage.setItem(KEY_COMPLETED, [...this._completedSteps()].join(','));
  }

  private loadCompletedSubtasks(): Record<number, Set<number>> {
    const stored = sessionStorage.getItem(KEY_SUBTASKS);
    if (!stored) return {};

    try {
      const parsed = JSON.parse(stored) as Record<string, number[]>;
      return Object.entries(parsed).reduce<Record<number, Set<number>>>((result, [stepId, indexes]) => {
        const numericStepId = Number(stepId);
        if (!Number.isInteger(numericStepId) || numericStepId < 1 || numericStepId > ONBOARDING_STEP_COUNT || !Array.isArray(indexes)) {
          return result;
        }
        result[numericStepId] = new Set(indexes.filter(index => Number.isInteger(index) && index >= 0));
        return result;
      }, {});
    } catch {
      return {};
    }
  }

  private persistCompletedSubtasks(): void {
    const serializable = Object.entries(this._completedSubtasks()).reduce<Record<string, number[]>>(
      (result, [stepId, indexes]) => ({ ...result, [stepId]: [...indexes].sort((a, b) => a - b) }),
      {}
    );
    sessionStorage.setItem(KEY_SUBTASKS, JSON.stringify(serializable));
  }

  private loadExp(): Step2ExperienceChoice {
    const stored = sessionStorage.getItem(KEY_EXP);
    return stored === 'new' || stored === 'existing' ? stored : null;
  }

  private loadVisibility(): boolean {
    return sessionStorage.getItem(KEY_VISIBILITY) === '1';
  }
}
