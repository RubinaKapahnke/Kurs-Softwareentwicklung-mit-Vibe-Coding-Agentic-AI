import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { map } from 'rxjs';

import { ONBOARDING_STEP_COUNT } from '../../data/onboarding-steps.data';
import { OnboardingStateService } from '../../services/onboarding-state.service';
import { CourseHeaderComponent } from '../../components/course-header/course-header.component';
import { CourseModulesSectionComponent } from '../../components/course-modules-section/course-modules-section.component';
import { CourseJourneySectionComponent } from '../../components/course-journey-section/course-journey-section.component';
import { CourseAudienceSectionComponent } from '../../components/course-audience-section/course-audience-section.component';
import { CourseCTASectionComponent } from '../../components/course-cta-section/course-cta-section.component';

type CourseStatus = 'live' | 'coming-soon';

interface CourseCatalogEntry {
  id: string;
  shortTitle: string;
  title: string;
  lead: string;
  status: CourseStatus;
  statusLabel: string;
  onboardingEnabled: boolean;
}

@Component({
  selector: 'app-kursstart',
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    CourseHeaderComponent,
    CourseModulesSectionComponent,
    CourseJourneySectionComponent,
    CourseAudienceSectionComponent,
    CourseCTASectionComponent
  ],
  templateUrl: './kursstart.component.html',
  styleUrl: './kursstart.component.scss'
})
export class KursstartComponent {
  private readonly state = inject(OnboardingStateService);
  private readonly route = inject(ActivatedRoute);
  readonly stepCount = ONBOARDING_STEP_COUNT;

  private readonly vibeCourseId = 'vibe-coding-agentic-ai';
  private readonly currentCourseId = toSignal(
    this.route.paramMap.pipe(map(params => params.get('courseId') ?? this.vibeCourseId)),
    { initialValue: this.vibeCourseId }
  );

  private readonly syncCourseContext = effect(() => {
    this.state.setCourseContext(this.currentCourseId());
  });

  readonly courseCatalog: CourseCatalogEntry[] = [
    {
      id: this.vibeCourseId,
      shortTitle: 'Vibe Coding & Agentic AI',
      title: 'Softwareentwicklung mit Vibe Coding & Agentic AI',
      lead: 'Dieser Kurs vermittelt moderne Softwareentwicklung mit KI-Unterstützung: von der Produktidee über strukturierte Planung, Prototyping und Implementierung bis zu Deployment, Monitoring und Weiterentwicklung. Ziel ist ein wartbares, auslieferbares Produkt, das du verstehst, prüfen und verantworten kannst.',
      status: 'live',
      statusLabel: 'Jetzt verfuegbar',
      onboardingEnabled: true
    },
    {
      id: 'rapid-prototyping-ai',
      shortTitle: 'Rapid Prototyping mit KI',
      title: 'Rapid Prototyping mit KI',
      lead: 'Von der Problemidee bis zum testbaren Prototyp in kurzen Iterationen. Der Fokus liegt auf schneller Validierung ohne Architekturblindflug.',
      status: 'coming-soon',
      statusLabel: 'Im Aufbau',
      onboardingEnabled: false
    },
    {
      id: 'ai-literacy-teams',
      shortTitle: 'AI Literacy fuer Teams',
      title: 'AI Literacy fuer Teams',
      lead: 'Ein praxisnaher Einstieg in Modellverstaendnis, Grenzen, Verantwortung und sinnvollen KI-Einsatz im Teamalltag.',
      status: 'coming-soon',
      statusLabel: 'Im Aufbau',
      onboardingEnabled: false
    }
  ];

  readonly selectedCourse = computed(() =>
    this.courseCatalog.find(course => course.id === this.currentCourseId()) ?? this.courseCatalog[0]
  );
  readonly selectedCourseIsLive = computed(() => this.selectedCourse().status === 'live');

  readonly hasProgress = computed(() => this.state.getCompletedCount() > 0);
  readonly isCompleted = computed(() => this.state.getCompletedCount() >= ONBOARDING_STEP_COUNT);
  readonly resumeStep = computed(() => this.state.getFirstIncompleteStepId() ?? ONBOARDING_STEP_COUNT);
  readonly resumeLink = computed(() => this.isCompleted()
    ? `/kurse/${this.selectedCourse().id}/onboarding/zusammenfassung`
    : `/kurse/${this.selectedCourse().id}/onboarding/step/${this.resumeStep()}`);
  readonly resumeLabel = computed(() => this.isCompleted() ? 'Zur Zusammenfassung' : `Bei Schritt ${this.resumeStep()} weitermachen`);

  private readonly vibeCourseModules: { icon: string; title: string; topics: string[] }[] = [
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

  private readonly vibeOnboardingSteps: { label: string; detail: string }[] = [
    { label: 'Voucher-Code eingeben', detail: 'Zugang freischalten, erst danach geht es weiter' },
    { label: 'GitHub-Zugang anlegen', detail: 'Account erstellen oder einloggen, SSH-Key optional' },
    { label: 'Git lokal installieren', detail: 'Einmalige Installation auf deinem Rechner' },
    { label: 'VS Code einrichten', detail: 'Editor + Copilot-Extension aktivieren' },
    { label: 'Terminal prüfen', detail: 'Integriertes Terminal in VS Code testen' },
    { label: 'Repo klonen', detail: 'Kursmaterial lokal verfügbar machen' },
    { label: 'Kurs-Handhabung verstehen', detail: 'Kurs-Repo, eigenes Repo und Lernfortschritt richtig einordnen' },
    { label: 'Kursstart in NEXT_STEPS.md', detail: 'Erster echter Schritt im Kursfluss' }
  ];

  private readonly vibeTargetAudience = [
    { icon: 'manage_accounts', label: 'Produktverantwortliche, die KI-gestützte Produktentwicklung verstehen und steuern wollen' },
    { icon: 'engineering', label: 'Fachpersonen, die eigene Tools, Daten-Apps oder Automatisierungen bauen wollen' },
    { icon: 'person', label: 'Einsteiger in Softwareentwicklung, die mit KI schneller handlungsfähig werden wollen' },
    { icon: 'groups', label: 'Teams, die Agentic AI produktiv, nachvollziehbar und verantwortungsvoll einsetzen wollen' }
  ];

  readonly selectedCourseModules = computed(() =>
    this.selectedCourse().id === this.vibeCourseId ? this.vibeCourseModules : []
  );

  readonly selectedOnboardingSteps = computed(() =>
    this.selectedCourse().id === this.vibeCourseId ? this.vibeOnboardingSteps : []
  );

  readonly selectedTargetAudience = computed(() =>
    this.selectedCourse().id === this.vibeCourseId ? this.vibeTargetAudience : [
      { icon: 'groups', label: 'Teams, die KI-Kompetenzen systematisch aufbauen wollen' },
      { icon: 'school', label: 'Fachpersonen mit Interesse an praxisnaher KI-Weiterbildung' }
    ]
  );
}