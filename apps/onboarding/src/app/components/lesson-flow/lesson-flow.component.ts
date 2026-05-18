import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, computed, effect, signal, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import MarkdownIt from 'markdown-it';

import {
  OnboardingLessonContentSection,
  OnboardingLessonFlow,
  OnboardingLessonQuizSlide,
  OnboardingLessonSlide
} from '../../models/onboarding.models';
import { OnboardingStateService } from '../../services/onboarding-state.service';

const lessonMarkdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  breaks: true,
});

@Component({
  selector: 'app-lesson-flow',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatRadioModule],
  templateUrl: './lesson-flow.component.html',
  styleUrl: './lesson-flow.component.scss'
})
export class LessonFlowComponent implements OnChanges {
  private readonly subheadingPrefix = '__subheading__';
  private readonly stateService = inject(OnboardingStateService);
  @Input({ required: true }) lesson!: OnboardingLessonFlow;
  @Input() lessonKey: string = ''; // z.B. 'step-1' oder 'step-2'
  @Output() readonly finished = new EventEmitter<void>();
  @ViewChild('contentContainer') private contentContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('quizContainer') private quizContainer?: ElementRef<HTMLDivElement>;

  readonly activeIndex = signal(0);
  // Force recomputation when a different step provides a new lesson input.
  readonly lessonVersion = signal(0);
  readonly selectedOptionIds = signal<Set<string>>(new Set());
  readonly quizEvaluated = signal(false);
  readonly quizPassed = signal(false);
  readonly autoFinished = signal(false);
  private currentLessonKey: string = ''; // Track current lesson to avoid re-loading

  readonly activeSlide = computed<OnboardingLessonSlide | null>(() => {
    this.lessonVersion();

    if (!this.lesson?.slides?.length) {
      return null;
    }

    const index = this.activeIndex();
    return this.lesson.slides[index] ?? this.lesson.slides[0] ?? null;
  });

  readonly isQuizSlide = computed(() => this.activeSlide()?.type === 'quiz');
  readonly isLastSlide = computed(() => {
    const total = this.lesson?.slides?.length ?? 0;
    return total > 0 && this.activeIndex() >= total - 1;
  });
  readonly isFirstSlide = computed(() => this.activeIndex() === 0);

