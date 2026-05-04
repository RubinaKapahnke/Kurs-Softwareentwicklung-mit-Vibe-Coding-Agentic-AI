import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStep } from '../../models/onboarding.models';
import { OnboardingStateService, Step2ExperienceChoice } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-step-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.scss'
})
export class StepPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly state = inject(OnboardingStateService);

  readonly step = computed<OnboardingStep>(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return ONBOARDING_STEPS.find((item) => item.id === id) ?? ONBOARDING_STEPS[0];
  });

  readonly canGoBack = computed(() => this.step().id > 1);
  readonly canGoNext = computed(
    () => this.step().id < 6 && this.step().id < this.state.maxUnlockedStep()
  );

  readonly isStep2 = computed(() => this.step().id === 2);
  readonly isBrueckeStep = computed(() => this.step().id === 6);

  readonly step2CanComplete = computed(() => this.state.canCompleteStep2());

  readonly isDoneDisabled = computed(() => {
    if (this.isStep2() && !this.step2CanComplete()) return true;
    return false;
  });

  selectExperience(choice: Step2ExperienceChoice): void {
    this.state.setStep2Experience(choice);
  }

  onVisibilityCheckboxChange(checked: boolean): void {
    this.state.confirmGithubVisibility(checked);
  }

  switchToNewPath(): void {
    this.state.resetStep2ToNewPath();
  }

  skipToStart(): void {
    void this.router.navigate(['/']);
  }

  markDoneAndContinue(): void {
    const currentStep = this.step().id;
    this.state.markStepCompleted(currentStep);

    if (currentStep < 6) {
      void this.router.navigate(['/onboarding/step', currentStep + 1]);
    } else {
      // Onboarding abgeschlossen → zurück zur Startseite
      void this.router.navigate(['/']);
    }
  }

  goToPreviousStep(): void {
    const currentStep = this.step().id;
    if (currentStep > 1) {
      void this.router.navigate(['/onboarding/step', currentStep - 1]);
    }
  }

  goToNextStep(): void {
    const currentStep = this.step().id;
    if (currentStep < 6 && currentStep < this.state.maxUnlockedStep()) {
      void this.router.navigate(['/onboarding/step', currentStep + 1]);
    }
  }
}
