import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

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

  readonly progressPercent = computed(() => this.state.getProgressPercent());
  readonly completedCount = computed(() => this.state.getCompletedCount());

  /** Liste aller 6 Schritte für die Navigation */
  readonly allSteps = [1, 2, 3, 4, 5, 6] as const;

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
}
