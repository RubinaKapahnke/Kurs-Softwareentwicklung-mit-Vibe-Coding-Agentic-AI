import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const stepAccessGuard: CanActivateFn = (route): boolean | UrlTree => {
  const router = inject(Router);

  const rawId = route.paramMap.get('id');
  const stepId = Number(rawId);

  if (!Number.isInteger(stepId) || stepId < 1 || stepId > 6) {
    return router.createUrlTree(['/onboarding/step/1']);
  }

  return true;
};
