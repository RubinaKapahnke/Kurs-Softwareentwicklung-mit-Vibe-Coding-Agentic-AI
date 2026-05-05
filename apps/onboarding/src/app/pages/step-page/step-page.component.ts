import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStep } from '../../models/onboarding.models';
import { OnboardingStateService, Step2ExperienceChoice, ParticipationStatus } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-step-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.scss'
})
export class StepPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly state = inject(OnboardingStateService);
  private readonly routeParamMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });

  readonly step = computed<OnboardingStep>(() => {
    const id = Number(this.routeParamMap().get('id'));
    return ONBOARDING_STEPS.find((item) => item.id === id) ?? ONBOARDING_STEPS[0];
  });

  readonly canGoBack = computed(() => this.step().id > 1);

  readonly isAccountChoiceStep = computed(() => this.step().id === 1);
  readonly isOwnRepoStep = computed(() => this.step().id === 2);
  readonly isInviteStep = computed(() => this.step().id === 3);
  readonly isExerciseStep = computed(() => this.step().id === 4);
  readonly isSetupStep = computed(() => this.step().id === 5);
  readonly isBrueckeStep = computed(() => this.step().id === 6);

  // Voucher-Gate
  readonly showVoucherInput = computed(() => {
    const status = this.state.participationStatus();
    const hasVoucher = this.state.hasVoucherAnswer();
    return status === 'active' || (status === 'new' && hasVoucher === true);
  });
  readonly showContactInfo = computed(() =>
    this.state.participationStatus() === 'new' && this.state.hasVoucherAnswer() === false
  );
  readonly voucherInput = signal('');
  readonly voucherError = signal(false);
  readonly voucherCopied = signal(false);

  /** Schritt gilt als erledigt wenn er explizit markiert wurde */
  readonly isCurrentStepDone = computed(
    () => this.state.isStepDone(this.step().id)
  );

  readonly step2CanComplete = computed(() => this.state.canCompleteStep2());

  /** Inline-Erklärung "Was ist GitHub?" */
  readonly showGithubExplanation = signal(false);
  toggleGithubExplanation(): void {
    this.showGithubExplanation.update(v => !v);
  }

  /** Inline-Erklärung "Was ist Git?" */
  readonly showGitExplanation = signal(false);
  toggleGitExplanation(): void {
    this.showGitExplanation.update(v => !v);
  }

  /** "Als erledigt markieren" blockiert bis Voucher validiert UND Auswahl getroffen */
  readonly isDoneDisabled = computed(
    () => this.isAccountChoiceStep() && (!this.state.voucherValidated() || !this.step2CanComplete())
  );

  selectExperience(choice: Step2ExperienceChoice): void {
    this.state.setStep2Experience(choice);
  }

  setParticipationStatus(status: ParticipationStatus): void {
    this.state.setParticipationStatus(status);
    this.voucherInput.set('');
    this.voucherError.set(false);
  }

  setHasVoucher(val: boolean): void {
    this.state.setHasVoucherAnswer(val);
    this.voucherInput.set('');
    this.voucherError.set(false);
  }

  submitVoucher(): void {
    const valid = this.state.validateVoucher(this.voucherInput());
    this.voucherError.set(!valid);
  }

  copyContactMessage(): void {
    const msg = `Hallo KnOot Academy Team,\n\nich interessiere mich für die Teilnahme an eurem Kurs "Vibe Coding Basics" und bitte um einen Zugangs-Voucher.\n\nVielen Dank!\n[Dein Name]`;
    navigator.clipboard.writeText(msg).then(() => {
      this.voucherCopied.set(true);
      setTimeout(() => this.voucherCopied.set(false), 2500);
    });
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

  /** Weiter: immer erlaubt, einfach navigieren */
  goToNextStep(): void {
    const currentStep = this.step().id;
    if (currentStep >= 6) return;
    void this.router.navigate(['/onboarding/step', currentStep + 1]);
  }

  finishOnboarding(): void {
    this.state.markStepCompleted(6);
    void this.router.navigate(['/onboarding/zusammenfassung']);
  }
}
