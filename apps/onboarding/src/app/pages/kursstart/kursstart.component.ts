import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { ONBOARDING_STEP_COUNT } from '../../data/onboarding-steps.data';
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
  readonly stepCount = ONBOARDING_STEP_COUNT;

  readonly hasProgress = computed(() => this.state.getCompletedCount() > 0);
  readonly resumeStep = computed(() => {
    return this.state.getFirstIncompleteStepId() ?? ONBOARDING_STEP_COUNT;
  });

  readonly courseModules: { icon: string; title: string; topics: string[] }[] = [
    {
      icon: 'terminal',
      title: '1. Arbeitsumgebung, Dokumentation & Versionsverwaltung',
      topics: ['VS Code, Git & GitHub einrichten', 'Markdown und Dokumentation', 'Änderungen versionieren und teilen']
    },
    {
      icon: 'description',
      title: '2. Produktbeschreibung & inkrementelle Planung',
      topics: ['PRD und User Stories erstellen', 'PoC, Prototyp, MVP einordnen', 'Akzeptanzkriterien formulieren']
    },
    {
      icon: 'auto_awesome',
      title: '3. Vibe Coding, Prompting & Context Engineering',
      topics: ['KI über klare Ziele steuern', 'Kontextdateien aufbauen', 'Iteratives Bauen mit KI']
    },
    {
      icon: 'psychology',
      title: '4. AI Literacy & Modellverständnis',
      topics: ['LLMs, RAG und Agenten einordnen', 'Halluzinationen erkennen', 'Modelle sinnvoll auswählen']
    },
    {
      icon: 'code',
      title: '5. Grundlagen Programmierlogik',
      topics: ['Variablen, Funktionen, Bedingungen', 'Datenstrukturen und Schleifen', 'KI-Code lesen und verstehen']
    },
    {
      icon: 'bug_report',
      title: '6. Debugging, Testing & Harness Engineering',
      topics: ['Fehler systematisch eingrenzen', 'Tests aus Anforderungen ableiten', 'Prüfabläufe für KI-Ausgaben']
    },
    {
      icon: 'architecture',
      title: '7. Architektur & wartbare Produktstruktur',
      topics: ['Produkte in Komponenten zerlegen', 'Datenflüsse dokumentieren', 'Strukturierte Repos aufbauen']
    },
    {
      icon: 'settings_suggest',
      title: '8. AI System Architecture, Modellwahl & Token Management',
      topics: ['Modelle nach Aufgabe auswählen', 'Right Sizing anwenden', 'Tokenverbrauch und Kosten steuern']
    },
    {
      icon: 'smart_toy',
      title: '9. Agentic Software Engineering & autonome Agenten',
      topics: ['Agentenrollen und Workflows', 'Multi-Agent-Systeme orchestrieren', 'Autonomiegrade und Guardrails']
    },
    {
      icon: 'bar_chart',
      title: '10. Daten, Reporting & RAG-Grundlagen',
      topics: ['Datenquellen und -formate', 'Pandas, Streamlit, SQLite', 'Embeddings und Retrieval']
    },
    {
      icon: 'fork_right',
      title: '11. Schwerpunktpfad Web/App oder Datenprodukt',
      topics: ['Angular oder Python/Streamlit vertiefen', 'Nutzbares Produktinkrement bauen', 'Eigenen Pfad wählen']
    },
    {
      icon: 'groups',
      title: '12. Teamarbeit, Datenschutz, Urheberrecht & Governance',
      topics: ['Pull Requests und Reviews', 'Datenschutz- und Lizenzprüfung', 'Verantwortliche Freigaben']
    },
    {
      icon: 'rocket_launch',
      title: '13. Deployment, Monitoring & Release Management',
      topics: ['Semantic Versioning und Release Notes', 'CI/CD-Grundlagen und Hosting', 'Monitoring und Weiterentwicklung']
    },
    {
      icon: 'workspace_premium',
      title: '14. Abschlussprojekt & Portfolio',
      topics: ['Eigenes Produkt dokumentiert fertigstellen', 'Code, Tests und Betriebshinweise', 'Portfolio-Stück präsentieren']
    }
  ];

  readonly onboardingSteps: { label: string; detail: string }[] = [
    { label: 'Voucher-Code eingeben', detail: 'Zugang freischalten, erst danach geht es weiter' },
    { label: 'GitHub-Zugang anlegen', detail: 'Account erstellen oder einloggen, SSH-Key optional' },
    { label: 'Git lokal installieren', detail: 'Einmalige Installation auf deinem Rechner' },
    { label: 'VS Code einrichten', detail: 'Editor + Copilot-Extension aktivieren' },
    { label: 'Terminal prüfen', detail: 'Integriertes Terminal in VS Code testen' },
    { label: 'Repo klonen', detail: 'Kursmaterial lokal verfügbar machen' },
    { label: 'Kurs-Handhabung verstehen', detail: 'Kurs-Repo, eigenes Repo und Lernfortschritt richtig einordnen' },
    { label: 'Kursstart in NEXT_STEPS.md', detail: 'Erster echter Schritt im Kursfluss' }
  ];

  readonly targetAudience = [
    { icon: 'manage_accounts', label: 'Produktverantwortliche, die KI-gestützte Produktentwicklung verstehen und steuern wollen' },
    { icon: 'engineering', label: 'Fachpersonen, die eigene Tools, Daten-Apps oder Automatisierungen bauen wollen' },
    { icon: 'person', label: 'Einsteiger in Softwareentwicklung, die mit KI schneller handlungsfähig werden wollen' },
    { icon: 'groups', label: 'Teams, die Agentic AI produktiv, nachvollziehbar und verantwortungsvoll einsetzen wollen' }
  ];
}