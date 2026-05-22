import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { ModuleStep } from '../models/learning-content.models';
import { LearningContentError, LearningContentService } from '../services/learning-content.service';
import { LearningProgressService } from '../services/learning-progress.service';

@Component({
  selector: 'app-step-page',
  imports: [CommonModule],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.scss'
})
export class StepPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly content = inject(LearningContentService);
  private readonly progress = inject(LearningProgressService);

  readonly courseId = toSignal(this.route.paramMap.pipe(map((params) => params.get('courseId') ?? '')), { initialValue: '' });
  readonly moduleId = toSignal(this.route.paramMap.pipe(map((params) => params.get('moduleId') ?? '')), { initialValue: '' });
  readonly stepId = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get('stepId')))), { initialValue: 0 });

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  readonly courseTitle = signal('');
  readonly moduleTitle = signal('');
  readonly steps = signal<ModuleStep[]>([]);
  readonly currentStep = signal<ModuleStep | null>(null);

  readonly stepIndex = computed(() => this.steps().findIndex((step) => step.id === this.stepId()));
  readonly previousStep = computed(() => {
    const index = this.stepIndex();
    return index > 0 ? this.steps()[index - 1] : null;
  });
  readonly nextStep = computed(() => {
    const index = this.stepIndex();
    return index >= 0 && index < this.steps().length - 1 ? this.steps()[index + 1] : null;
  });

  readonly isCompleted = computed(() => {
    const current = this.currentStep();
    if (!current) {
      return false;
    }

    return this.progress.isStepCompleted(this.courseId(), this.moduleId(), current.id);
  });

  readonly completionSummary = computed(() => {
    const snapshot = this.progress.getProgressSnapshot(this.courseId(), this.moduleId(), this.steps().length);
    return `${snapshot.completedCount} von ${snapshot.totalCount} erledigt (${snapshot.percent}%)`;
  });

  constructor() {
    this.route.paramMap.subscribe(() => {
      this.loadStep();
    });
  }

  private loadStep(): void {
    const courseId = this.courseId();
    const moduleId = this.moduleId();
    const stepId = this.stepId();

    if (!courseId || !moduleId || !Number.isInteger(stepId) || stepId < 1) {
      this.error.set('Ungueltige URL fuer Kurs/Modul/Schritt.');
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.content.getModuleBundle(courseId, moduleId).subscribe({
      next: ({ course, module, manifest }) => {
        const sortedSteps = [...manifest.steps].sort((a, b) => a.id - b.id);
        const step = sortedSteps.find((item) => item.id === stepId) ?? null;

        if (!step) {
            void this.navigateToError('step-not-found');
          return;
        }

        this.courseTitle.set(course.shortTitle || course.id);
        this.moduleTitle.set(module.title);
        this.steps.set(sortedSteps);
        this.currentStep.set(step);
        this.loading.set(false);
      },
        error: (err: unknown) => {
          if (err instanceof LearningContentError) {
            void this.navigateToError(err.code);
            return;
          }

          this.error.set('Schrittdaten konnten nicht geladen werden. Bitte spaeter erneut versuchen.');
        this.loading.set(false);
      }
    });
  }

  toggleDone(): void {
    const step = this.currentStep();
    if (!step) {
      return;
    }

    this.progress.setStepCompleted(this.courseId(), this.moduleId(), step.id, !this.isCompleted());
    // Trigger computed refresh by writing same value into signal.
    this.currentStep.set({ ...step });
  }

  goToStep(stepId: number): void {
    void this.router.navigate(['/kurse', this.courseId(), 'module', this.moduleId(), 'step', String(stepId)]);
  }

  goToPreviousStep(): void {
    const previous = this.previousStep();
    if (!previous) {
      return;
    }

    this.goToStep(previous.id);
  }

  goToNextStep(): void {
    const next = this.nextStep();
    if (!next) {
      return;
    }

    this.goToStep(next.id);
  }

  goBackToModule(): void {
    void this.router.navigate(['/kurse', this.courseId(), 'module', this.moduleId()]);
  }

  private navigateToError(code: string): Promise<boolean> {
    this.loading.set(false);
    return this.router.navigate(['/fehler'], {
      queryParams: {
        code,
        courseId: this.courseId(),
        moduleId: this.moduleId()
      }
    });
  }
}
