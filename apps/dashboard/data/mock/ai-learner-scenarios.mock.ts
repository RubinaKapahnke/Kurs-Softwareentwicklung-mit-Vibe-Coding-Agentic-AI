import { GitActivity, LearnerProgress } from '../../models';

export interface AiLearnerScenario {
  scenarioId: string;
  title: string;
  description: string;
  learner: LearnerProgress;
  gitActivity: GitActivity;
}

const baseMilestones = [
  {
    milestoneId: 'm1',
    milestoneTitle: 'Meilenstein 1: Vibe Coding Basics',
    mustHaveDone: 3,
    mustHaveTotal: 3,
    shouldHaveDone: 2,
    shouldHaveTotal: 2,
    niceToHaveDone: 1,
    niceToHaveTotal: 1,
    exerciseStatus: [],
  },
  {
    milestoneId: 'm2',
    milestoneTitle: 'Meilenstein 2: Setup & Umgebung',
    mustHaveDone: 2,
    mustHaveTotal: 4,
    shouldHaveDone: 1,
    shouldHaveTotal: 3,
    niceToHaveDone: 0,
    niceToHaveTotal: 2,
    exerciseStatus: [
      { exerciseId: 'm2-u1', exerciseTitle: 'meilenstein-02-uebung-01', status: 'done' as const },
      { exerciseId: 'm2-u2', exerciseTitle: 'meilenstein-02-uebung-02', status: 'in_progress' as const },
      { exerciseId: 'm2-u3', exerciseTitle: 'meilenstein-02-uebung-03', status: 'not_started' as const },
    ],
  },
];

export const AI_LEARNER_SCENARIOS: AiLearnerScenario[] = [
  {
    scenarioId: 'ai-s1',
    title: 'Stabiler Fortschritt mit Rückfrage',
    description: 'AI-Learner mit regelmaessigem Fortschritt und einer offenen Inhaltsfrage.',
    learner: {
      learnerId: 'ai-learner',
      learnerName: 'AI Learner',
      currentFocus: ['Prompting sauber strukturieren', 'Git-Routine konsolidieren'],
      milestoneStatus: baseMilestones,
      journalEntries: [
        {
          dateIso: '2026-04-29',
          did: 'Übung m2-u1 abgeschlossen',
          wentWell: 'Branch und PR sauber gepflegt',
          blockedBy: 'Unsicherheit bei Review-Kommentaren',
          nextStep: 'm2-u2 mit Fokus auf Terminal-Routine abschliessen',
        },
      ],
      nextSmallStep: 'm2-u2 committen und PR aktualisieren',
      groupQuestions: ['Wann nutze ich changes requested statt comment?'],
      individualLearningWishes: ['Mehr Architekturbeispiele für Angular', 'Pair-Review mit gleichem Lernstand'],
    },
    gitActivity: {
      learnerId: 'ai-learner',
      commitCountWindow: 7,
      activeBranches: ['feature/ai-learner-s1'],
      pullRequests: [
        {
          prNumber: 301,
          title: 'feat: ai learner scenario 1 progress',
          state: 'open',
          author: 'ai-learner',
          reviewerIds: ['dom', 'daria'],
          commentCount: 3,
        },
      ],
      reviews: [
        {
          prNumber: 122,
          reviewerId: 'ai-learner',
          reviewState: 'commented',
          commentSnippets: ['Bitte Lernfrage im Journal praezisieren.'],
        },
      ],
    },
  },
  {
    scenarioId: 'ai-s2',
    title: 'Blockiert mit hohem Frageaufkommen',
    description: 'AI-Learner zeigt geringe Delta-Bewegung und mehrere offene Stofffragen.',
    learner: {
      learnerId: 'ai-learner',
      learnerName: 'AI Learner',
      currentFocus: ['Git-Review-Prozess verstehen'],
      milestoneStatus: [
        {
          ...baseMilestones[0],
          mustHaveDone: 3,
          shouldHaveDone: 2,
          niceToHaveDone: 0,
        },
        {
          ...baseMilestones[1],
          mustHaveDone: 1,
          shouldHaveDone: 0,
          exerciseStatus: [
            { exerciseId: 'm2-u1', exerciseTitle: 'meilenstein-02-uebung-01', status: 'in_progress' },
            { exerciseId: 'm2-u2', exerciseTitle: 'meilenstein-02-uebung-02', status: 'not_started' },
            { exerciseId: 'm2-u3', exerciseTitle: 'meilenstein-02-uebung-03', status: 'not_started' },
          ],
        },
      ],
      journalEntries: [
        {
          dateIso: '2026-04-29',
          did: 'Nur kleine Korrekturen',
          wentWell: 'Fehler reproduzierbar gemacht',
          blockedBy: 'Unklarer Review-Fluss auf GitHub',
          nextStep: 'Gezielte Review-Übung mit Tandem',
        },
      ],
      nextSmallStep: 'Review-Rollen im Team abstimmen',
      groupQuestions: [
        'Wann branch löschen?',
        'Wie kommentiere ich strukturiert im PR?',
        'Welche Checks sind vor Merge Pflicht?',
      ],
      individualLearningWishes: ['Review-Moderation im Team', 'GitHub-Workflows visualisiert'],
    },
    gitActivity: {
      learnerId: 'ai-learner',
      commitCountWindow: 1,
      activeBranches: ['feature/ai-learner-s2'],
      pullRequests: [
        {
          prNumber: 302,
          title: 'chore: small fixes for learning log',
          state: 'open',
          author: 'ai-learner',
          reviewerIds: [],
          commentCount: 0,
        },
      ],
      reviews: [],
    },
  },
  {
    scenarioId: 'ai-s3',
    title: 'Kooperationspotenzial durch gleiche Lernwünsche',
    description: 'AI-Learner teilt Lernwünsche mit mehreren TN und eignet sich für Pairing-Vorschlaege.',
    learner: {
      learnerId: 'ai-learner',
      learnerName: 'AI Learner',
      currentFocus: ['Angular Testing Patterns'],
      milestoneStatus: baseMilestones,
      journalEntries: [
        {
          dateIso: '2026-04-29',
          did: 'Test-Szenarien als Notizen strukturiert',
          wentWell: 'Klarere Akzeptanzkriterien formuliert',
          blockedBy: 'Noch keine gemeinsame Test-Session',
          nextStep: 'Pairing mit TN mit gleichem Wunsch starten',
        },
      ],
      nextSmallStep: 'Test-Checklist für m2-u2 erstellen',
      groupQuestions: ['Wer möchte gemeinsam Angular Tests vertiefen?'],
      individualLearningWishes: ['Teststrategie für Angular Components', 'Mehr API-Verstaendnis in Angular'],
    },
    gitActivity: {
      learnerId: 'ai-learner',
      commitCountWindow: 5,
      activeBranches: ['feature/ai-learner-s3', 'chore/ai-tests-notes'],
      pullRequests: [
        {
          prNumber: 303,
          title: 'docs: testing wish cluster proposal',
          state: 'merged',
          author: 'ai-learner',
          reviewerIds: ['dom', 'sebastian'],
          commentCount: 4,
        },
      ],
      reviews: [
        {
          prNumber: 121,
          reviewerId: 'ai-learner',
          reviewState: 'approved',
          commentSnippets: ['Lernwunsch-Spalte passt gut zur Uebung.'],
        },
      ],
    },
  },
];
