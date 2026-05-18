// Datenquelle: course/learners/*/lernfortschritt_*.md
export interface LearnerProgress {
  learnerId: string;
  learnerName: string;
  currentFocus: string[];
  milestoneStatus: MilestoneStatus[];
  journalEntries: JournalEntry[];
  nextSmallStep: string;
  groupQuestions: string[];
  individualLearningWishes: string[];
}

// Datenquelle: COURSE_MILESTONES.md
export interface MilestoneStatus {
  milestoneId: string;
  milestoneTitle: string;
  mustHaveDone: number;
  mustHaveTotal: number;
  shouldHaveDone: number;
  shouldHaveTotal: number;
  niceToHaveDone: number;
  niceToHaveTotal: number;
  exerciseStatus: ExerciseStatus[];
}

// Datenquelle: course/uebungen/meilenstein-*-uebung-*.md
export interface ExerciseStatus {
  exerciseId: string;
  exerciseTitle: string;
  status: 'not_started' | 'in_progress' | 'done';
}

// Datenquelle: course/learners/*/lernfortschritt_*.md (Lernjournal)
export interface JournalEntry {
  dateIso: string;
  did: string;
  wentWell: string;
  blockedBy: string;
  nextStep: string;
}

// Datenquelle: GitHub API
export interface GitActivity {
  learnerId: string;
  commitCountWindow: number;
  activeBranches: string[];
  pullRequests: PullRequestSummary[];
  reviews: ReviewSummary[];
}

export interface PullRequestSummary {
  prNumber: number;
  title: string;
  state: 'open' | 'closed' | 'merged';
  author: string;
  reviewerIds: string[];
  commentCount: number;
}

export interface ReviewSummary {
  prNumber: number;
  reviewerId: string;
  reviewState: 'approved' | 'changes_requested' | 'commented';
  commentSnippets: string[];
}

// Dashboard-Snapshot (manuell per Button erstellt)
export interface DashboardSnapshot {
  snapshotId: string;
  createdAtIso: string;
  learners: LearnerProgress[];
  gitActivity: GitActivity[];
  customFields: CustomFieldEntry[];
}

// Eigene Felder des Kursentwicklers
export interface CustomFieldEntry {
  learnerId: string;
  key: string;
  value: string;
}

export interface LearnerDelta {
  learnerId: string;
  completedExercisesDiff: number;
  changedExerciseIds: string[];
  changedMilestoneIds: string[];
  changedQuestionCountDiff: number;
}

export interface SnapshotDelta {
  fromSnapshotId: string;
  toSnapshotId: string;
  learnerDeltas: LearnerDelta[];
}
