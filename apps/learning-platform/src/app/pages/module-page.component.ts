import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { LearningContentService } from '../services/learning-content.service';
import { ModuleStep } from '../models/learning-content.models';
import { LearningProgressService } from '../services/learning-progress.service';
import { LearningContentError } from '../services/learning-content.service';

@Component({
  selector: 'app-module-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './module-page.component.html',
  styleUrl: './module-page.component.scss'
})
export class ModulePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly content = inject(LearningContentService);
  private readonly progress = inject(LearningProgressService);

  readonly courseId = toSignal(this.route.paramMap.pipe(map((params) => params.get('courseId') ?? '')), { initialValue: '' });
  readonly moduleId = toSignal(this.route.paramMap.pipe(map((params) => params.get('moduleId') ?? '')), { initialValue: '' });

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  readonly courseTitle = signal('');
  readonly moduleTitle = signal('');
  readonly completionRule = signal('');
  readonly moduleType = signal('');
  readonly steps = signal<ModuleStep[]>([]);

  readonly sortedSteps = computed(() => [...this.steps()].sort((a, b) => a.id - b.id));
  readonly resumeStepId = computed(() =>
    this.progress.getFirstOpenStepId(
      this.courseId(),
      this.moduleId(),
      this.sortedSteps().map((step) => step.id)
    )
  );
  readonly progressLabel = computed(() => {
    const snapshot = this.progress.getProgressSnapshot(this.courseId(), this.moduleId(), this.steps().length);
    return `${snapshot.completedCount}/${snapshot.totalCount} Schritte (${snapshot.percent}%)`;
  });

  constructor() {
    this.route.paramMap.subscribe(() => {
      const courseId = this.courseId();
      const moduleId = this.moduleId();

      if (!courseId || !moduleId) {
        this.error.set('Kurs oder Modul in der URL fehlt.');
        this.loading.set(false);
        return;
      }

      this.loading.set(true);
      this.error.set(null);

      this.content.getModuleBundle(courseId, moduleId).subscribe({
        next: ({ course, module, manifest }) => {
          this.courseTitle.set(course.shortTitle || course.id);
          this.moduleTitle.set(module.title);
          this.moduleType.set(module.type);
          this.completionRule.set(module.completionRule);
          this.steps.set(manifest.steps);
          this.loading.set(false);
        },
        error: (err: unknown) => {
          if (err instanceof LearningContentError) {
            void this.navigateToError(err.code);
            return;
          }

          this.error.set('Moduldaten konnten nicht geladen werden. Bitte spaeter erneut versuchen.');
          this.loading.set(false);
        }
      });
    });
  }

  isCompleted(stepId: number): boolean {
    return this.progress.isStepCompleted(this.courseId(), this.moduleId(), stepId);
  }

  goToResumeStep(): void {
    const targetStepId = this.resumeStepId();
    if (!targetStepId) {
      return;
    }

    void this.router.navigate(['/kurse', this.courseId(), 'module', this.moduleId(), 'step', targetStepId]);
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
