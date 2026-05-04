export interface MilestoneDefinition {
  milestoneId: string;
  title: string;
  mustHaveTotal: number;
  shouldHaveTotal: number;
  niceToHaveTotal: number;
  exercises: Array<{ exerciseId: string; title: string }>;
}

export const COURSE_MILESTONES: MilestoneDefinition[] = [
  {
    milestoneId: 'm1',
    title: 'Meilenstein 1: Vibe Coding Basics',
    mustHaveTotal: 3,
    shouldHaveTotal: 2,
    niceToHaveTotal: 1,
    exercises: [],
  },
  {
    milestoneId: 'm2',
    title: 'Meilenstein 2: Setup & Umgebung',
    mustHaveTotal: 4,
    shouldHaveTotal: 3,
    niceToHaveTotal: 2,
    exercises: [
      { exerciseId: 'm2-u1', title: 'meilenstein-02-uebung-01' },
      { exerciseId: 'm2-u2', title: 'meilenstein-02-uebung-02' },
      { exerciseId: 'm2-u3', title: 'meilenstein-02-uebung-03' },
    ],
  },
  {
    milestoneId: 'm3',
    title: 'Meilenstein 3: Prompting & Context-Engineering',
    mustHaveTotal: 2,
    shouldHaveTotal: 2,
    niceToHaveTotal: 1,
    exercises: [
      { exerciseId: 'm3-u1', title: 'meilenstein-03-uebung-01' },
      { exerciseId: 'm3-u2', title: 'meilenstein-03-uebung-02' },
      { exerciseId: 'm3-u3', title: 'meilenstein-03-uebung-03' },
      { exerciseId: 'm3-u4', title: 'meilenstein-03-uebung-04' },
    ],
  },
  {
    milestoneId: 'm4',
    title: 'Meilenstein 4: Projekt starten',
    mustHaveTotal: 3,
    shouldHaveTotal: 2,
    niceToHaveTotal: 2,
    exercises: [{ exerciseId: 'm4-u1', title: 'meilenstein-04-uebung-01' }],
  },
];
