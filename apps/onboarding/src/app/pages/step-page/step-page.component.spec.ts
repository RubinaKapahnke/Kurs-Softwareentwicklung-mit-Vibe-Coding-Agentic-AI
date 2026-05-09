import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, Router, convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { OnboardingStateService } from '../../services/onboarding-state.service';
import { StepPageComponent } from './step-page.component';

describe('StepPageComponent', () => {
  let routeParamMap$: BehaviorSubject<ParamMap>;

  beforeEach(() => {
    sessionStorage.clear();
    routeParamMap$ = new BehaviorSubject(convertToParamMap({ id: '3' }));

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        OnboardingStateService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: routeParamMap$.asObservable(),
            snapshot: {
              paramMap: routeParamMap$.value
            }
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: () => Promise.resolve(true)
          }
        }
      ]
    });
  });

  function createComponent(): StepPageComponent {
    return TestBed.runInInjectionContext(() => new StepPageComponent());
  }

  it('shows a follow-up hint when step content continues below the lesson flow', () => {
    const state = TestBed.inject(OnboardingStateService);
    state.validateVoucher('90001');
    state.setStep2Experience('new');

    const component = createComponent();

    expect(component.visibleLessonFlow()).not.toBeNull();
    expect(component.hasLessonFollowUpContent()).toBe(true);
    expect(component.lessonFollowUpLabel()).toContain('Aufgaben');
  });

  it('does not show a follow-up hint for lesson-only steps', () => {
    const component = createComponent();
    routeParamMap$.next(convertToParamMap({ id: '7' }));

    expect(component.visibleLessonFlow()).not.toBeNull();
    expect(component.hasLessonFollowUpContent()).toBe(false);
  });
});