  constructor() {
    // Auto-save quiz state whenever it changes
    effect(() => {
      const lessonKey = this.lessonKey;
      const slideIndex = this.activeIndex();
      if (!lessonKey) return; // Don't save if no key
      
      // Dependency tracking: quiz signals
      const _selected = this.selectedOptionIds();
      const _evaluated = this.quizEvaluated();
      const _passed = this.quizPassed();

      const slideKey = this.getSlideKey(lessonKey, slideIndex);
      console.log(`[Quiz Effect] slideKey=${slideKey}, selected=${_selected.size}, evaluated=${_evaluated}, passed=${_passed}`);

      // Save whenever state changes and quiz is evaluated
      if (_evaluated && _selected.size > 0) {
        console.log(`[Quiz Save] Saving quiz state for ${slideKey}`);
        this.stateService.saveQuizState(slideKey, {
          selectedOptionIds: [..._selected],
          evaluated: _evaluated,
          passed: _passed
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const lessonKeyChanged = changes['lessonKey'];
    const lessonChanged = changes['lesson'];

    // Only load/reset quiz when lessonKey changes, NOT when lesson content changes
    if (lessonKeyChanged) {
      const newKey = this.lessonKey;
      console.log(`[LessonFlow] lessonKey changed from ${this.currentLessonKey} to ${newKey}`);
      
      // Only load if key actually changed
      if (newKey !== this.currentLessonKey) {
        this.currentLessonKey = newKey;
        
        if (newKey) {
          // Load state for current slide
          this.loadQuizStateForCurrentSlide();
        } else {
          this.resetQuizState();
        }
      }
    }

    // Update lesson structure when lesson changes, but DON'T reset quiz
    if (lessonChanged) {
      console.log(`[LessonFlow] lesson changed`);
      this.lessonVersion.update((value) => value + 1);
      this.activeIndex.set(0);
      this.autoFinished.set(false);
      this.resetSlideScroll();
      // Important: Do NOT reset quiz state here!
    }
  }

  onOptionToggle(optionId: string, checked: boolean): void {
    const next = new Set(this.selectedOptionIds());

    if (checked) {
      next.add(optionId);
    } else {
      next.delete(optionId);
    }

    this.selectedOptionIds.set(next);
    this.quizEvaluated.set(false);
    this.quizPassed.set(false);
  }

  onRadioChange(optionId: string): void {
    this.selectedOptionIds.set(new Set([optionId]));
    this.quizEvaluated.set(false);
    this.quizPassed.set(false);
  }

  checkQuizAnswers(): void {
    const slide = this.activeSlide();
    if (!slide || slide.type !== 'quiz') {
      return;
    }

    const passed = this.isSelectionCorrect(slide);
    this.quizEvaluated.set(true);
    this.quizPassed.set(passed);
    this.emitAutoFinishedIfNeeded();
  }

  restartQuiz(): void {
    this.resetQuizState();
    // Lösche Quiz-State aus dem Service
    const slideKey = this.getSlideKey(this.lessonKey, this.activeIndex());
    if (slideKey) {
      this.stateService.clearQuizState(slideKey);
    }
  }

  canContinue(): boolean {
    if (!this.isQuizSlide()) {
      return true;
    }

    return this.quizEvaluated();
  }

  continue(): void {
    if (!this.canContinue()) {
      return;
    }

    if (this.isLastSlide()) {
      this.finished.emit();
      return;
    }

    this.activeIndex.update((value) => value + 1);
    this.loadQuizStateForCurrentSlide();
    this.resetSlideScroll();
    this.emitAutoFinishedIfNeeded();
  }

  goPrev(): void {
    if (this.isFirstSlide()) {
      return;
    }

    this.activeIndex.update((value) => value - 1);
    this.loadQuizStateForCurrentSlide();
    this.resetSlideScroll();
  }

  goToSlide(index: number): void {
    const total = this.lesson?.slides?.length ?? 0;
    if (index < 0 || index >= total || index === this.activeIndex()) {
      return;
    }

    this.activeIndex.set(index);
    this.loadQuizStateForCurrentSlide();
    this.resetSlideScroll();
    this.emitAutoFinishedIfNeeded();
  }

  shouldShowContinueButton(): boolean {
    return !this.isLastSlide();
  }

  isOptionSelected(optionId: string): boolean {
    return this.selectedOptionIds().has(optionId);
  }

  isCorrectSelected(optionId: string): boolean {
    const option = this.getQuizOption(optionId);
    return this.quizEvaluated() && Boolean(option?.isCorrect) && this.isOptionSelected(optionId);
  }

  isIncorrectSelected(optionId: string): boolean {
    const option = this.getQuizOption(optionId);
    return this.quizEvaluated() && Boolean(option && !option.isCorrect && this.isOptionSelected(optionId));
  }

  isCorrectUnselected(optionId: string): boolean {
    const option = this.getQuizOption(optionId);
    return this.quizEvaluated() && Boolean(option?.isCorrect) && !this.isOptionSelected(optionId);
  }

  isIncorrectUnselected(optionId: string): boolean {
    const option = this.getQuizOption(optionId);
    return this.quizEvaluated() && Boolean(option && !option.isCorrect && !this.isOptionSelected(optionId));
  }

  evaluatedOptionIcon(optionId: string): string {
    if (this.isCorrectSelected(optionId)) {
      return 'check_circle';
    }

    if (this.isIncorrectSelected(optionId)) {
      return 'cancel';
    }

    if (this.isIncorrectUnselected(optionId)) {
      return 'check_circle_outline';
    }

    if (this.isCorrectUnselected(optionId)) {
      return 'highlight_off';
    }

    return 'radio_button_unchecked';
  }

  evaluatedOptionFeedback(optionId: string): string {
    if (this.isCorrectSelected(optionId)) {
      return 'Richtig gewählt';
    }

    if (this.isIncorrectSelected(optionId)) {
      return 'Falsch gewählt';
    }

    if (this.isCorrectUnselected(optionId)) {
      return 'Falsch ausgelassen';
    }

    if (this.isIncorrectUnselected(optionId)) {
      return 'Richtig ausgelassen';
    }

    return '';
  }

  linkifyText(text: string): string {
    if (!text) {
      return '';
    }

    return lessonMarkdown.renderInline(text);
  }

  renderBlockText(text: string): string {
    if (!text) {
      return '';
    }

    return lessonMarkdown.render(text).trim();
  }

  isSubheadingParagraph(text: string): boolean {
    return text.startsWith(this.subheadingPrefix);
  }

  extractSubheadingText(text: string): string {
    return text.slice(this.subheadingPrefix.length).trim();
  }

  isToneCallout(section: OnboardingLessonContentSection): boolean {
    return Boolean(section.tone && section.tone !== 'default');
  }

  toneIcon(section: OnboardingLessonContentSection): string {
    switch (section.tone) {
      case 'danger':
        return 'priority_high';
      case 'success':
        return 'task_alt';
      case 'tip':
        return 'lightbulb';
      case 'info':
        return 'info';
      case 'highlight':
      default:
        return 'priority_high';
    }
  }

  private isSelectionCorrect(slide: OnboardingLessonQuizSlide): boolean {
    const selected = this.selectedOptionIds();
    const correctIds = new Set(slide.options.filter((item) => item.isCorrect).map((item) => item.id));

    if (selected.size !== correctIds.size) {
      return false;
    }

    for (const id of correctIds) {
      if (!selected.has(id)) {
        return false;
      }
    }

    return true;
  }

  private getQuizOption(optionId: string) {
    const slide = this.activeSlide();
    if (!slide || slide.type !== 'quiz') {
      return undefined;
    }

    return slide.options.find((item) => item.id === optionId);
  }

  private getSlideKey(lessonKey: string, slideIndex: number): string {
    return `${lessonKey}-slide-${slideIndex}`;
  }

  private loadQuizStateForCurrentSlide(): void {
    const slideKey = this.getSlideKey(this.lessonKey, this.activeIndex());
    console.log(`[LessonFlow] Loading quiz state for slide: ${slideKey}`);
    
    const savedState = this.stateService.getQuizState(slideKey);
    console.log(`[LessonFlow] Loaded state for ${slideKey}:`, savedState);
    
    if (savedState) {
      console.log(`[LessonFlow] Restoring quiz state...`);
      this.selectedOptionIds.set(new Set(savedState.selectedOptionIds));
      this.quizEvaluated.set(savedState.evaluated);
      this.quizPassed.set(savedState.passed);
    } else {
      this.resetQuizState();
    }
  }

  private resetQuizState(): void {
    this.selectedOptionIds.set(new Set());
    this.quizEvaluated.set(false);
    this.quizPassed.set(false);
  }

  private resetSlideScroll(): void {
    requestAnimationFrame(() => {
      this.contentContainer?.nativeElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      this.quizContainer?.nativeElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }

  private emitAutoFinishedIfNeeded(): void {
    if (this.autoFinished() || !this.isLastSlide() || this.shouldShowContinueButton() || !this.canContinue()) {
      return;
    }

    this.autoFinished.set(true);
    this.finished.emit();
  }
}
