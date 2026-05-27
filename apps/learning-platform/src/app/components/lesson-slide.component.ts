import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
  signal
} from '@angular/core';

import { StepManifestSlide } from '../models/learning-content.models';
import { MarkdownViewComponent } from './markdown-view.component';

@Component({
  selector: 'app-lesson-slide',
  imports: [CommonModule, MarkdownViewComponent],
  templateUrl: './lesson-slide.component.html',
  styleUrl: './lesson-slide.component.scss'
})
export class LessonSlideComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) slide!: StepManifestSlide;
  @Input() active = false;
  @Output() libraryLink = new EventEmitter<string>();
  @Output() scrolledToEnd = new EventEmitter<void>();

  @ViewChild('sentinel') private sentinelRef!: ElementRef<HTMLElement>;

  readonly hasReachedEnd = signal(false);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.setupObserver();
  }

  ngOnChanges(): void {
    // Slide-Input hat gewechselt: Read-Status zuruecksetzen und Observer neu ansetzen.
    this.hasReachedEnd.set(false);
    // sentinelRef ist vor ngAfterViewInit noch nicht aufgeloest.
    if (this.sentinelRef) {
      this.setupObserver();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupObserver(): void {
    this.observer?.disconnect();
    const sentinel = this.sentinelRef?.nativeElement;
    if (!sentinel) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.hasReachedEnd.set(true);
          this.scrolledToEnd.emit();
          // Einmalig beobachten reicht — danach Verbindung trennen.
          this.observer?.disconnect();
        }
      },
      // threshold: 0 = Observer faeuert sobald auch nur 1px des Sentinels sichtbar ist.
      { threshold: 0 }
    );
    this.observer.observe(sentinel);
  }
}
