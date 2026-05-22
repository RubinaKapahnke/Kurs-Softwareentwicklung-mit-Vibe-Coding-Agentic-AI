import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, combineLatest, map, throwError } from 'rxjs';

import { CourseCatalogEntry, CourseMeta, ModuleMeta, StepManifest } from '../models/learning-content.models';

export type LearningContentErrorCode =
  | 'catalog-invalid'
  | 'catalog-load-failed'
  | 'course-not-found'
  | 'course-load-failed'
  | 'module-not-found'
  | 'module-load-failed'
  | 'manifest-not-found'
  | 'manifest-empty'
  | 'manifest-invalid'
  | 'manifest-load-failed';

export class LearningContentError extends Error {
  constructor(
    readonly code: LearningContentErrorCode,
    readonly userMessage: string,
    override readonly cause?: unknown
  ) {
    super(userMessage);
    this.name = 'LearningContentError';
  }
}

@Injectable({
  providedIn: 'root'
})
export class LearningContentService {
  private readonly http = inject(HttpClient);

  getCatalog(): Observable<CourseCatalogEntry[]> {
    return this.http.get<unknown>('/content/catalog/courses.catalog.json').pipe(
      map((catalog) => this.validateCatalog(catalog)),
      catchError((error: unknown) => throwError(() => this.toContentError(error, 'catalog')))
    );
  }

  getCourseMeta(courseId: string): Observable<CourseMeta> {
    return this.http.get<CourseMeta>(`/content/modules/${courseId}/course.meta.json`).pipe(
      catchError((error: unknown) => throwError(() => this.toContentError(error, 'course', courseId)))
    );
  }

  getModuleMeta(courseId: string, moduleId: string): Observable<ModuleMeta> {
    return this.http.get<ModuleMeta>(`/content/modules/${courseId}/${moduleId}/module.meta.json`).pipe(
      catchError((error: unknown) => throwError(() => this.toContentError(error, 'module', courseId, moduleId)))
    );
  }

  getStepManifest(courseId: string, moduleId: string): Observable<StepManifest> {
    return this.http.get<unknown>(`/content/modules/${courseId}/${moduleId}/step-manifest.json`).pipe(
      map((manifest) => this.validateManifest(manifest, moduleId)),
      catchError((error: unknown) => throwError(() => this.toContentError(error, 'manifest', courseId, moduleId)))
    );
  }

  getModuleBundle(courseId: string, moduleId: string): Observable<{ course: CourseMeta; module: ModuleMeta; manifest: StepManifest }> {
    return combineLatest([
      this.getCourseMeta(courseId),
      this.getModuleMeta(courseId, moduleId),
      this.getStepManifest(courseId, moduleId)
    ]).pipe(
      map(([course, module, manifest]) => ({ course, module, manifest }))
    );
  }

  private validateCatalog(rawCatalog: unknown): CourseCatalogEntry[] {
    if (!Array.isArray(rawCatalog)) {
      throw new LearningContentError('catalog-invalid', 'Der Kurskatalog ist fehlerhaft aufgebaut.');
    }

    const catalog = rawCatalog.filter((entry): entry is CourseCatalogEntry => {
      if (!entry || typeof entry !== 'object') {
        return false;
      }

      const candidate = entry as Partial<CourseCatalogEntry>;
      return (
        typeof candidate.id === 'string' &&
        typeof candidate.title === 'string' &&
        typeof candidate.status === 'string' &&
        typeof candidate.defaultModuleId === 'string' &&
        Array.isArray(candidate.moduleIds)
      );
    });

    if (catalog.length === 0) {
      throw new LearningContentError('catalog-invalid', 'Der Kurskatalog enthaelt keine gueltigen Kurseintraege.');
    }

    return catalog;
  }

  private validateManifest(rawManifest: unknown, moduleId: string): StepManifest {
    if (!rawManifest || typeof rawManifest !== 'object') {
      throw new LearningContentError('manifest-invalid', 'Das Schritt-Manifest ist kaputt und kann nicht gelesen werden.');
    }

    const manifest = rawManifest as Partial<StepManifest>;
    if (!Array.isArray(manifest.steps)) {
      throw new LearningContentError('manifest-invalid', 'Das Schritt-Manifest enthaelt keine gueltige Schrittliste.');
    }

    if (manifest.steps.length === 0) {
      throw new LearningContentError('manifest-empty', 'Dieses Modul hat aktuell keine konfigurierten Schritte.');
    }

    const validSteps = manifest.steps.filter((step) => {
      if (!step || typeof step !== 'object') {
        return false;
      }

      const candidate = step as Partial<StepManifest['steps'][number]>;
      return (
        Number.isInteger(candidate.id) &&
        (candidate.id ?? 0) > 0 &&
        typeof candidate.slug === 'string' &&
        typeof candidate.title === 'string' &&
        Array.isArray(candidate.sections)
      );
    });

    if (validSteps.length !== manifest.steps.length) {
      throw new LearningContentError('manifest-invalid', 'Mindestens ein Schritt im Manifest ist unvollstaendig.');
    }

    if (typeof manifest.moduleId !== 'string' || manifest.moduleId.length === 0) {
      throw new LearningContentError('manifest-invalid', 'Die Modulkennung im Schritt-Manifest fehlt.');
    }

    return {
      moduleId: manifest.moduleId || moduleId,
      version: typeof manifest.version === 'number' ? manifest.version : 1,
      deprecatedStepIds: Array.isArray(manifest.deprecatedStepIds) ? manifest.deprecatedStepIds : undefined,
      steps: validSteps
    };
  }

  private toContentError(error: unknown, context: 'catalog' | 'course' | 'module' | 'manifest', courseId?: string, moduleId?: string): LearningContentError {
    if (error instanceof LearningContentError) {
      return error;
    }

    if (error instanceof HttpErrorResponse) {
      if (context === 'course') {
        return error.status === 404
          ? new LearningContentError('course-not-found', `Kurs ${courseId ?? ''} wurde nicht gefunden.`, error)
          : new LearningContentError('course-load-failed', 'Kursdaten konnten nicht geladen werden.', error);
      }

      if (context === 'module') {
        return error.status === 404
          ? new LearningContentError('module-not-found', `Modul ${moduleId ?? ''} wurde nicht gefunden.`, error)
          : new LearningContentError('module-load-failed', 'Moduldaten konnten nicht geladen werden.', error);
      }

      if (context === 'manifest') {
        return error.status === 404
          ? new LearningContentError('manifest-not-found', 'Das Schritt-Manifest wurde nicht gefunden.', error)
          : new LearningContentError('manifest-load-failed', 'Das Schritt-Manifest konnte nicht geladen werden.', error);
      }

      return new LearningContentError('catalog-load-failed', 'Der Kurskatalog konnte nicht geladen werden.', error);
    }

    if (context === 'course') {
      return new LearningContentError('course-load-failed', 'Kursdaten konnten nicht geladen werden.', error);
    }

    if (context === 'module') {
      return new LearningContentError('module-load-failed', 'Moduldaten konnten nicht geladen werden.', error);
    }

    if (context === 'manifest') {
      return new LearningContentError('manifest-load-failed', 'Das Schritt-Manifest konnte nicht geladen werden.', error);
    }

    return new LearningContentError('catalog-load-failed', 'Der Kurskatalog konnte nicht geladen werden.', error);
  }
}
