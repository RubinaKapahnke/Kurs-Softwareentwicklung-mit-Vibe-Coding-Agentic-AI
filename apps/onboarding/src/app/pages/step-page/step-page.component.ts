import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


import { ONBOARDING_STEP_COUNT, ONBOARDING_STEPS } from '../../data/onboarding-steps.data';
import { OnboardingLessonContentSection, OnboardingStep, StepManifest } from '../../models/onboarding.models';
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
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MarkdownViewComponent,
    LessonFlowComponent,
    ChoiceCardComponent,
    CalloutComponent,
    VoucherGateComponent,
    StepTasksComponent
  ],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.scss'
})
export class StepPageComponent {
  private readonly subheadingPrefix = '__subheading__';
  private readonly document = inject(DOCUMENT);
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  readonly state = inject(OnboardingStateService);
  readonly stepCount = ONBOARDING_STEP_COUNT;
  private readonly fallbackCourseId = 'vibe-coding-agentic-ai';
  private readonly routeParamMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });

  constructor() {
    this.http.get<StepManifest>('/content/step-manifest.json').subscribe({
      next: (manifest) => this.stepManifest.set(manifest),
      error: () => this.stepManifest.set({})
    });
  }

  private readonly resetScrollOnStepChange = effect(() => {
    this.step().id;
    this.lessonCompleted.set(false);
    queueMicrotask(() => this.scrollPageTop());
  });
  private readonly loadMarkdownTasksOnStepChange = effect(() => {
    const entry = this.manifestEntry();
    const currentStep = this.step();
    const tasksSection = entry?.sections.find(s => s.type === 'tasks');
    if (tasksSection) {
      this.loadTasksFromFile(tasksSection.file, currentStep);
    } else {
      this.markdownTasks.set(null);
    }
  });
  private markdownTaskRequestToken = 0;

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
  readonly stepManifest = signal<StepManifest | null>(null);
  readonly lessonCompleted = signal(false);
  readonly manifestEntry = computed(() => this.stepManifest()?.[this.step().id] ?? null);
  readonly markdownTasks = signal<string[] | null>(null);
  readonly markdownTaskNotes = signal<OnboardingLessonContentSection[] | null>(null);
  readonly effectiveTasks = computed(() => this.markdownTasks() ?? this.step().tasks);
  readonly effectiveTaskNotes = computed(() => this.markdownTaskNotes() ?? []);
  readonly effectiveLessonFlow = computed(() => {
    const manifestFlow = this.manifestEntry()?.lessonFlow ?? null;
    const manifestRequiresLessonCompletion = Boolean(this.manifestEntry()?.requiresLessonCompletion);
    const staticFlow = this.step().lessonFlow ?? null;

    if (!manifestFlow) {
      return staticFlow;
    }

    if (!staticFlow) {
      return {
        ...manifestFlow,
        disableFinishAction: manifestRequiresLessonCompletion ? false : manifestFlow.disableFinishAction,
      };
    }

    return {
      ...manifestFlow,
      continueLabel: manifestFlow.continueLabel ?? staticFlow.continueLabel,
      finishLabel: manifestFlow.finishLabel ?? staticFlow.finishLabel,
      disableFinishAction: manifestRequiresLessonCompletion
        ? false
        : (manifestFlow.disableFinishAction ?? staticFlow.disableFinishAction),
    };
  });

  readonly visibleLessonFlow = computed(() => {
    const lessonFlow = this.effectiveLessonFlow();
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

  readonly isNextDisabled = computed(
    () => this.isVoucherStep() && !this.state.voucherValidated()
  );
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
    this.state.areStepSubtasksDone(this.step().id, this.effectiveTasks().length)
  );
  readonly githubProfileShareTaskIndex = computed(() => this.effectiveTasks().length);
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
  readonly showStepResources = computed(() =>
    !this.isAccountChoiceStep() || this.showAccountStepContent()
  );
  readonly hasLessonFollowUpContent = computed(() => {
    if (!this.visibleLessonFlow()) {
      return false;
    }

    const isAccountStep = this.isAccountChoiceStep();
    const step2Experience = this.state.step2Experience();

    return this.showRepoExperienceQuestion() ||
      (isAccountStep && step2Experience === 'existing-beginner') ||
      (isAccountStep && step2Experience === 'existing-experienced') ||
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

    if (this.showRepoExperienceQuestion() || (this.isAccountChoiceStep() && (this.state.step2Experience() === 'existing-beginner' || this.state.step2Experience() === 'existing-experienced'))) {
      return 'Unter der Lektion folgt noch deine Auswahl fuer diesen Schritt.';
    }

    if (this.isCloneStep()) {
      return 'Unter der Lektion folgen noch die naechsten Kursschritte.';
    }

    return 'Unter der Lektion folgen noch weitere Hinweise.';
  });

  readonly effectiveTitle = computed(() => this.manifestEntry()?.title ?? this.step().title);
  readonly effectiveGoal = computed(() => this.manifestEntry()?.goal ?? this.step().goal);

  // Step 3: Unterschiedliche Inhalte für 'new' vs 'existing-beginner' vs 'existing-experienced'
  readonly step3Title = computed(() => {
    if (!this.isAccountChoiceStep()) return this.effectiveTitle();
    const exp = this.state.step2Experience();
    if (exp === 'new') return 'GitHub-Account anlegen';
    if (exp === 'existing' || exp === 'existing-beginner') return 'GitHub Repos und Git verstehen';
    if (exp === 'existing-experienced') return 'GitHub-Account verifizieren';
    return this.step().title;
  });

  readonly step3Goal = computed(() => {
    if (!this.isAccountChoiceStep()) return this.effectiveGoal() || '';
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
    return this.effectiveTasks();
  });
  readonly showTodoSection = computed(() => {
    if (this.isVoucherStep() || !this.showAccountStepContent()) {
      return false;
    }

    if (this.isAccountChoiceStep() && this.state.step2Experience() === 'existing') {
      return false;
    }

    const hasStepTasks = this.showAccountStepFullInstructions() && this.effectiveTasks().length > 0;
    const hasAccountExtraTask = this.isAccountChoiceStep();
    return hasStepTasks || hasAccountExtraTask;
  });

  /** "Als erledigt markieren" blockiert bis Voucher validiert UND Auswahl getroffen */
  readonly isDoneDisabled = computed(() => {
    if (this.isVoucherStep()) {
      return !this.state.voucherValidated();
    }

    if (!this.isAccountChoiceStep()) {
      return !this.allSubtasksDone() || (this.mustCompleteLesson() && !this.lessonCompleted());
    }

    if (!this.state.voucherValidated()) return true;
    
    const exp = this.state.step2Experience();
    if (exp === null || exp === 'existing') return true; // Nicht fertig bis spezialisiert
    if (exp === 'existing-beginner' || exp === 'existing-experienced') {
      return !this.step2CanComplete() || (this.mustCompleteLesson() && !this.lessonCompleted());
    }
    if (exp === 'new') return !this.allSubtasksDone() || (this.mustCompleteLesson() && !this.lessonCompleted());
    return true;
  });

  private mustCompleteLesson(): boolean {
    return Boolean(this.manifestEntry()?.requiresLessonCompletion) &&
      (!this.isAccountChoiceStep() || this.showAccountStepFullInstructions());
  }

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

  confirmVisibilityHint(): void {
    this.state.confirmGithubVisibility(true);
  }

  switchToNewPath(): void {
    this.state.resetStep2ToNewPath();
  }

  private scrollPageTop(): void {
    const shellMain = this.document.querySelector('.shell-main');
    if (shellMain instanceof HTMLElement) {
      shellMain.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    this.document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    this.document.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  skipToStart(): void {
    this.scrollPageTop();
    void this.router.navigate(['/']);
  }

  markDone(): void {
    if (!this.isCurrentStepDone() && this.isDoneDisabled()) return;
    this.state.toggleStepCompleted(this.step().id);
  }

  goToPreviousStep(): void {
    if (this.step().id > 1) {
      this.scrollPageTop();
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

    this.scrollPageTop();
    void this.router.navigate(this.buildStepLink(currentStep + 1));
  }

  private showStepSkipDialog(): void {
    const dialogRef = this.dialog.open(StepSkipDialogComponent, {
      width: '560px',
      maxWidth: '92vw'
    });
    dialogRef.afterClosed().subscribe((result: StepSkipDialogResult | undefined) => {
      if (result === 'mark-done') {
        this.markDone();
        this.scrollPageTop();
        const currentStep = this.step().id;
        void this.router.navigate(this.buildStepLink(currentStep + 1));
      } else if (result === 'skip') {
        this.scrollPageTop();
        const currentStep = this.step().id;
        void this.router.navigate(this.buildStepLink(currentStep + 1));
      }
    });
  }

  finishOnboarding(): void {
    this.scrollPageTop();
    this.state.markStepCompleted(this.step().id);
    void this.router.navigate(this.buildSummaryLink());
  }

  onLessonFinished(): void {
    this.lessonCompleted.set(true);

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

  private loadTasksFromFile(file: string, step: OnboardingStep): void {
    const requestToken = ++this.markdownTaskRequestToken;
    this.http.get(file, { responseType: 'text' }).subscribe({
      next: (markdown) => {
        if (requestToken !== this.markdownTaskRequestToken) return;
        const extracted = this.extractTaskContentFromMarkdown(markdown);
        this.markdownTasks.set(extracted.tasks.length > 0 ? extracted.tasks : step.tasks);
        this.markdownTaskNotes.set(extracted.notes);
      },
      error: () => {
        if (requestToken !== this.markdownTaskRequestToken) return;
        this.markdownTasks.set(step.tasks);
        this.markdownTaskNotes.set([]);
      }
    });
  }

  private sanitizeInlineMarkdown(text: string): string {
    return text.trim();
  }

  private headingToTone(headingText: string): OnboardingLessonContentSection['tone'] {
    const normalized = headingText.trim().toLowerCase();
    if (normalized.startsWith('erfolg:') || normalized.startsWith('ok:') || normalized.startsWith('gruen:')) {
      return 'success';
    }
    if (normalized.startsWith('info:') || normalized.startsWith('tipp:')) {
      return 'tip';
    }
    if (normalized.startsWith('blau:')) {
      return 'info';
    }
    if (normalized.startsWith('achtung:')) {
      return 'danger';
    }
    if (normalized.startsWith('wichtig:') || normalized.startsWith('hinweis:')) {
      return 'highlight';
    }
    return undefined;
  }

  private stripTonePrefixFromHeading(headingText: string): string {
    return headingText.replace(/^(Wichtig|Hinweis|Achtung|Erfolg|OK|Gruen|Info|Tipp|Blau)\s*:\s*/i, '').trim();
  }

  private parseHeading(line: string): { level: number; text: string } | null {
    const match = line.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (!match) {
      return null;
    }
    return { level: match[1].length, text: match[2].trim() };
  }

  private parseTaskNoteSections(lines: string[]): OnboardingLessonContentSection[] {
    const sections: OnboardingLessonContentSection[] = [];
    let current: { heading?: string; tone?: OnboardingLessonContentSection['tone']; paragraphs: string[]; orderedItems: string[] } = {
      heading: undefined,
      tone: undefined,
      paragraphs: [],
      orderedItems: [],
    };

    const pushCurrent = () => {
      if (!current.heading && current.paragraphs.length === 0 && current.orderedItems.length === 0) {
        return;
      }
      const next: OnboardingLessonContentSection = {};
      if (current.heading) next.heading = current.heading;
      if (current.tone) next.tone = current.tone;
      if (current.paragraphs.length > 0) next.paragraphs = current.paragraphs;
      if (current.orderedItems.length > 0) next.orderedItems = current.orderedItems;
      sections.push(next);
    };

    for (const rawLine of lines) {
      const heading = this.parseHeading(rawLine);
      if (heading) {
        if (heading.level === 3) {
          pushCurrent();
          const headingText = this.sanitizeInlineMarkdown(heading.text);
          current = {
            heading: this.stripTonePrefixFromHeading(headingText) || headingText,
            tone: this.headingToTone(headingText),
            paragraphs: [],
            orderedItems: [],
          };
        } else if (heading.level === 4) {
          current.paragraphs.push(`${this.subheadingPrefix}${this.sanitizeInlineMarkdown(heading.text)}`);
        }
        continue;
      }

      const line = rawLine.trim();
      if (!line) {
        continue;
      }

      const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
      if (orderedMatch) {
        current.orderedItems.push(this.sanitizeInlineMarkdown(orderedMatch[1]));
        continue;
      }

      const bulletMatch = line.match(/^[-*]\s+(.+)$/);
      if (bulletMatch) {
        current.paragraphs.push(`- ${this.sanitizeInlineMarkdown(bulletMatch[1])}`);
        continue;
      }

      current.paragraphs.push(this.sanitizeInlineMarkdown(line));
    }

    pushCurrent();
    return sections;
  }

  private extractTaskContentFromMarkdown(markdown: string): { tasks: string[]; notes: OnboardingLessonContentSection[] } {
    const lines = markdown.split(/\r?\n/);
    const taskSectionLines = this.findTaskSectionLines(lines);
    const normalizedLines = taskSectionLines.length > 0 ? taskSectionLines : lines;

    const checkboxTasks = normalizedLines
      .map((line) => line.match(/^\s*[-*]\s+\[(?: |x|X)\]\s+(.+)$/)?.[1]?.trim() ?? null)
      .filter((value): value is string => Boolean(value));

    if (checkboxTasks.length > 0) {
      const noteLines = normalizedLines.filter((line) => !/^\s*[-*]\s+\[(?: |x|X)\]\s+(.+)$/i.test(line));
      return {
        tasks: checkboxTasks,
        notes: this.parseTaskNoteSections(noteLines),
      };
    }

    const listTasks = normalizedLines
      .map((line) => {
        const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
        if (ordered?.[1]) {
          return ordered[1].trim();
        }

        const bullet = line.match(/^\s*[-*]\s+(.+)$/);
        if (bullet?.[1] && !bullet[1].trim().startsWith('[')) {
          return bullet[1].trim();
        }

        return null;
      })
      .filter((value): value is string => Boolean(value));

    const noteLines = normalizedLines.filter((line) => !/^\s*\d+\.\s+(.+)$/i.test(line) && !/^\s*[-*]\s+(.+)$/i.test(line));
    return {
      tasks: listTasks,
      notes: this.parseTaskNoteSections(noteLines),
    };
  }

  private findTaskSectionLines(lines: string[]): string[] {
    const startIndex = lines.findIndex((line) => /^\s*#{2,6}\s+Aufgaben\b/i.test(line));
    if (startIndex === -1) {
      return [];
    }

    const sectionLines: string[] = [];
    for (let index = startIndex + 1; index < lines.length; index++) {
      const line = lines[index];
      if (/^\s*#{2,6}\s+/.test(line)) {
        break;
      }
      sectionLines.push(line);
    }

    return sectionLines;
  }
}
