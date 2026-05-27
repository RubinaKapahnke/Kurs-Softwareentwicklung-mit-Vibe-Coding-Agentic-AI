import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, computed, signal } from '@angular/core';

import { StepManifestSlide } from '../models/learning-content.models';
import { LessonSlideComponent } from './lesson-slide.component';
import { TaskPanelComponent } from './task-panel.component';

@Component({
  selector: 'app-lesson-flow',
  imports: [CommonModule, LessonSlideComponent, TaskPanelComponent],
  templateUrl: './lesson-flow.component.html',
  styleUrl: './lesson-flow.component.scss'
})
export class LessonFlowComponent implements OnChanges {
  @Input({ required: true }) slides: StepManifestSlide[] = [];
  @Output() libraryLink = new EventEmitter<string>();

  readonly activeSlideIndex = signal(0);
  readonly activeSlide = computed(() => this.slides[this.activeSlideIndex()] ?? null);
  readonly progressLabel = computed(() => {
    const total = this.slides.length;
    return total > 0 ? `${this.activeSlideIndex() + 1} von ${total}` : '0 von 0';
  });

  readonly isLastSlide = computed(() => this.activeSlideIndex() === this.slides.length - 1);

  // currentSlideRead: ob der Nutzer die aktive Slide bis zum Ende gescrollt hat.
  readonly currentSlideRead = signal(false);

  // Gedaechtnis: welche Slide-Indizes wurden bereits gelesen (pro Slides-Input-Instanz).
  private readonly readSlideIndices = signal<Set<number>>(new Set());

  ngOnChanges(): void {
    // Slides-Input hat gewechselt (neuer Step) — Zustand vollstaendig zuruecksetzen.
    this.activeSlideIndex.set(0);
    this.readSlideIndices.set(new Set());
    this.currentSlideRead.set(false);
  }

  selectSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }

    this.activeSlideIndex.set(index);
    // Beim Wechsel: Read-Status aus dem Gedaechtnis laden.
    this.currentSlideRead.set(this.readSlideIndices().has(index));
  }

  // Wird vom LessonSlide emittiert, wenn der Nutzer bis zum Slide-Ende gescrollt hat.
  onSlideScrolledToEnd(): void {
    const index = this.activeSlideIndex();
    // Slide-Index im Gedaechtnis vermerken (unveraenderliche Kopie des Sets).
    this.readSlideIndices.update(set => new Set([...set, index]));
    this.currentSlideRead.set(true);
  }

  goToPreviousSlide(): void {
    this.selectSlide(this.activeSlideIndex() - 1);
  }

  goToNextSlide(): void {
    this.selectSlide(this.activeSlideIndex() + 1);
  }
}
