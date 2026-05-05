import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { OnboardingStateService } from '../../services/onboarding-state.service';

@Component({
  selector: 'app-kursstart',
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './kursstart.component.html',
  styleUrl: './kursstart.component.scss'
})
export class KursstartComponent {
  private readonly state = inject(OnboardingStateService);

  readonly hasProgress = computed(() => this.state.getCompletedCount() > 0);
  readonly resumeStep = computed(() => {
    // Ersten nicht erledigten Schritt finden, oder Zusammenfassung
    for (let i = 1; i <= 6; i++) {
      if (!this.state.isStepDone(i)) return i;
    }
    return 6;
  });

  readonly courseModules: { icon: string; title: string; topics: string[] }[] = [
    {
      icon: 'terminal',
      title: 'Git & GitHub',
      topics: ['Branching-Workflow', 'Pull Requests', 'Kollaboration im Team']
    },
    {
      icon: 'code',
      title: 'VS Code & Copilot',
      topics: ['KI-gestütztes Schreiben', 'Inline Suggestions', 'Copilot Chat & Agents']
    },
    {
      icon: 'architecture',
      title: 'Angular Basics',
      topics: ['Standalone Components', 'Services & Signals', 'Routing & Material']
    },
    {
      icon: 'auto_awesome',
      title: 'Vibe Coding Praxis',
      topics: ['PRD als Quelle', 'Context Engineering', 'Iteratives Bauen mit KI']
    },
    {
      icon: 'description',
      title: 'Markdown & Dokumentation',
      topics: ['README schreiben', 'Kursstruktur verstehen', 'Eigenes Lernjournal']
    },
    {
      icon: 'rocket_launch',
      title: 'Eigenes Projekt',
      topics: ['PRD formulieren', 'Schrittweiser Aufbau', 'Review & Deployment']
    }
  ];

  readonly onboardingSteps: { label: string; detail: string }[] = [
    { label: 'GitHub-Zugang anlegen', detail: 'Account erstellen oder einloggen, SSH-Key optional' },
    { label: 'Git lokal installieren', detail: 'Einmalige Installation auf deinem Rechner' },
    { label: 'VS Code einrichten', detail: 'Editor + Copilot-Extension aktivieren' },
    { label: 'Terminal prüfen', detail: 'Integriertes Terminal in VS Code testen' },
    { label: 'Repo klonen', detail: 'Kursmaterial lokal verfügbar machen' },
    { label: 'Kursstart in NEXT_STEPS.md', detail: 'Erster echter Schritt im Kursfluss' }
  ];

  readonly targetAudience = [
    { icon: 'person', label: 'Product Owner & Scrum Master' },
    { icon: 'engineering', label: 'Entwickler:innen (Einsteiger)' },
    { icon: 'groups', label: 'Teams mit KI-Ambitionen' },
    { icon: 'manage_accounts', label: 'Führungskräfte in Tech-Projekten' }
  ];
}