import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LearningContentError, LearningContentService } from './learning-content.service';

describe('LearningContentService', () => {
  let service: LearningContentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningContentService, provideHttpClient(), provideHttpClientTesting()]
    });

    service = TestBed.inject(LearningContentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('maps 404 on course meta to course-not-found error', () => {
    let actualError: unknown;

    service.getCourseMeta('missing-course').subscribe({
      next: () => {
        throw new Error('Expected error');
      },
      error: (err) => {
        actualError = err;
      }
    });

    const request = httpMock.expectOne('/content/modules/missing-course/course.meta.json');
    request.flush('Not found', { status: 404, statusText: 'Not Found' });

    expect(actualError instanceof LearningContentError).toBe(true);
    expect((actualError as LearningContentError).code).toBe('course-not-found');
  });

  it('returns manifest-empty for empty step list', () => {
    let actualError: unknown;

    service.getStepManifest('vibe-coding-agentic-ai', 'm01-onboarding').subscribe({
      next: () => {
        throw new Error('Expected error');
      },
      error: (err) => {
        actualError = err;
      }
    });

    const request = httpMock.expectOne('/content/modules/vibe-coding-agentic-ai/m01-onboarding/step-manifest.json');
    request.flush({ moduleId: 'm01-onboarding', steps: [], version: 1 });

    expect(actualError instanceof LearningContentError).toBe(true);
    expect((actualError as LearningContentError).code).toBe('manifest-empty');
  });

  it('maps unknown manifest load errors to manifest-load-failed', () => {
    let actualError: unknown;

    service.getStepManifest('vibe-coding-agentic-ai', 'm01-onboarding').subscribe({
      next: () => {
        throw new Error('Expected error');
      },
      error: (err) => {
        actualError = err;
      }
    });

    const request = httpMock.expectOne('/content/modules/vibe-coding-agentic-ai/m01-onboarding/step-manifest.json');
    request.error(new ProgressEvent('network-error'));

    expect(actualError instanceof LearningContentError).toBe(true);
    expect((actualError as LearningContentError).code).toBe('manifest-load-failed');
    expect((actualError as LearningContentError).cause instanceof HttpErrorResponse).toBe(true);
  });
});
