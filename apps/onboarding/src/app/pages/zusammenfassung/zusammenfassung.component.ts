import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ONBOARDING_STEP_COUNT, ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-zusammenfassung',
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './zusammenfassung.component.html',
  styleUrl: './zusammenfassung.component.scss'
})
export class ZusammenfassungComponent {
  private readonly state = inject(OnboardingStateService);
  private readonly route = inject(ActivatedRoute);
  private readonly fallbackCourseId = 'vibe-coding-agentic-ai';

  readonly stepCount = ONBOARDING_STEP_COUNT;
  readonly steps = ONBOARDING_STEPS;
  readonly completedCount = computed(() => this.state.getCompletedCount());
  readonly allDone = computed(() => this.completedCount() === ONBOARDING_STEP_COUNT);
  readonly firstIncompleteStepId = computed(() => this.state.getFirstIncompleteStepId());
  readonly nextStepsUrl = 'https://github.com/RubinaKapahnke/vibe-coding-0426/blob/main/course/00-course-guides/COURSE_MILESTONES.md';
  readonly exercisesReadmeUrl = 'https://github.com/RubinaKapahnke/vibe-coding-0426/blob/main/course/02-course-exercises/README_UEBUNGEN.md';
  readonly vscodeCourseEntryHints = [
    'Öffne das Kurs-Repo in VS Code.',
    'Druecke Strg+P (Windows) oder Cmd+P (Mac).',
    'Tippe course/00-course-guides/COURSE_MILESTONES.md und bestaetige mit Enter.'
  ] as const;

  private getCourseId(): string {
    return this.route.parent?.snapshot.paramMap.get('courseId') ?? this.fallbackCourseId;
  }

  getStepLink(stepId: number): string[] {
    return ['/kurse', this.getCourseId(), 'onboarding', 'step', String(stepId)];
  }

  isStepDone(stepId: number): boolean {
    return this.state.isStepDone(stepId);
  }
}
