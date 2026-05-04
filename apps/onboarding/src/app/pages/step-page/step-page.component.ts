import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStep } from '../../models/onboarding.models';
import { OnboardingStateService, Step2ExperienceChoice } from '../../services/onboarding-state.service';
import { StepSkipDialogComponent, StepSkipDialogResult } from './step-skip-dialog.component';

@Component({
  selector: 'app-step-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
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
  private readonly dialog = inject(MatDialog);
  readonly state = inject(OnboardingStateService);

  readonly step = computed<OnboardingStep>(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return ONBOARDING_STEPS.find((item) => item.id === id) ?? ONBOARDING_STEPS[0];
  });

  readonly canGoBack = computed(() => this.step().id > 1);

  readonly isStep2 = computed(() => this.step().id === 2);
  readonly isBrueckeStep = computed(() => this.step().id === 6);

  /** Schritt gilt als erledigt wenn der nächste bereits freigeschaltet ist */
  readonly isCurrentStepDone = computed(
    () => this.state.maxUnlockedStep() > this.step().id
  );

  readonly step2CanComplete = computed(() => this.state.canCompleteStep2());

  /** "Als erledigt markieren" nur bei Schritt 2 blockiert, bis Erfahrung gewählt */
  readonly isDoneDisabled = computed(
    () => this.isStep2() && !this.step2CanComplete()
  );

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

  markDone(): void {
    this.state.markStepCompleted(this.step().id);
  }

  goToPreviousStep(): void {
    if (this.step().id > 1) {
      void this.router.navigate(['/onboarding/step', this.step().id - 1]);
    }
  }

  /** Weiter ist immer erlaubt – bei nicht erledigtem Schritt erscheint ein Dialog */
  goToNextStep(): void {
    const currentStep = this.step().id;
    if (currentStep >= 6) return;

    if (this.isCurrentStepDone()) {
      void this.router.navigate(['/onboarding/step', currentStep + 1]);
      return;
    }

    const ref = this.dialog.open(StepSkipDialogComponent, { width: '420px' });
    ref.afterClosed().subscribe((result: StepSkipDialogResult | undefined) => {
      if (result === 'mark-done') {
        this.state.markStepCompleted(currentStep);
      }
      // In beiden Fällen (mark-done + skip) navigieren wir weiter
      // Schritt bleibt zugänglich, Guard erlaubt Vorwärts-Navigation via maxUnlockedStep
      this.state.unlockStep(currentStep + 1);
      void this.router.navigate(['/onboarding/step', currentStep + 1]);
    });
  }

  finishOnboarding(): void {
    this.state.markStepCompleted(6);
    void this.router.navigate(['/']);
  }
}
