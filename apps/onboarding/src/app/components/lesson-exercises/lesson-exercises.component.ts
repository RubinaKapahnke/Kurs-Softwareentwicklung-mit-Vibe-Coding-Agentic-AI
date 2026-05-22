import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { OnboardingExerciseStatus, OnboardingLessonExercise } from '../../models/onboarding.models';
import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-lesson-exercises',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatIconModule],
  templateUrl: './lesson-exercises.component.html',
  styleUrl: './lesson-exercises.component.scss'
})
export class LessonExercisesComponent {
  private readonly state = inject(OnboardingStateService);

  readonly stepId = input.required<number>();
  readonly exercises = input<OnboardingLessonExercise[]>([]);

  isStepChecked(exerciseIndex: number, stepIndex: number): boolean {
    return this.state.isExerciseStepChecked(this.stepId(), exerciseIndex, stepIndex);
  }

  toggleStep(exerciseIndex: number, stepIndex: number, checked: boolean): void {
    this.state.setExerciseStepChecked(this.stepId(), exerciseIndex, stepIndex, checked);
  }

  exerciseStatus(exerciseIndex: number): OnboardingExerciseStatus {
    return this.state.getExerciseStatus(this.stepId(), exerciseIndex);
  }

  setExerciseStatus(exerciseIndex: number, status: OnboardingExerciseStatus): void {
    this.state.setExerciseStatus(this.stepId(), exerciseIndex, status);
  }

  isExerciseCompleted(exerciseIndex: number): boolean {
    return this.exerciseStatus(exerciseIndex) === 'completed';
  }

  isExerciseFailed(exerciseIndex: number): boolean {
    return this.exerciseStatus(exerciseIndex) === 'failed';
  }
}
