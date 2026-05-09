import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import {
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
export class LessonFlowComponent {
  @Input({ required: true }) lesson!: OnboardingLessonFlow;
  @Output() readonly finished = new EventEmitter<void>();

  readonly activeIndex = signal(0);
  readonly selectedOptionIds = signal<Set<string>>(new Set());
  readonly quizEvaluated = signal(false);
  readonly quizPassed = signal(false);

  readonly activeSlide = computed<OnboardingLessonSlide | null>(() => {
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
  }

  canContinue(): boolean {
    if (!this.isQuizSlide()) {
      return true;
    }

    return this.quizEvaluated() && this.quizPassed();
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
  }

  goPrev(): void {
    if (this.isFirstSlide()) {
      return;
    }

    this.activeIndex.update((value) => value - 1);
    this.resetQuizState();
  }

  goToSlide(index: number): void {
    const total = this.lesson?.slides?.length ?? 0;
    if (index < 0 || index >= total || index === this.activeIndex()) {
      return;
    }

    this.activeIndex.set(index);
    this.resetQuizState();
  }

  isOptionSelected(optionId: string): boolean {
    return this.selectedOptionIds().has(optionId);
  }

  showOptionCorrect(optionId: string): boolean {
    const slide = this.activeSlide();
    if (!slide || slide.type !== 'quiz' || !this.quizEvaluated()) {
      return false;
    }

    const option = slide.options.find((item) => item.id === optionId);
    return Boolean(option?.isCorrect);
  }

  showOptionIncorrect(optionId: string): boolean {
    const slide = this.activeSlide();
    if (!slide || slide.type !== 'quiz' || !this.quizEvaluated()) {
      return false;
    }

    const option = slide.options.find((item) => item.id === optionId);
    return Boolean(this.isOptionSelected(optionId) && option && !option.isCorrect);
  }

  linkifyText(text: string): string {
    if (!text) {
      return '';
    }

    const escaped = this.escapeHtml(text);
    const urlPattern = /\b((?:https?:\/\/)?(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[\w\-./?%&=+#~]*)?)/gi;

    return escaped.replace(urlPattern, (rawUrl: string) => {
      const href = /^(https?:\/\/)/i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${rawUrl}</a>`;
    });
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
}
