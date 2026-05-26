import { Injectable, signal } from '@angular/core';

import { OnboardingExerciseStatus } from '../models/onboarding.models';

import { ONBOARDING_STEP_COUNT } from '../data/onboarding-steps.data';

const DEFAULT_COURSE_ID = 'vibe-coding-agentic-ai';
const KEY_EXP_SUFFIX = 'step2_exp';
const KEY_VISIBILITY_SUFFIX = 'visibility_confirmed';
const KEY_COMPLETED_SUFFIX = 'completed_steps';
const KEY_SUBTASKS_SUFFIX = 'completed_subtasks';
const KEY_VOUCHER_SUFFIX = 'voucher';
const KEY_QUIZZES_SUFFIX = 'quizzes';
const KEY_EXERCISES_SUFFIX = 'exercises';
const ACCOUNT_SETUP_STEP_ID = 2;

/** MVP: Ein einziger gültiger Code. Wird später durch echte API-Validierung ersetzt. */
const VALID_VOUCHER_CODE = '90001';

/**
 * Lektion-2-Pfade:
 * - null: noch keine Auswahl
 * - existing: Account vorhanden, aber Lernpfad noch nicht konkretisiert
 * - existing-beginner: bestehender Account + Lektion bearbeiten
 * - existing-experienced: bestehender Account + Lektion überspringen
 * - new: kein Account, normaler Neuanlage-Pfad
 * - new-skip: Wechsel von existing-experienced auf "Neuen Account erstellen"
 */
export type Step2ExperienceChoice = 'new' | 'new-skip' | 'existing' | 'existing-beginner' | 'existing-experienced' | null;
export type ParticipationStatus = 'active' | 'new' | null;
export type HasVoucherAnswer = boolean | null;

export interface QuizState {
  selectedOptionIds: string[];
  evaluated: boolean;
  passed: boolean;
}

interface ExerciseState {
  checkedStepIndexes: number[];
  status: OnboardingExerciseStatus;
}

type ExerciseStateMap = Record<number, Record<number, ExerciseState>>;

@Injectable({
  providedIn: 'root'
})
export class OnboardingStateService {
  private readonly _courseContext = signal<string>(DEFAULT_COURSE_ID);
  private readonly _completedSteps = signal<Set<number>>(this.loadCompletedSteps());
  private readonly _completedSubtasks = signal<Record<number, Set<number>>>(this.loadCompletedSubtasks());
  private readonly _step2Experience = signal<Step2ExperienceChoice>(this.loadExp());
  private readonly _githubVisibilityConfirmed = signal(this.loadVisibility());
  private readonly _quizzes = signal<Record<string, QuizState>>(this.loadQuizzes());
  private readonly _exercises = signal<ExerciseStateMap>(this.loadExercises());

  // Voucher-Gate (Step 1)
  private readonly _voucherValidated = signal<boolean>(this.loadVoucherValidated());
  private readonly _participationStatus = signal<ParticipationStatus>(null);
  private readonly _hasVoucherAnswer = signal<HasVoucherAnswer>(null);

  readonly courseContext = this._courseContext.asReadonly();
  readonly step2Experience = this._step2Experience.asReadonly();
  readonly githubVisibilityConfirmed = this._githubVisibilityConfirmed.asReadonly();
  readonly voucherValidated = this._voucherValidated.asReadonly();
  readonly participationStatus = this._participationStatus.asReadonly();
  readonly hasVoucherAnswer = this._hasVoucherAnswer.asReadonly();

  setCourseContext(courseId: string): void {
    const normalizedCourseId = this.normalizeCourseId(courseId);

    if (normalizedCourseId === this._courseContext()) {
      return;
    }

    this._courseContext.set(normalizedCourseId);
    this.reloadCourseScopedState();
  }

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

  /** Keine Sperre mehr - behalten fuer moegliche externe Aufrufe, tut nichts */
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
   * MVP: Einziger gueltiger Code ist '90001'.
   * @returns true wenn gueltig, false wenn ungueltig
   */
  validateVoucher(code: string): boolean {
    if (code.trim() === VALID_VOUCHER_CODE) {
      this._voucherValidated.set(true);
      localStorage.setItem(this.storageKey(KEY_VOUCHER_SUFFIX), 'ok');
      return true;
    }
    return false;
  }

  setStep2Experience(choice: Step2ExperienceChoice): void {
    const previousChoice = this._step2Experience();

    if (previousChoice !== choice) {
      this.resetAccountSetupProgress();
    }

    // The visibility confirmation is only valid for specialized existing-account paths.
    if (choice === null || choice === 'new' || choice === 'existing') {
      this._githubVisibilityConfirmed.set(false);
      localStorage.removeItem(this.storageKey(KEY_VISIBILITY_SUFFIX));
    }

    this._step2Experience.set(choice);
    if (choice !== null) {
      localStorage.setItem(this.storageKey(KEY_EXP_SUFFIX), choice);
    } else {
      localStorage.removeItem(this.storageKey(KEY_EXP_SUFFIX));
    }
  }

