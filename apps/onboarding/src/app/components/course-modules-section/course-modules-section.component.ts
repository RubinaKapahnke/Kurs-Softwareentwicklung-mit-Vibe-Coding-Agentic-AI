import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Module {
  icon: string;
  title: string;
  topics: string[];
}

@Component({
  selector: 'app-course-modules-section',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './course-modules-section.component.html',
  styleUrl: './course-modules-section.component.scss'
})
export class CourseModulesSectionComponent {
  readonly selectedCourseIsLive = input.required<boolean>();
  readonly selectedCourseModules = input.required<Module[]>();
}
