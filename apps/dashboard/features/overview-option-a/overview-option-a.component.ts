import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { COURSE_MILESTONES } from '../../data/course-roadmap.data';
import { AI_LEARNER_SCENARIOS, AiLearnerScenario } from '../../data/mock/ai-learner-scenarios.mock';
import { GITHUB_ACTIVITY_MOCK } from '../../data/mock/github-activity.mock';
import { LEARNER_MARKDOWN_INPUTS } from '../../data/mock/learner-markdown.mock';
import { GitActivity, LearnerProgress, SnapshotDelta } from '../../models';
import { DeltaService } from '../../services/delta.service';
import { LearnerProgressParserService } from '../../services/learner-progress-parser.service';
import { SnapshotService } from '../../services/snapshot.service';

@Component({
  selector: 'app-overview-option-a',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './overview-option-a.component.html',
  styleUrls: ['./overview-option-a.component.scss'],
})
export class OverviewOptionAComponent {
  readonly milestones = COURSE_MILESTONES;
  readonly aiScenarios = AI_LEARNER_SCENARIOS;
  readonly displayedColumns = ['learner', ...this.milestones.map((m) => m.milestoneId), 'wishes', 'delta'];

  learners: LearnerProgress[] = [];
  allGitActivity: GitActivity[] = [];
  /** Vorberechnete Map: Wunschtext → Anzahl Lernende mit diesem Wunsch (Memoisation, §10c) */
  wishFrequencyMap: Map<string, number> = new Map();
  snapshotCount = 0;
  latestSnapshotTime: string | null = null;
  selectedScenario: AiLearnerScenario = AI_LEARNER_SCENARIOS[0];
  activeView: 'overview' | 'detail' = 'overview';
  selectedLearnerId: string | null = null;
  currentDelta: SnapshotDelta | null = null;

  constructor(
    private readonly parserService: LearnerProgressParserService,
    private readonly snapshotService: SnapshotService,
    private readonly deltaService: DeltaService,
  ) {
    this.rebuildLearners();
    this.refreshSnapshotMeta();
  }

  rebuildLearners(): void {
    const baseLearners = LEARNER_MARKDOWN_INPUTS.map((input) =>
      this.parserService.parseLearnerMarkdown(input.learnerId, input.learnerName, input.markdown),
    );

    this.learners = [...baseLearners, this.selectedScenario.learner];
    this.allGitActivity = [...GITHUB_ACTIVITY_MOCK, this.selectedScenario.gitActivity];
    this.wishFrequencyMap = this.buildWishFrequencyMap(this.learners);
  }

  private buildWishFrequencyMap(learners: LearnerProgress[]): Map<string, number> {
    const map = new Map<string, number>();
    for (const learner of learners) {
      for (const wish of learner.individualLearningWishes) {
        map.set(wish, (map.get(wish) ?? 0) + 1);
      }
    }
    return map;
  }

  switchScenario(scenarioId: string): void {
    const scenario = this.aiScenarios.find((item) => item.scenarioId === scenarioId);
    if (!scenario) {
      return;
    }
    this.selectedScenario = scenario;
    this.rebuildLearners();
  }

  createSnapshot(): void {
    const previous = this.snapshotService.getLatestSnapshot();
    const current = this.snapshotService.createSnapshot(this.learners, this.allGitActivity, []);

    if (previous) {
      this.currentDelta = this.deltaService.calculateDelta(previous, current);
    }
    this.refreshSnapshotMeta();
  }

  private refreshSnapshotMeta(): void {
    const all = this.snapshotService.getAllSnapshots();
    this.snapshotCount = all.length;
    const latest = all[all.length - 1];
    this.latestSnapshotTime = latest
      ? new Date(latest.createdAtIso).toLocaleString('de-DE', {
          day: '2-digit', month: '2-digit', year: 'numeric',
          hour: '2-digit', minute: '2-digit',
        })
      : null;
  }

  getMilestoneLabel(learner: LearnerProgress, milestoneId: string): string {
    const status = learner.milestoneStatus.find((m) => m.milestoneId === milestoneId);
    if (!status) {
      return '-';
    }
    return `${status.mustHaveDone}/${status.mustHaveTotal} M | ${status.shouldHaveDone}/${status.shouldHaveTotal} S | ${status.niceToHaveDone}/${status.niceToHaveTotal} N`;
  }

