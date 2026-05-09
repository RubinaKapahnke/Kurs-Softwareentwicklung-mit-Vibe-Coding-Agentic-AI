import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Audience {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-course-audience-section',
  imports: [CommonModule, MatIconModule],
  templateUrl: './course-audience-section.component.html',
  styleUrl: './course-audience-section.component.scss'
})
export class CourseAudienceSectionComponent {
  readonly selectedTargetAudience = input.required<Audience[]>();
}
