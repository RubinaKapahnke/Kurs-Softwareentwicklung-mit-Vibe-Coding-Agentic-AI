import { TestBed } from '@angular/core/testing';

import { OnboardingStateService } from './onboarding-state.service';

describe('OnboardingStateService', () => {
  beforeEach(() => {
    sessionStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [OnboardingStateService]
    });
  });

  it('loads specialized step-2 experience from session storage on reload', () => {
    const service = TestBed.inject(OnboardingStateService);

    service.setRepoExperience('experienced');

    const reloaded = new OnboardingStateService();
    expect(reloaded.step2Experience()).toBe('existing-experienced');
  });

  it('resets account setup progress when the step-2 path changes', () => {
    const service = TestBed.inject(OnboardingStateService);

    service.validateVoucher('90001');
    service.setStep2Experience('new');
    service.setSubtaskDone(3, 0, true);
    service.markStepCompleted(3);
    service.confirmGithubVisibility(true);

    service.setRepoExperience('beginner');

    expect(service.isSubtaskDone(3, 0)).toBe(false);
    expect(service.isStepDone(3)).toBe(false);
    expect(service.step2Experience()).toBe('existing-beginner');
  });

  it('clears visibility confirmation when switching back to the new-account path', () => {
    const service = TestBed.inject(OnboardingStateService);

    service.validateVoucher('90001');
    service.setRepoExperience('experienced');
    service.confirmGithubVisibility(true);

    service.resetStep2ToNewPath();

    expect(service.step2Experience()).toBe('new');
    expect(service.githubVisibilityConfirmed()).toBe(false);
  });

  it('keeps progress isolated per course context', () => {
    const service = TestBed.inject(OnboardingStateService);

    service.markStepCompleted(1);
    expect(service.isStepDone(1)).toBe(true);

    service.setCourseContext('rapid-prototyping-ai');
    expect(service.isStepDone(1)).toBe(false);

    service.markStepCompleted(2);
    expect(service.isStepDone(2)).toBe(true);

    service.setCourseContext('vibe-coding-agentic-ai');
    expect(service.isStepDone(1)).toBe(true);
    expect(service.isStepDone(2)).toBe(false);
  });
});
