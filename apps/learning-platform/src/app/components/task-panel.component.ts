import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { StepManifestTaskDirective, StepManifestTodo } from '../models/learning-content.models';

@Component({
  selector: 'app-task-panel',
  imports: [CommonModule],
  templateUrl: './task-panel.component.html',
  styleUrl: './task-panel.component.scss'
})
export class TaskPanelComponent {
  @Input() tasks: StepManifestTaskDirective[] = [];
  @Input() todos: StepManifestTodo[] = [];

  get hasContent(): boolean {
    return this.tasks.length > 0 || this.todos.length > 0;
  }
}
