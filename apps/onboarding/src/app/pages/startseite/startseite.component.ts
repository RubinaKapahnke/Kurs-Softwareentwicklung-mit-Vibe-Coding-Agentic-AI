import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ONBOARDING_STEP_COUNT } from '../../data/onboarding-steps.data';
import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-startseite',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {
  private readonly state = inject(OnboardingStateService);
  readonly stepCount = ONBOARDING_STEP_COUNT;

  readonly completedCount = computed(() => this.state.getCompletedCount());
  readonly hasProgress = computed(() => this.state.getCompletedCount() > 0);
  readonly isCompleted = computed(() => this.state.getCompletedCount() >= ONBOARDING_STEP_COUNT);
  readonly featuredCourseLabel = computed(() => this.hasProgress() ? 'Kurs fortsetzen' : 'Kurs starten');
  readonly featuredCourseLink = computed(() => {
    if (!this.hasProgress()) {
      return '/kursstart';
    }

    const firstIncompleteStepId = this.state.getFirstIncompleteStepId();
    return firstIncompleteStepId === null
      ? '/onboarding/zusammenfassung'
      : `/onboarding/step/${firstIncompleteStepId}`;
  });
}
