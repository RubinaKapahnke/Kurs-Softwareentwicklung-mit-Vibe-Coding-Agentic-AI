import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-startseite',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {
  private readonly state = inject(OnboardingStateService);

  readonly maxUnlockedStep = this.state.maxUnlockedStep;
  readonly hasProgress = computed(() => this.state.maxUnlockedStep() > 1);
  readonly isCompleted = computed(() => this.state.maxUnlockedStep() >= 6);
}