  /** Spezialisiert 'existing' zu 'existing-beginner' oder 'existing-experienced' */
  setRepoExperience(experience: 'beginner' | 'experienced'): void {
    const choice: Step2ExperienceChoice = experience === 'beginner' ? 'existing-beginner' : 'existing-experienced';

    if (this._step2Experience() !== choice) {
      this.resetAccountSetupProgress();
    }

    this._step2Experience.set(choice);
    localStorage.setItem(this.storageKey(KEY_EXP_SUFFIX), choice);
  }

  confirmGithubVisibility(confirmed: boolean): void {
    this._githubVisibilityConfirmed.set(confirmed);
    localStorage.setItem(this.storageKey(KEY_VISIBILITY_SUFFIX), confirmed ? '1' : '0');
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
    const wasExperienced = this._step2Experience() === 'existing-experienced';
    this.resetAccountSetupProgress();
    // Erfahrene User, die zu neuem Account wechseln, überspringen den Lesson-Flow
    const newChoice: Step2ExperienceChoice = wasExperienced ? 'new-skip' : 'new';
    this._step2Experience.set(newChoice);
    // Bei Wechsel auf neuen Account wird die explizite Sichtbarkeitsbestaetigung immer zurueckgesetzt.
    this._githubVisibilityConfirmed.set(false);
    localStorage.setItem(this.storageKey(KEY_EXP_SUFFIX), newChoice);
    localStorage.removeItem(this.storageKey(KEY_VISIBILITY_SUFFIX));
  }

  getProgressPercent(): number {
    return (this._completedSteps().size / ONBOARDING_STEP_COUNT) * 100;
  }

  getQuizState(lessonKey: string): QuizState | null {
    const state = this._quizzes()[lessonKey] ?? null;
    console.log(`[QuizService] getQuizState(${lessonKey}):`, state);
    return state;
  }

  saveQuizState(lessonKey: string, state: QuizState): void {
    console.log(`[QuizService] saveQuizState(${lessonKey}):`, state);
    this._quizzes.update(quizzes => {
      const next = { ...quizzes };
      next[lessonKey] = state;
      return next;
    });
    this.persistQuizzes();
  }

  clearQuizState(lessonKey: string): void {
    console.log(`[QuizService] clearQuizState(${lessonKey})`);
    this._quizzes.update(quizzes => {
      const next = { ...quizzes };
      delete next[lessonKey];
      return next;
    });
    this.persistQuizzes();
  }

  isExerciseStepChecked(stepId: number, exerciseIndex: number, stepIndex: number): boolean {
    const exercise = this._exercises()[stepId]?.[exerciseIndex];
    if (!exercise) {
      return false;
    }
    return exercise.checkedStepIndexes.includes(stepIndex);
  }

  setExerciseStepChecked(stepId: number, exerciseIndex: number, stepIndex: number, checked: boolean): void {
    if (stepId < 1 || stepId > ONBOARDING_STEP_COUNT || exerciseIndex < 0 || stepIndex < 0) {
      return;
    }

    this._exercises.update((current) => {
      const next: ExerciseStateMap = {
        ...current,
        [stepId]: { ...(current[stepId] ?? {}) },
      };

      const existing = next[stepId][exerciseIndex] ?? { checkedStepIndexes: [], status: null };
      const checkedSet = new Set(existing.checkedStepIndexes);
      if (checked) {
        checkedSet.add(stepIndex);
      } else {
        checkedSet.delete(stepIndex);
      }

      next[stepId][exerciseIndex] = {
        ...existing,
        checkedStepIndexes: [...checkedSet].sort((a, b) => a - b),
      };

      return next;
    });

    this.persistExercises();
  }

  getExerciseStatus(stepId: number, exerciseIndex: number): OnboardingExerciseStatus {
    return this._exercises()[stepId]?.[exerciseIndex]?.status ?? null;
  }

  setExerciseStatus(stepId: number, exerciseIndex: number, status: OnboardingExerciseStatus): void {
    if (stepId < 1 || stepId > ONBOARDING_STEP_COUNT || exerciseIndex < 0) {
      return;
    }

    this._exercises.update((current) => {
      const next: ExerciseStateMap = {
        ...current,
        [stepId]: { ...(current[stepId] ?? {}) },
      };

      const existing = next[stepId][exerciseIndex] ?? { checkedStepIndexes: [], status: null };
      next[stepId][exerciseIndex] = {
        ...existing,
        status,
      };

      return next;
    });

    this.persistExercises();
  }

  private loadCompletedSteps(): Set<number> {
    const stored = localStorage.getItem(this.storageKey(KEY_COMPLETED_SUFFIX));
    if (!stored) return new Set();
    return new Set(stored.split(',').map(Number).filter(n => Number.isInteger(n) && n >= 1 && n <= ONBOARDING_STEP_COUNT));
  }

  private persistCompletedSteps(): void {
    localStorage.setItem(this.storageKey(KEY_COMPLETED_SUFFIX), [...this._completedSteps()].join(','));
  }

