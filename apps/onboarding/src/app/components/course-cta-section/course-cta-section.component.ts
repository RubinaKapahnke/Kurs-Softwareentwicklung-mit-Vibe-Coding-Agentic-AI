import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-course-cta-section',
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './course-cta-section.component.html',
  styleUrl: './course-cta-section.component.scss'
})
export class CourseCTASectionComponent {
  readonly selectedCourseIsLive = input.required<boolean>();
  readonly hasProgress = input.required<boolean>();
  readonly resumeLink = input.required<string>();
  readonly resumeLabel = input.required<string>();
  readonly voucherValidated = input<boolean>(false);
}
