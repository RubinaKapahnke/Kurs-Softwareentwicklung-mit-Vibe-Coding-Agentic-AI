import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-onboarding-shell',
  imports: [
    CommonModule,
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
}
