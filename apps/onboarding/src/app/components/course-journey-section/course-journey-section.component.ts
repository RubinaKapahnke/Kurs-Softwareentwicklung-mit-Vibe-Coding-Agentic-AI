import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface OnboardingStep {
  label: string;
  detail: string;
}

@Component({
  selector: 'app-course-journey-section',
  imports: [CommonModule, MatCardModule],
  templateUrl: './course-journey-section.component.html',
  styleUrl: './course-journey-section.component.scss'
})
export class CourseJourneySectionComponent {
  readonly stepCount = input.required<number>();
  readonly selectedCourseIsLive = input.required<boolean>();
  readonly selectedOnboardingSteps = input.required<OnboardingStep[]>();
}
