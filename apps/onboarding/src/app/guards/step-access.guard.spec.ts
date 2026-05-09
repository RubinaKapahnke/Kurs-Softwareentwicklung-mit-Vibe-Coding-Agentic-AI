import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, UrlTree, convertToParamMap, provideRouter } from '@angular/router';

import { OnboardingStateService } from '../services/onboarding-state.service';
import { stepAccessGuard } from './step-access.guard';

describe('stepAccessGuard', () => {
  beforeEach(() => {
    sessionStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), OnboardingStateService]
    });
  });

  function runGuard(stepId: string): unknown {
    const route = {
      parent: {
        paramMap: convertToParamMap({ courseId: 'vibe-coding-agentic-ai' })
      },
      paramMap: convertToParamMap({ id: stepId })
    } as unknown as ActivatedRouteSnapshot;

    return TestBed.runInInjectionContext(() => stepAccessGuard(route, {} as never));
  }

  it('redirects invalid step ids to step 1', () => {
    const router = TestBed.inject(Router);
    const result = runGuard('999');

    expect(router.serializeUrl(result as UrlTree)).toBe('/kurse/vibe-coding-agentic-ai/onboarding/step/1');
  });

  it('redirects protected steps to step 1 when the voucher is missing', () => {
    const router = TestBed.inject(Router);
    const result = runGuard('2');

    expect(router.serializeUrl(result as UrlTree)).toBe('/kurse/vibe-coding-agentic-ai/onboarding/step/1');
  });

  it('allows protected steps after voucher validation', () => {
    const state = TestBed.inject(OnboardingStateService);

    state.validateVoucher('90001');

    expect(runGuard('2')).toBe(true);
  });
});