  /** Gibt die abgeschlossenen Übungen für eine bestimmte Meilenstein-Zeile zurück */
  getExerciseStatusForMilestone(learner: LearnerProgress, milestoneId: string) {
    const status = learner.milestoneStatus.find((m) => m.milestoneId === milestoneId);
    return status?.exerciseStatus ?? [];
  }

  /** Gibt die CSS-Klasse für den Übungs-Chip zurück (grün/gelb/grau) */
  getExerciseChipClass(status: 'not_started' | 'in_progress' | 'done'): string {
    const map: Record<string, string> = {
      done: 'chip-done',
      in_progress: 'chip-in-progress',
      not_started: 'chip-not-started',
    };
    return map[status] ?? 'chip-not-started';
  }

  getExerciseChipLabel(status: 'not_started' | 'in_progress' | 'done'): string {
    const map: Record<string, string> = {
      done: '✓',
      in_progress: '~',
      not_started: '○',
    };
    return map[status] ?? '○';
  }

  /** Prüft ob ein Lernender aktuell blockiert ist (blockedBy in letzten Journaleinträgen) */
  isLearnerBlocked(learner: LearnerProgress): boolean {
    return learner.journalEntries.some((entry) => entry.blockedBy.trim().length > 0);
  }

  /** Gibt den aktuellen Blockade-Text zurück (letzter Eintrag mit blockedBy) */
  getBlockedByText(learner: LearnerProgress): string {
    const blocked = [...learner.journalEntries]
      .reverse()
      .find((entry) => entry.blockedBy.trim().length > 0);
    return blocked?.blockedBy ?? '';
  }

  /** Liest Haeufigkeit aus vorberechneter Map (Memoisation, §10c) */
  getWishFrequency(wish: string): number {
    return this.wishFrequencyMap.get(wish) ?? 0;
  }

  /** Gibt Wünsche mit Häufigkeit als Paare zurück */
  getWishesWithFrequency(learner: LearnerProgress): Array<{ wish: string; count: number }> {
    return learner.individualLearningWishes.map((wish) => ({
      wish,
      count: this.wishFrequencyMap.get(wish) ?? 0,
    }));
  }

  getWishSummary(learner: LearnerProgress): string {
    if (learner.individualLearningWishes.length === 0) {
      return '-';
    }
    return learner.individualLearningWishes.join(', ');
  }

  getDeltaForLearner(learnerId: string): number | null {
    const delta = this.currentDelta?.learnerDeltas.find((item) => item.learnerId === learnerId);
    if (!delta) {
      return null;
    }
    return this.deltaService.buildProgressMeterValue(delta);
  }

  hasDeltaHighlight(learnerId: string): boolean {
    const delta = this.currentDelta?.learnerDeltas.find((item) => item.learnerId === learnerId);
    if (!delta) {
      return false;
    }
    return delta.changedExerciseIds.length > 0 || delta.changedMilestoneIds.length > 0;
  }

  selectLearner(learnerId: string): void {
    this.selectedLearnerId = learnerId;
    this.activeView = 'detail';
  }

  backToOverview(): void {
    this.activeView = 'overview';
    this.selectedLearnerId = null;
  }

  get selectedLearner(): LearnerProgress | null {
    if (!this.selectedLearnerId) {
      return null;
    }
    return this.learners.find((item) => item.learnerId === this.selectedLearnerId) ?? null;
  }

  get selectedLearnerGitActivity(): GitActivity | null {
    if (!this.selectedLearnerId) {
      return null;
    }
    return this.allGitActivity.find((item) => item.learnerId === this.selectedLearnerId) ?? null;
  }

  /** Gibt die letzten 3 Journaleinträge zurück */
  getRecentJournalEntries(learner: LearnerProgress) {
    return [...learner.journalEntries].slice(-3).reverse();
  }

  getOpenPrCount(gitActivity: GitActivity | null): number {
    return gitActivity?.pullRequests.filter((pr) => pr.state === 'open').length ?? 0;
  }
}
