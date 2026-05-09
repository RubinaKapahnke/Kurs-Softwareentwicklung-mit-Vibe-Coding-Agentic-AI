import { Component, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Step2ExperienceChoice } from '../../services/onboarding-state.service';

export interface SubtaskChange {
  index: number;
  checked: boolean;
}

@Component({
  selector: 'app-step-tasks',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './step-tasks.component.html',
  styleUrl: './step-tasks.component.scss'
})
export class StepTasksComponent {
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
}
