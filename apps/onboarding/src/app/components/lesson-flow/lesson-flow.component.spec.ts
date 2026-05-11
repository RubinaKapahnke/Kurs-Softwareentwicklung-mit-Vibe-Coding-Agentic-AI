import { TestBed } from '@angular/core/testing';

import { OnboardingLessonFlow } from '../../models/onboarding.models';
import { LessonFlowComponent } from './lesson-flow.component';

describe('LessonFlowComponent', () => {
  let originalRequestAnimationFrame: typeof window.requestAnimationFrame;

  const quizLesson: OnboardingLessonFlow = {
    title: 'Quiz-Test',
    slides: [
      {
        type: 'quiz',
        title: 'Quiz 1',
        prompt: 'Welche Aussagen sind korrekt?',
        instruction: 'Wähle die besten 2 Antworten.',
        options: [
          { id: 'a', label: 'Richtige Antwort 1', isCorrect: true },
          { id: 'b', label: 'Falsche Antwort 1', isCorrect: false },
          { id: 'c', label: 'Richtige Antwort 2', isCorrect: true },
          { id: 'd', label: 'Falsche Antwort 2', isCorrect: false },
        ],
        successMessage: 'Stark, das war korrekt.',
        errorMessage: 'Fast, schau dir den Kontext nochmal an.',
        multiSelect: true,
      },
    ],
  };

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [LessonFlowComponent],
    });

    originalRequestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = (() => 0) as typeof window.requestAnimationFrame;
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRequestAnimationFrame;
  });

  function createComponent() {
    const fixture = TestBed.createComponent(LessonFlowComponent);
    fixture.componentRef.setInput('lesson', quizLesson);
    fixture.detectChanges();

    return {
      fixture,
      component: fixture.componentInstance,
    };
  }

  it('switches action button from check to retry after evaluation', () => {
    const { fixture, component } = createComponent();

    expect(fixture.nativeElement.textContent).toContain('Antworten prüfen');

    component.onOptionToggle('a', true);
    component.checkQuizAnswers();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Nochmal versuchen');
  });

  it('evaluates all four option states with expected labels and icons', () => {
    const { component } = createComponent();

    // a: richtig gewählt, b: falsch gewählt, c: falsch ausgelassen, d: richtig ausgelassen
    component.onOptionToggle('a', true);
    component.onOptionToggle('b', true);
    component.checkQuizAnswers();

    expect(component.evaluatedOptionFeedback('a')).toBe('Richtig gewählt');
    expect(component.evaluatedOptionFeedback('b')).toBe('Falsch gewählt');
    expect(component.evaluatedOptionFeedback('c')).toBe('Falsch ausgelassen');
    expect(component.evaluatedOptionFeedback('d')).toBe('Richtig ausgelassen');

    expect(component.evaluatedOptionIcon('a')).toBe('check_circle');
    expect(component.evaluatedOptionIcon('b')).toBe('cancel');
    expect(component.evaluatedOptionIcon('c')).toBe('highlight_off');
    expect(component.evaluatedOptionIcon('d')).toBe('check_circle_outline');
  });

  it('renders classes for all four visual states after evaluation', () => {
    const { fixture, component } = createComponent();

    component.onOptionToggle('a', true);
    component.onOptionToggle('b', true);
    component.checkQuizAnswers();
    fixture.detectChanges();

    const options = Array.from(fixture.nativeElement.querySelectorAll('.lesson-quiz-option')) as HTMLElement[];

    expect(options[0].classList.contains('lesson-quiz-option--state-correct-selected')).toBe(true);
    expect(options[1].classList.contains('lesson-quiz-option--state-incorrect-selected')).toBe(true);
    expect(options[2].classList.contains('lesson-quiz-option--state-correct-unselected')).toBe(true);
    expect(options[3].classList.contains('lesson-quiz-option--state-incorrect-unselected')).toBe(true);
  });

  it('shows result heading and explanation text for failed answers', () => {
    const { fixture, component } = createComponent();

    component.onOptionToggle('a', true);
    component.checkQuizAnswers();
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('.lesson-flow__quiz-feedback-title') as HTMLElement;
    const text = fixture.nativeElement.querySelector('.lesson-flow__quiz-feedback-text') as HTMLElement;

    expect(heading.textContent?.trim()).toBe('Falsch geantwortet');
    expect(text.textContent).toContain('Fast, schau dir den Kontext nochmal an.');
  });

  it('resets quiz state when retry is triggered', () => {
    const { component } = createComponent();

    component.onOptionToggle('a', true);
    component.checkQuizAnswers();

    expect(component.quizEvaluated()).toBe(true);
    expect(component.selectedOptionIds().size).toBeGreaterThan(0);

    component.restartQuiz();

    expect(component.quizEvaluated()).toBe(false);
    expect(component.quizPassed()).toBe(false);
    expect(component.selectedOptionIds().size).toBe(0);
  });
});