  private loadCompletedSubtasks(): Record<number, Set<number>> {
    const stored = localStorage.getItem(this.storageKey(KEY_SUBTASKS_SUFFIX));
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
    localStorage.setItem(this.storageKey(KEY_SUBTASKS_SUFFIX), JSON.stringify(serializable));
  }

  private loadExp(): Step2ExperienceChoice {
    const stored = localStorage.getItem(this.storageKey(KEY_EXP_SUFFIX));
    return stored === 'new' ||
      stored === 'new-skip' ||
      stored === 'existing' ||
      stored === 'existing-beginner' ||
      stored === 'existing-experienced'
      ? stored
      : null;
  }

  private loadVisibility(): boolean {
    return localStorage.getItem(this.storageKey(KEY_VISIBILITY_SUFFIX)) === '1';
  }

  private loadVoucherValidated(): boolean {
    return localStorage.getItem(this.storageKey(KEY_VOUCHER_SUFFIX)) === 'ok';
  }

  private reloadCourseScopedState(): void {
    this._completedSteps.set(this.loadCompletedSteps());
    this._completedSubtasks.set(this.loadCompletedSubtasks());
    this._step2Experience.set(this.loadExp());
    this._githubVisibilityConfirmed.set(this.loadVisibility());
    this._voucherValidated.set(this.loadVoucherValidated());
    this._quizzes.set(this.loadQuizzes());
    this._exercises.set(this.loadExercises());
    this._participationStatus.set(null);
    this._hasVoucherAnswer.set(null);
  }

  private storageKey(suffix: string): string {
    return `onboarding_${this._courseContext()}_${suffix}`;
  }

  private normalizeCourseId(courseId: string | null | undefined): string {
    const value = (courseId ?? '').trim();
    return value.length > 0 ? value : DEFAULT_COURSE_ID;
  }

  private resetAccountSetupProgress(): void {
    this._completedSubtasks.update(current => {
      if (!(ACCOUNT_SETUP_STEP_ID in current)) {
        return current;
      }

      const next: Record<number, Set<number>> = { ...current };
      delete next[ACCOUNT_SETUP_STEP_ID];
      return next;
    });
    this.persistCompletedSubtasks();

    this.unmarkStepCompleted(ACCOUNT_SETUP_STEP_ID);
  }

  private loadQuizzes(): Record<string, QuizState> {
    const stored = localStorage.getItem(this.storageKey(KEY_QUIZZES_SUFFIX));
    console.log(`[Service] loadQuizzes() from ${this.storageKey(KEY_QUIZZES_SUFFIX)}:`, stored);
    if (!stored) return {};

    try {
      const parsed = JSON.parse(stored) as Record<string, QuizState>;
      const result = Object.entries(parsed).reduce<Record<string, QuizState>>((result, [key, state]) => {
        if (Array.isArray(state.selectedOptionIds) && typeof state.evaluated === 'boolean' && typeof state.passed === 'boolean') {
          result[key] = state;
        }
        return result;
      }, {});
      console.log(`[Service] loadQuizzes() parsed:`, result);
      return result;
    } catch (e) {
      console.error(`[Service] loadQuizzes() parse error:`, e);
      return {};
    }
  }

  private persistQuizzes(): void {
    const key = this.storageKey(KEY_QUIZZES_SUFFIX);
    const value = JSON.stringify(this._quizzes());
    console.log(`[Service] persistQuizzes() to ${key}:`, value);
    localStorage.setItem(key, value);
  }

  private loadExercises(): ExerciseStateMap {
    const stored = localStorage.getItem(this.storageKey(KEY_EXERCISES_SUFFIX));
    if (!stored) {
      return {};
    }

    try {
      const parsed = JSON.parse(stored) as Record<string, Record<string, ExerciseState>>;
      return Object.entries(parsed).reduce<ExerciseStateMap>((result, [stepIdKey, stepState]) => {
        const stepId = Number(stepIdKey);
        if (!Number.isInteger(stepId) || stepId < 1 || stepId > ONBOARDING_STEP_COUNT || typeof stepState !== 'object' || !stepState) {
          return result;
        }

        const exercises = Object.entries(stepState).reduce<Record<number, ExerciseState>>((exerciseResult, [exerciseIndexKey, exercise]) => {
          const exerciseIndex = Number(exerciseIndexKey);
          if (!Number.isInteger(exerciseIndex) || exerciseIndex < 0 || !exercise || !Array.isArray(exercise.checkedStepIndexes)) {
            return exerciseResult;
          }

          const status: OnboardingExerciseStatus = exercise.status === 'completed' || exercise.status === 'failed'
            ? exercise.status
            : null;

          exerciseResult[exerciseIndex] = {
            checkedStepIndexes: exercise.checkedStepIndexes.filter((index) => Number.isInteger(index) && index >= 0),
            status,
          };
          return exerciseResult;
        }, {});

        result[stepId] = exercises;
        return result;
      }, {});
    } catch {
      return {};
    }
  }

  private persistExercises(): void {
    localStorage.setItem(this.storageKey(KEY_EXERCISES_SUFFIX), JSON.stringify(this._exercises()));
  }
}

