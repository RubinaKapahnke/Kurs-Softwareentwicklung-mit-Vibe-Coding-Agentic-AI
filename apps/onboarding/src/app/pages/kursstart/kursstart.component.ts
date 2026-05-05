import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-kursstart',
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './kursstart.component.html',
  styleUrl: './kursstart.component.scss'
})
export class KursstartComponent {
  private readonly state = inject(OnboardingStateService);

  readonly hasProgress = computed(() => this.state.maxUnlockedStep() > 1);
  readonly resumeStep = computed(() => Math.min(this.state.maxUnlockedStep(), 6));

  readonly promisePoints = [
    'Du arbeitest mit einem klaren Angular-, Git- und Copilot-Setup.',
    'Jeder Schritt hat ein sichtbares Erfolgskriterium statt diffuser Theorie.',
    'Nach dem Onboarding landest du direkt in NEXT_STEPS.md und im echten Kursfluss.'
  ] as const;

  readonly onboardingSteps = [
    'GitHub-Zugang vorbereiten',
    'Git lokal installieren',
    'VS Code aufsetzen',
    'Terminal in VS Code pruefen',
    'Repository lokal klonen',
    'In NEXT_STEPS.md und die Uebungen wechseln'
  ] as const;
}