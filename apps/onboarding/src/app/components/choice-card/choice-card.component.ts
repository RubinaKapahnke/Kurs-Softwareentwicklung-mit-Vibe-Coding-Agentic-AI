import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export type ChoiceCardTone = 'dark' | 'light';

@Component({
  selector: 'app-choice-card',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './choice-card.component.html',
  styleUrl: './choice-card.component.scss'
})
export class ChoiceCardComponent {
  readonly icon = input.required<string>();
  readonly label = input.required<string>();
  readonly description = input<string | null>(null);
  readonly selected = input(false);
  readonly tone = input<ChoiceCardTone>('dark');
  readonly compact = input(false);
  readonly pressed = output<void>();
}
