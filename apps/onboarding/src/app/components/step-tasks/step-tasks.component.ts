import { Component, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { OnboardingLessonContentSection } from '../../models/onboarding.models';
import { Step2ExperienceChoice } from '../../services/onboarding-state.service';

export interface SubtaskChange {
  index: number;
  checked: boolean;
}

@Component({
  selector: 'app-step-tasks',
  standalone: true,
  imports: [MatCheckboxModule, MatIconModule],
  templateUrl: './step-tasks.component.html',
  styleUrl: './step-tasks.component.scss'
})
export class StepTasksComponent {
  private readonly subheadingPrefix = '__subheading__';
  readonly notes = input<OnboardingLessonContentSection[]>([]);
  readonly tasks = input.required<string[]>();
  readonly isAccountChoiceStep = input.required<boolean>();
  readonly isInviteStep = input.required<boolean>();
  readonly showAccountStepFullInstructions = input.required<boolean>();
  readonly step2Experience = input.required<Step2ExperienceChoice>();
  readonly isSubtaskDone = input.required<(taskIndex: number) => boolean>();
  readonly githubProfileShareTask = input.required<string>();
  readonly githubProfileShareTaskIndex = input.required<number>();
  readonly githubProfileShareDone = input.required<boolean>();

  readonly subtaskChanged = output<SubtaskChange>();

  onSubtaskChange(index: number, checked: boolean): void {
    this.subtaskChanged.emit({ index, checked });
  }

  isToneCallout(section: OnboardingLessonContentSection): boolean {
    return Boolean(section.tone && section.tone !== 'default');
  }

  toneIcon(section: OnboardingLessonContentSection): string {
    switch (section.tone) {
      case 'danger':
        return 'priority_high';
      case 'success':
        return 'task_alt';
      case 'tip':
        return 'lightbulb';
      case 'info':
        return 'info';
      case 'highlight':
      default:
        return 'priority_high';
    }
  }

  isSubheadingParagraph(text: string): boolean {
    return text.startsWith(this.subheadingPrefix);
  }

  extractSubheadingText(text: string): string {
    return text.slice(this.subheadingPrefix.length).trim();
  }

  linkifyText(text: string): string {
    if (!text) {
      return '';
    }

    let escaped = this.escapeHtml(text);

    const linkPlaceholders: string[] = [];
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/gi, (_, label: string, url: string) => {
      const href = /^(https?:\/\/)/i.test(url) ? url : `https://${url}`;
      const token = `%%LINK_${linkPlaceholders.length}%%`;
      linkPlaceholders.push(`<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`);
      return token;
    });

    escaped = escaped
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    const urlPattern = /\b((?:https?:\/\/)?(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[\w\-./?%&=+#~]*)?)/gi;
    escaped = escaped.replace(urlPattern, (rawUrl: string) => {
      const href = /^(https?:\/\/)/i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${rawUrl}</a>`;
    });

    for (let i = 0; i < linkPlaceholders.length; i++) {
      escaped = escaped.replace(`%%LINK_${i}%%`, linkPlaceholders[i]);
    }

    return escaped;
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
