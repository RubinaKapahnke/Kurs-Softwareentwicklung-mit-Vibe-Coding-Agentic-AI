import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface CourseCatalogEntry {
  id: string;
  title: string;
  lead: string;
}

@Component({
  selector: 'app-course-header',
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './course-header.component.html',
  styleUrl: './course-header.component.scss'
})
export class CourseHeaderComponent {
  readonly selectedCourse = input.required<CourseCatalogEntry>();
  readonly selectedCourseIsLive = input.required<boolean>();
  readonly hasProgress = input.required<boolean>();
  readonly isCompleted = input.required<boolean>();
  readonly resumeLink = input.required<string>();
  readonly resumeLabel = input.required<string>();
}
