import { CommonModule } from '@angular/common';
import { Component, inject, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ONBOARDING_STEP_COUNT } from '../../data/onboarding-steps.data';
import { OnboardingStateService } from '../../services/onboarding-state.service';
import {
  LEARNING_PLATFORM_BASE_URL,
  isLegacyRedirectEnabled,
  setLegacyRedirectEnabled
} from '../../services/legacy-learning-platform-redirect';

type CourseStatus = 'live' | 'coming-soon';

interface CourseCatalogEntry {
  id: string;
  title: string;
  shortDescription: string;
  status: CourseStatus;
  statusLabel: string;
  preview?: string;
}

@Component({
  selector: 'app-startseite',
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {
  private readonly state = inject(OnboardingStateService);
  private readonly primaryCourseId = 'vibe-coding-agentic-ai';
  readonly learningPlatformUrl = LEARNING_PLATFORM_BASE_URL;
  readonly legacyRedirectEnabled = signal(isLegacyRedirectEnabled());
  readonly stepCount = ONBOARDING_STEP_COUNT;

  readonly courseCatalog: CourseCatalogEntry[] = [
    {
      id: this.primaryCourseId,
      title: 'Softwareentwicklung mit Vibe Coding & Agentic AI',
      shortDescription: 'Von der Produktidee über Planung, Prototyping und Implementierung bis zu Deployment und Weiterentwicklung.',
      status: 'live',
      statusLabel: 'Jetzt verfügbar',
      preview: 'assets/graphics/course-preview.png'
    },
    {
      id: 'rapid-prototyping-ai',
      title: 'Rapid Prototyping mit KI',
      shortDescription: 'Von der Problemidee bis zum testbaren Prototyp in kurzen Iterationen.',
      status: 'coming-soon',
      statusLabel: 'Im Aufbau'
    },
    {
      id: 'ai-literacy-teams',
      title: 'AI Literacy fuer Teams',
      shortDescription: 'Ein praxisnaher Einstieg in Modellverstaendnis, Grenzen, Verantwortung und sinnvollen KI-Einsatz.',
      status: 'coming-soon',
      statusLabel: 'Im Aufbau'
    }
  ];

  readonly featuredCourse = computed(() =>
    this.courseCatalog.find(c => c.status === 'live') ?? this.courseCatalog[0]
  );

  readonly completedCount = computed(() => this.state.getCompletedCount());
  readonly hasProgress = computed(() => this.state.getCompletedCount() > 0);
  readonly isCompleted = computed(() => this.state.getCompletedCount() >= ONBOARDING_STEP_COUNT);
  readonly resumeCourseInfo = computed(() => {
    const course = this.featuredCourse();
    return `Kurs: ${course.title}, Modul 1: Einstieg und Arbeitsumgebung`;
  });
  readonly featuredCourseLabel = computed(() => this.hasProgress() ? 'Kurs fortsetzen' : 'Kurs starten');
  readonly featuredCourseLink = computed(() => {
    if (!this.hasProgress()) {
      return `/kurse/${this.featuredCourse().id}`;
    }

    const firstIncompleteStepId = this.state.getFirstIncompleteStepId();
    return firstIncompleteStepId === null
      ? `/kurse/${this.featuredCourse().id}/onboarding/zusammenfassung`
      : `/kurse/${this.featuredCourse().id}/onboarding/step/${firstIncompleteStepId}`;
  });

  toggleLegacyRedirect(): void {
    const next = !this.legacyRedirectEnabled();
    setLegacyRedirectEnabled(next);
    this.legacyRedirectEnabled.set(next);
  }
}
