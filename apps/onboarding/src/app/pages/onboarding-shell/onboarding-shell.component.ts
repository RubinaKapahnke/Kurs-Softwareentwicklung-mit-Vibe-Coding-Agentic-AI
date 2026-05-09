import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ONBOARDING_STEP_COUNT, ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-onboarding-shell',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  templateUrl: './onboarding-shell.component.html',
  styleUrl: './onboarding-shell.component.scss'
})
export class OnboardingShellComponent {
  private readonly state = inject(OnboardingStateService);
  private readonly route = inject(ActivatedRoute);
  readonly stepCount = ONBOARDING_STEP_COUNT;
  readonly currentCourseId = toSignal(
    this.route.paramMap.pipe(map(params => params.get('courseId') ?? 'vibe-coding-agentic-ai')),
    { initialValue: this.route.snapshot.paramMap.get('courseId') ?? 'vibe-coding-agentic-ai' }
  );

  readonly progressPercent = computed(() => this.state.getProgressPercent());
  readonly completedCount = computed(() => this.state.getCompletedCount());

  /** Liste aller Schritte fuer die Navigation */
  readonly allSteps = ONBOARDING_STEPS.map((step) => step.id);
  readonly summaryLink = computed(() => ['/kurse', this.currentCourseId(), 'onboarding', 'zusammenfassung']);

  private readonly syncCourseContext = effect(() => {
    this.state.setCourseContext(this.currentCourseId());
  });

  private readonly currentStepId = toSignal(
    this.route.firstChild!.params.pipe(map(p => Number(p['id']))),
    { initialValue: 0 }
  );

  isStepDone(stepId: number): boolean {
    return this.state.isStepDone(stepId);
  }

  isCurrentStep(stepId: number): boolean {
    return stepId === this.currentStepId();
  }

  getStepLink(stepId: number): string[] {
    return ['/kurse', this.currentCourseId(), 'onboarding', 'step', String(stepId)];
  }
}
