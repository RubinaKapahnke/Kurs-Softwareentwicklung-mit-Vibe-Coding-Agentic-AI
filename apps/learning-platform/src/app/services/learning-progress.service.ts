import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LearningProgressService {
  private readonly platformId = inject(PLATFORM_ID);

  private storageKey(courseId: string, moduleId: string): string {
    return `learning:${courseId}:${moduleId}:v1`;
  }

  getCompletedStepIds(courseId: string, moduleId: string): number[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    const raw = localStorage.getItem(this.storageKey(courseId, moduleId));
    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw) as number[];
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed.filter((value) => Number.isInteger(value) && value > 0).sort((a, b) => a - b);
    } catch {
      return [];
    }
  }

  isStepCompleted(courseId: string, moduleId: string, stepId: number): boolean {
    return this.getCompletedStepIds(courseId, moduleId).includes(stepId);
  }

  setStepCompleted(courseId: string, moduleId: string, stepId: number, completed: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const current = new Set(this.getCompletedStepIds(courseId, moduleId));

    if (completed) {
      current.add(stepId);
    } else {
      current.delete(stepId);
    }

    localStorage.setItem(this.storageKey(courseId, moduleId), JSON.stringify([...current].sort((a, b) => a - b)));
  }

  getProgressSnapshot(courseId: string, moduleId: string, totalSteps: number): {
    completedCount: number;
    totalCount: number;
    percent: number;
  } {
    const completedCount = Math.min(this.getCompletedStepIds(courseId, moduleId).length, Math.max(totalSteps, 0));
    const totalCount = Math.max(totalSteps, 0);
    const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return {
      completedCount,
      totalCount,
      percent
    };
  }

  getFirstOpenStepId(courseId: string, moduleId: string, stepIds: number[]): number | null {
    const completed = new Set(this.getCompletedStepIds(courseId, moduleId));
    const sorted = [...stepIds].filter((value) => Number.isInteger(value) && value > 0).sort((a, b) => a - b);
    if (sorted.length === 0) {
      return null;
    }

    return sorted.find((stepId) => !completed.has(stepId)) ?? sorted[0];
  }
}
