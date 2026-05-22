import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { LearningProgressService } from './learning-progress.service';

describe('LearningProgressService', () => {
  let service: LearningProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, LearningProgressService]
    });
    localStorage.clear();
    service = TestBed.inject(LearningProgressService);
  });

  it('returns first open step id for resume', () => {
    service.setStepCompleted('course-1', 'module-1', 1, true);
    service.setStepCompleted('course-1', 'module-1', 2, true);

    const next = service.getFirstOpenStepId('course-1', 'module-1', [1, 2, 3, 4]);

    expect(next).toBe(3);
  });

  it('falls back to first step when all steps are completed', () => {
    service.setStepCompleted('course-1', 'module-1', 1, true);
    service.setStepCompleted('course-1', 'module-1', 2, true);

    const next = service.getFirstOpenStepId('course-1', 'module-1', [1, 2]);

    expect(next).toBe(1);
  });

  it('caps progress percentage at 100 for stale local storage data', () => {
    service.setStepCompleted('course-1', 'module-1', 1, true);
    service.setStepCompleted('course-1', 'module-1', 2, true);
    service.setStepCompleted('course-1', 'module-1', 3, true);

    const snapshot = service.getProgressSnapshot('course-1', 'module-1', 2);

    expect(snapshot.completedCount).toBe(2);
    expect(snapshot.percent).toBe(100);
  });
});
