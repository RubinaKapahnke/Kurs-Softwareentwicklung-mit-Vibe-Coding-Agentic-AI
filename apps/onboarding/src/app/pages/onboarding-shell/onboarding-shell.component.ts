import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-onboarding-shell',
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  templateUrl: './onboarding-shell.component.html',
  styleUrl: './onboarding-shell.component.scss'
})
export class OnboardingShellComponent {
  private readonly state = inject(OnboardingStateService);

  readonly maxUnlockedStep = this.state.maxUnlockedStep;
  readonly progressPercent = computed(() => this.state.getProgressPercent());

  /** Liste aller 6 Schritte für die Navigation */
  readonly allSteps = [1, 2, 3, 4, 5, 6] as const;

  isUnlocked(stepId: number): boolean {
    return stepId <= this.maxUnlockedStep();
  }
}
