import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { ONBOARDING_STEP_COUNT } from '../data/onboarding-steps.data';
import { OnboardingStateService } from '../services/onboarding-state.service';

export const stepAccessGuard: CanActivateFn = (route): boolean | UrlTree => {
  const router = inject(Router);
  const state = inject(OnboardingStateService);
  const courseId = route.parent?.paramMap.get('courseId') ?? 'vibe-coding-agentic-ai';
  state.setCourseContext(courseId);

  const rawId = route.paramMap.get('id');
  const stepId = Number(rawId);

  if (!Number.isInteger(stepId) || stepId < 1 || stepId > ONBOARDING_STEP_COUNT) {
    return router.createUrlTree(['/kurse', courseId, 'onboarding', 'step', '1']);
  }

  // Schritt 1 ist der Voucher-Gate. Alle weiteren Schritte erst nach Freischaltung.
  if (stepId > 1 && !state.voucherValidated()) {
    return router.createUrlTree(['/kurse', courseId, 'onboarding', 'step', '1']);
  }

  return true;
};
