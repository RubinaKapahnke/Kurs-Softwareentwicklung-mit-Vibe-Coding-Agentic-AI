import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


import { ONBOARDING_STEP_COUNT, ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingStep } from '../../models/onboarding.models';
import { OnboardingStateService, Step2ExperienceChoice, ParticipationStatus } from '../../services/onboarding-state.service';
import { MarkdownViewComponent } from '../../components/markdown-view/markdown-view.component';
import { LessonFlowComponent } from '../../components/lesson-flow/lesson-flow.component';
import { ChoiceCardComponent } from '../../components/choice-card/choice-card.component';
import { CalloutComponent } from '../../components/callout/callout.component';
import { VoucherGateComponent } from '../../components/voucher-gate/voucher-gate.component';
import { StepTasksComponent, SubtaskChange } from '../../components/step-tasks/step-tasks.component';
import { StepSkipDialogComponent, StepSkipDialogResult } from './step-skip-dialog.component';

@Component({
  selector: 'app-step-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MarkdownViewComponent,
    LessonFlowComponent,
    ChoiceCardComponent,
    CalloutComponent,
    VoucherGateComponent,
    StepTasksComponent,
    StepSkipDialogComponent
  ],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.scss'
})
export class StepPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  readonly state = inject(OnboardingStateService);
  readonly stepCount = ONBOARDING_STEP_COUNT;
  private readonly fallbackCourseId = 'vibe-coding-agentic-ai';
  private readonly routeParamMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });

  private getCourseId(): string {
    return this.route.parent?.snapshot.paramMap.get('courseId') ?? this.fallbackCourseId;
  }

  private buildStepLink(stepId: number): string[] {
    return ['/kurse', this.getCourseId(), 'onboarding', 'step', String(stepId)];
  }

  private buildSummaryLink(): string[] {
    return ['/kurse', this.getCourseId(), 'onboarding', 'zusammenfassung'];
  }

  readonly step = computed<OnboardingStep>(() => {
    const id = Number(this.routeParamMap().get('id'));
    return ONBOARDING_STEPS.find((item) => item.id === id) ?? ONBOARDING_STEPS[0];
  });

  readonly visibleLessonFlow = computed(() => {
    const lessonFlow = this.step().lessonFlow;
    if (!lessonFlow) {
      return null;
    }

    if (this.isAccountChoiceStep() && !this.showAccountStepFullInstructions()) {
      return null;
    }

    return lessonFlow;
  });

  readonly canGoBack = computed(() => this.step().id > 1);

  readonly isVoucherStep = computed(() => this.step().id === 1);
  readonly isAccountChoiceStep = computed(() => this.step().id === 3);
  readonly isOwnRepoStep = computed(() => this.step().id === 4);
  readonly isInviteStep = computed(() => this.step().id === 5);
  readonly isExerciseStep = computed(() => this.step().id === 6);
  readonly isVscodeInstallStep = computed(() => this.step().id === 8);
  readonly isGitInstallStep = computed(() => this.step().id === 10);
  readonly isCloneStep = computed(() => this.step().id === 11);
  readonly isFinishStep = computed(() => this.step().id === ONBOARDING_STEP_COUNT);

  @ViewChild('todoSection', { read: ElementRef }) private todoSection?: ElementRef<HTMLElement>;
  @ViewChild('lessonFlowSection') private lessonFlowSection?: ElementRef<HTMLElement>;

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
  readonly showVoucherSuccess = signal(false);
  private voucherSuccessTimeout: ReturnType<typeof setTimeout> | null = null;
  readonly githubProfileShareTask = 'Link zum GitHub-Profil an Dozent*in schicken (Teams oder E-Mail).';

  /** Schritt gilt als erledigt wenn er explizit markiert wurde */
  readonly isCurrentStepDone = computed(
    () => this.state.isStepDone(this.step().id)
  );

  readonly step2CanComplete = computed(() => this.state.canCompleteStep2());
  readonly allSubtasksDone = computed(() =>
    this.state.areStepSubtasksDone(this.step().id, this.step().tasks.length)
  );
  readonly githubProfileShareTaskIndex = computed(() => this.step().tasks.length);
  readonly githubProfileShareDone = computed(() =>
    this.state.isSubtaskDone(this.step().id, this.githubProfileShareTaskIndex())
  );
  readonly showAccountStepContent = computed(() =>
    !this.isAccountChoiceStep() || (
      this.state.voucherValidated() && this.state.step2Experience() !== null
    )
  );
  readonly showAccountStepFullInstructions = computed(() =>
    !this.isAccountChoiceStep() || (
      this.state.step2Experience() === 'new' ||
      this.state.step2Experience() === 'existing-beginner'
    )
  );
  readonly showAccountSecurityHint = computed(() =>
    this.isAccountChoiceStep() && this.state.step2Experience() === 'new'
  );
  readonly showRepoExperienceQuestion = computed(() =>
    this.isAccountChoiceStep() && this.state.voucherValidated() &&
    this.state.step2Experience() === 'existing' // Nur erste Frage beantwortet, noch nicht spezialisiert
  );
  readonly showExistingExperiencedOnlyContent = computed(() =>
    this.isAccountChoiceStep() && this.state.step2Experience() === 'existing-experienced'
  );
  readonly showStepResources = computed(() =>
    !this.isAccountChoiceStep() || this.showAccountStepContent()
  );
  readonly hasLessonFollowUpContent = computed(() => {
    if (!this.visibleLessonFlow()) {
      return false;
    }

    return this.showRepoExperienceQuestion() ||
      this.state.step2Experience() === 'existing-beginner' ||
      this.state.step2Experience() === 'existing-experienced' ||
      this.isInviteStep() ||
      this.isExerciseStep() ||
      this.isVscodeInstallStep() ||
      this.isGitInstallStep() ||
      this.isCloneStep() ||
      this.showTodoSection() ||
      this.showAccountSecurityHint() ||
      (this.step().resources?.length ?? 0) > 0 && this.showStepResources() ||
      (this.step().vscodeHint?.length ?? 0) > 0 && !this.isCloneStep();
  });
  readonly lessonFollowUpLabel = computed(() => {
    if (this.showTodoSection()) {
      return 'Unter der Lektion folgen noch Aufgaben.';
    }

    if (this.showRepoExperienceQuestion() || this.state.step2Experience() === 'existing-beginner' || this.state.step2Experience() === 'existing-experienced') {
      return 'Unter der Lektion folgt noch deine Auswahl fuer diesen Schritt.';
    }

    if (this.isCloneStep()) {
      return 'Unter der Lektion folgen noch die naechsten Kursschritte.';
    }

    return 'Unter der Lektion folgen noch weitere Hinweise.';
  });

  // Step 3: Unterschiedliche Inhalte für 'new' vs 'existing-beginner' vs 'existing-experienced'
  readonly step3Title = computed(() => {
    if (!this.isAccountChoiceStep()) return this.step().title;
    const exp = this.state.step2Experience();
    if (exp === 'new') return 'GitHub-Account anlegen';
    if (exp === 'existing' || exp === 'existing-beginner') return 'GitHub Repos und Git verstehen';
    if (exp === 'existing-experienced') return 'GitHub-Account verifizieren';
    return this.step().title;
  });

  readonly step3Goal = computed(() => {
    if (!this.isAccountChoiceStep()) return this.step().goal || '';
    const exp = this.state.step2Experience();
    if (exp === 'new')
      return 'Du erstellst deinen ersten GitHub-Account und stellst sicher, dass alles funktioniert.';
    if (exp === 'existing' || exp === 'existing-beginner')
      return 'Du lernst, wie GitHub Repos funktionieren und wie du sie im Kurs nutzt.';
    if (exp === 'existing-experienced')
      return 'Du überprüfst deinen Account und verstehst, wie die Sichtbarkeit im Kurs funktioniert.';
    return this.step().goal || '';
  });

  readonly step3VisibleTasks = computed(() => {
    if (!this.isAccountChoiceStep() || !this.showAccountStepFullInstructions()) {
      return [];
    }
    return this.step().tasks;
  });
  readonly showTodoSection = computed(() => {
    if (this.isVoucherStep() || !this.showAccountStepContent()) {
      return false;
    }

    if (this.isAccountChoiceStep() && this.state.step2Experience() === 'existing') {
      return false;
    }

    const hasStepTasks = this.showAccountStepFullInstructions() && this.step().tasks.length > 0;
    const hasAccountExtraTask = this.isAccountChoiceStep();
    return hasStepTasks || hasAccountExtraTask;
  });

  /** "Als erledigt markieren" blockiert bis Voucher validiert UND Auswahl getroffen */
  readonly isDoneDisabled = computed(() => {
    if (this.isVoucherStep()) {
      return !this.state.voucherValidated();
    }

    if (!this.isAccountChoiceStep()) {
      return !this.allSubtasksDone();
    }

    if (!this.state.voucherValidated()) return true;
    const exp = this.state.step2Experience();
    if (exp === null || exp === 'existing') return true; // Nicht fertig bis spezialisiert
    if (exp === 'existing-beginner' || exp === 'existing-experienced') return !this.step2CanComplete();
    if (exp === 'new') return !this.allSubtasksDone();
    return true;
  });

  isSubtaskDone(taskIndex: number): boolean {
    return this.state.isSubtaskDone(this.step().id, taskIndex);
  }

  readonly isStepSubtaskDone = (taskIndex: number): boolean =>
    this.state.isSubtaskDone(this.step().id, taskIndex);

  onSubtaskChange(taskIndex: number, checked: boolean): void {
    this.state.setSubtaskDone(this.step().id, taskIndex, checked);
  }

  onStepSubtaskChange(change: SubtaskChange): void {
    this.onSubtaskChange(change.index, change.checked);
  }

  selectExperience(choice: 'new' | 'existing'): void {
    this.state.setStep2Experience(choice);
  }

  selectRepoExperience(experience: 'beginner' | 'experienced'): void {
    this.state.setRepoExperience(experience);
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

  updateVoucherInput(value: string): void {
    this.voucherInput.set(value);
    this.voucherError.set(false);
  }

  submitVoucher(): void {
    const valid = this.state.validateVoucher(this.voucherInput());
    this.voucherError.set(!valid);
    if (valid) {
      this.state.markStepCompleted(this.step().id);
      this.showTemporaryVoucherSuccess();
    } else {
      this.state.unmarkStepCompleted(this.step().id);
    }
  }

  private showTemporaryVoucherSuccess(): void {
    if (this.voucherSuccessTimeout) {
      clearTimeout(this.voucherSuccessTimeout);
    }
    this.showVoucherSuccess.set(true);
    this.voucherSuccessTimeout = setTimeout(() => {
      this.showVoucherSuccess.set(false);
      this.voucherSuccessTimeout = null;
    }, 3500);
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
    if (!this.isCurrentStepDone() && this.isDoneDisabled()) return;
    this.state.toggleStepCompleted(this.step().id);
  }

  goToPreviousStep(): void {
    if (this.step().id > 1) {
      void this.router.navigate(this.buildStepLink(this.step().id - 1));
    }
  }

  /** Weiter: zeige Dialog wenn Schritt 2 nicht erledigt ist */
  goToNextStep(): void {
    const currentStep = this.step().id;
    if (currentStep >= ONBOARDING_STEP_COUNT) return;

    // Für Schritt 2: Dialog zeigen wenn nicht als erledigt markiert
    if (currentStep === 2 && !this.isCurrentStepDone()) {
      this.showStepSkipDialog();
      return;
    }

    void this.router.navigate(this.buildStepLink(currentStep + 1));
  }

  private showStepSkipDialog(): void {
    const dialogRef = this.dialog.open(StepSkipDialogComponent);
    dialogRef.afterClosed().subscribe((result: StepSkipDialogResult | undefined) => {
      if (result === 'mark-done') {
        this.markDone();
        const currentStep = this.step().id;
        void this.router.navigate(this.buildStepLink(currentStep + 1));
      } else if (result === 'skip') {
        const currentStep = this.step().id;
        void this.router.navigate(this.buildStepLink(currentStep + 1));
      }
    });
  }

  finishOnboarding(): void {
    this.state.markStepCompleted(this.step().id);
    void this.router.navigate(this.buildSummaryLink());
  }

  onLessonFinished(): void {
    const lessonBottom = this.lessonFlowSection?.nativeElement.getBoundingClientRect().bottom ?? 0;

    if (this.todoSection?.nativeElement) {
      this.todoSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // If no todo section exists on this step, scroll a bit further down in the same page.
    window.scrollBy({ top: Math.max(lessonBottom * 0.6, 220), behavior: 'smooth' });
  }

  scrollToFollowUpContent(): void {
    this.onLessonFinished();
  }
}
