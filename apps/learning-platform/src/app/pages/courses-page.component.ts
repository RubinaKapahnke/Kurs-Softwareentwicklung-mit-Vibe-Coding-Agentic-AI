import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, forkJoin, map, of } from 'rxjs';

import { CourseCatalogEntry } from '../models/learning-content.models';
import { LearningContentError, LearningContentService } from '../services/learning-content.service';
import { LearningProgressService } from '../services/learning-progress.service';

interface CourseProgressData {
  completedCount: number;
  totalCount: number;
  percent: number;
  nextOpenStepId: number | null;
}

@Component({
  selector: 'app-courses-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent {
  private readonly content = inject(LearningContentService);
  private readonly progress = inject(LearningProgressService);

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly catalog = signal<CourseCatalogEntry[]>([]);
  readonly progressByCourse = signal<Record<string, CourseProgressData>>({});
  readonly courseWarnings = signal<Record<string, string>>({});

  readonly liveCourses = computed(() => this.catalog().filter((course) => course.status === 'live'));
  readonly comingSoonCourses = computed(() => this.catalog().filter((course) => course.status === 'coming-soon'));

  constructor() {
    this.content.getCatalog().subscribe({
      next: (catalog) => {
        this.catalog.set(catalog);

        const liveCourses = catalog.filter((course) => course.status === 'live');
        if (liveCourses.length === 0) {
          this.loading.set(false);
          return;
        }

        forkJoin(
          liveCourses.map((course) =>
            this.content.getStepManifest(course.id, course.defaultModuleId).pipe(
              map((manifest) => ({
                courseId: course.id,
                stepIds: manifest.steps.map((step) => step.id),
                totalCount: manifest.steps.length,
                warning: null as string | null
              })),
              catchError((err: unknown) =>
                of({
                  courseId: course.id,
                  stepIds: [] as number[],
                  totalCount: 0,
                  warning: this.getCourseWarning(err)
                })
              )
            )
          )
        ).subscribe({
          next: (results) => {
            const snapshot: Record<string, CourseProgressData> = {};
            const warnings: Record<string, string> = {};

            results.forEach((result) => {
              const course = liveCourses.find((entry) => entry.id === result.courseId);
              if (!course) {
                return;
              }

              if (result.warning) {
                warnings[course.id] = result.warning;
                return;
              }

              const progressSnapshot = this.progress.getProgressSnapshot(course.id, course.defaultModuleId, result.totalCount);
              snapshot[course.id] = {
                ...progressSnapshot,
                nextOpenStepId: this.progress.getFirstOpenStepId(course.id, course.defaultModuleId, result.stepIds)
              };
            });

            this.progressByCourse.set(snapshot);
            this.courseWarnings.set(warnings);
            this.loading.set(false);
          },
          error: () => {
            this.error.set('Kurskatalog wurde geladen, aber Modul-Fortschritt konnte nicht gelesen werden.');
            this.loading.set(false);
          }
        });
      },
      error: () => {
        this.error.set('Kurskatalog konnte nicht geladen werden.');
        this.loading.set(false);
      }
    });
  }

  progressLabel(course: CourseCatalogEntry): string {
    const warning = this.courseWarnings()[course.id];
    if (warning) {
      return warning;
    }

    const data = this.progressByCourse()[course.id];
    if (!data) {
      return 'Noch kein Fortschritt gespeichert';
    }

    return `${data.completedCount}/${data.totalCount} Schritte (${data.percent}%)`;
  }

  nextOpenStepId(course: CourseCatalogEntry): number | null {
    return this.progressByCourse()[course.id]?.nextOpenStepId ?? null;
  }

  hasProgressWarning(course: CourseCatalogEntry): boolean {
    return Boolean(this.courseWarnings()[course.id]);
  }

  private getCourseWarning(error: unknown): string {
    if (error instanceof LearningContentError) {
      return error.userMessage;
    }

    return 'Fortschritt aktuell nicht verfuegbar.';
  }
}
