import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingStateService {
  private readonly _maxUnlockedStep = signal(1);

  readonly maxUnlockedStep = this._maxUnlockedStep.asReadonly();

  canAccessStep(stepId: number): boolean {
    return stepId >= 1 && stepId <= 6 && stepId <= this._maxUnlockedStep();
  }

  markStepCompleted(stepId: number): void {
    if (stepId < 1 || stepId > 6) {
      return;
    }

    const nextUnlocked = Math.min(6, stepId + 1);
    this._maxUnlockedStep.update((current) => Math.max(current, nextUnlocked));
  }

  getProgressPercent(): number {
    return (this._maxUnlockedStep() / 6) * 100;
  }
}
