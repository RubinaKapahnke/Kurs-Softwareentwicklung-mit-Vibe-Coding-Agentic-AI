import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import {
  OnboardingLessonContentSection,
  OnboardingLessonFlow,
  OnboardingLessonQuizSlide,
  OnboardingLessonSlide
} from '../../models/onboarding.models';

@Component({
  selector: 'app-lesson-flow',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatRadioModule],
  templateUrl: './lesson-flow.component.html',
  styleUrl: './lesson-flow.component.scss'
})
export class LessonFlowComponent implements OnChanges {
  private readonly subheadingPrefix = '__subheading__';
  @Input({ required: true }) lesson!: OnboardingLessonFlow;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['lesson']) {
      return;
    }

    this.lessonVersion.update((value) => value + 1);
    this.activeIndex.set(0);
    this.resetQuizState();
    this.autoFinished.set(false);
    this.resetSlideScroll();
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
    this.resetQuizState();
    this.resetSlideScroll();
    this.emitAutoFinishedIfNeeded();
  }

  goPrev(): void {
    if (this.isFirstSlide()) {
      return;
    }

    this.activeIndex.update((value) => value - 1);
    this.resetQuizState();
    this.resetSlideScroll();
  }

  goToSlide(index: number): void {
    const total = this.lesson?.slides?.length ?? 0;
    if (index < 0 || index >= total || index === this.activeIndex()) {
      return;
    }

    this.activeIndex.set(index);
    this.resetQuizState();
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

    let escaped = this.escapeHtml(text);
    const escapedAsteriskToken = '%%ESCAPED_ASTERISK%%';
    escaped = escaped.replace(/\\\*/g, escapedAsteriskToken);

    const linkPlaceholders: string[] = [];
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/gi, (_, label: string, url: string) => {
      const href = /^(https?:\/\/)/i.test(url) ? url : `https://${url}`;
      const token = `%%LINK_${linkPlaceholders.length}%%`;
      linkPlaceholders.push(`<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`);
      return token;
    });

    escaped = escaped
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    const urlPattern = /\b((?:https?:\/\/)?(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[\w\-./?%&=+#~]*)?)/gi;

    escaped = escaped.replace(urlPattern, (rawUrl: string) => {
      const href = /^(https?:\/\/)/i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${rawUrl}</a>`;
    });

    for (let i = 0; i < linkPlaceholders.length; i++) {
      escaped = escaped.replace(`%%LINK_${i}%%`, linkPlaceholders[i]);
    }

    escaped = escaped.replace(new RegExp(escapedAsteriskToken, 'g'), '*');

    return escaped;
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

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
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
