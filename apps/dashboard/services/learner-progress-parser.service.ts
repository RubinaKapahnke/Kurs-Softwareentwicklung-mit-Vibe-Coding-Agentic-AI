import { Injectable } from '@angular/core';
import { COURSE_MILESTONES } from '../data/course-roadmap.data';
import {
  ExerciseStatus,
  JournalEntry,
  LearnerProgress,
  MilestoneStatus,
} from '../models';

@Injectable({ providedIn: 'root' })
export class LearnerProgressParserService {
  parseLearnerMarkdown(
    learnerId: string,
    learnerName: string,
    markdown: string,
  ): LearnerProgress {
    const currentFocus = this.extractChecklistItems(markdown, '## Aktueller Fokus', '##');
    const completedMilestones = this.extractCompletedMilestones(markdown);
    const journalEntries = this.extractJournalEntries(markdown);
    const nextSmallStep = this.extractFirstBullet(markdown, '## Nächster kleiner Schritt', '##');
    const groupQuestions = this.extractBulletLines(markdown, '## Fragen an die Gruppe', '##');
    const individualLearningWishes = this.extractBulletLines(
      markdown,
      '## Individuelle Lernwünsche',
      '##',
    );

    const milestoneStatus = COURSE_MILESTONES.map((definition) =>
      this.buildMilestoneStatus(definition, completedMilestones.includes(definition.title)),
    );

    return {
      learnerId,
      learnerName,
      currentFocus,
      milestoneStatus,
      journalEntries,
      nextSmallStep,
      groupQuestions,
      individualLearningWishes,
    };
  }

  private buildMilestoneStatus(
    definition: {
      milestoneId: string;
      title: string;
      mustHaveTotal: number;
      shouldHaveTotal: number;
      niceToHaveTotal: number;
      exercises: Array<{ exerciseId: string; title: string }>;
    },
    completed: boolean,
  ): MilestoneStatus {
    const exerciseStatus: ExerciseStatus[] = definition.exercises.map((exercise, index) => ({
      exerciseId: exercise.exerciseId,
      exerciseTitle: exercise.title,
      status: completed ? 'done' : index === 0 ? 'in_progress' : 'not_started',
    }));

    return {
      milestoneId: definition.milestoneId,
      milestoneTitle: definition.title,
      mustHaveDone: completed ? definition.mustHaveTotal : 0,
      mustHaveTotal: definition.mustHaveTotal,
      shouldHaveDone: completed ? definition.shouldHaveTotal : 0,
      shouldHaveTotal: definition.shouldHaveTotal,
      niceToHaveDone: completed ? definition.niceToHaveTotal : 0,
      niceToHaveTotal: definition.niceToHaveTotal,
      exerciseStatus,
    };
  }

  private extractCompletedMilestones(markdown: string): string[] {
    const section = this.extractSection(markdown, '## Abgeschlossene Meilensteine', '##');
    return section
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('- [x]'))
      .map((line) => line.replace('- [x]', '').trim());
  }

  private extractJournalEntries(markdown: string): JournalEntry[] {
    const section = this.extractSection(markdown, '## Lernjournal', '##');
    const entryBlocks = section
      .split('### ')
      .map((block) => block.trim())
      .filter((block) => block.length > 0);

    return entryBlocks.map((entryBlock) => {
      const [dateLine, ...rest] = entryBlock.split('\n');
      const restText = rest.join('\n');
      return {
        dateIso: dateLine.trim(),
        did: this.extractBoldValue(restText, 'Was ich gemacht habe'),
        wentWell: this.extractBoldValue(restText, 'Was gut lief'),
        blockedBy: this.extractBoldValue(restText, 'Wo ich hänge'),
        nextStep: this.extractBoldValue(restText, 'Nächster Schritt'),
      };
    });
  }

  private extractBoldValue(section: string, label: string): string {
    const pattern = new RegExp(`- \\*\\*${label}:\\*\\*\\s*(.*)`);
    const match = section.match(pattern);
    return match?.[1]?.trim() ?? '';
  }

  private extractChecklistItems(markdown: string, startHeader: string, endHeader: string): string[] {
    const section = this.extractSection(markdown, startHeader, endHeader);
    return section
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('- [ ]') || line.startsWith('- [x]'))
      .map((line) => line.replace(/^- \[[ x]\]\s*/, '').trim())
      .filter((line) => line.length > 0);
  }

  private extractFirstBullet(markdown: string, startHeader: string, endHeader: string): string {
    const lines = this.extractBulletLines(markdown, startHeader, endHeader);
    return lines[0] ?? '';
  }

  private extractBulletLines(markdown: string, startHeader: string, endHeader: string): string[] {
    const section = this.extractSection(markdown, startHeader, endHeader);
    return section
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('- '))
      .map((line) => line.slice(2).trim())
      .filter((line) => line.length > 0 && line !== '-');
  }

  private extractSection(markdown: string, startHeader: string, endHeaderPrefix: string): string {
    const start = markdown.indexOf(startHeader);
    if (start === -1) {
      return '';
    }
    const nextHeaderMatch = markdown
      .slice(start + startHeader.length)
      .match(new RegExp(`\\n${endHeaderPrefix} `));
    if (!nextHeaderMatch) {
      return markdown.slice(start + startHeader.length).trim();
    }
    const end = start + startHeader.length + (nextHeaderMatch.index ?? 0);
    return markdown.slice(start + startHeader.length, end).trim();
  }
}
