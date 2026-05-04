import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { OnboardingStateService } from '../services/onboarding-state.service';

export const stepAccessGuard: CanActivateFn = (route): boolean | UrlTree => {
  const router = inject(Router);
  const state = inject(OnboardingStateService);

  const rawId = route.paramMap.get('id');
  const stepId = Number(rawId);

  if (!Number.isInteger(stepId) || stepId < 1 || stepId > 6) {
    return router.createUrlTree(['/onboarding/step/1']);
  }

  if (state.canAccessStep(stepId)) {
    return true;
  }

  return router.createUrlTree(['/onboarding/step', state.maxUnlockedStep()]);
};
