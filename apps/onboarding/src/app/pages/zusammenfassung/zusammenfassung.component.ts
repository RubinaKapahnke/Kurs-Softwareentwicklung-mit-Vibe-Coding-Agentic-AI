import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-zusammenfassung',
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './zusammenfassung.component.html',
  styleUrl: './zusammenfassung.component.scss'
})
export class ZusammenfassungComponent {
  private readonly state = inject(OnboardingStateService);

  readonly steps = ONBOARDING_STEPS;
  readonly completedCount = computed(() => this.state.getCompletedCount());
  readonly allDone = computed(() => this.completedCount() === 6);

  isStepDone(stepId: number): boolean {
    return this.state.isStepDone(stepId);
  }
}
