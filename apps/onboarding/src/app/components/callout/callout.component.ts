import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type CalloutTone = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-callout',
  imports: [MatIconModule],
  template: `
    <section
      class="callout"
      [class.callout--success]="tone() === 'success'"
      [class.callout--warning]="tone() === 'warning'"
      [class.callout--danger]="tone() === 'danger'"
      [attr.role]="roleName()">
      <mat-icon aria-hidden="true">{{ icon() }}</mat-icon>
      <div class="callout__body">
        <strong>{{ title() }}</strong>
        <ng-content />
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .callout {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      padding: 0.9rem var(--space-md);
      border: 1px solid var(--border-info);
      border-radius: var(--radius-md);
      background: var(--surface-info);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-relaxed);
    }

    .callout--success {
      border-color: var(--border-success);
      background: var(--surface-success);
    }

    .callout--warning {
      border-color: var(--border-warning);
      background: var(--surface-warning);
    }

    .callout--danger {
      border-color: var(--border-danger);
      background: var(--surface-danger);
    }

    .callout mat-icon {
      flex-shrink: 0;
      margin-top: 0.05rem;
      color: var(--color-primary);
      font-size: var(--icon-size-md);
    }

    .callout--success mat-icon {
      color: var(--color-success);
    }

    .callout--warning mat-icon {
      color: color-mix(in srgb, var(--color-secondary) 80%, var(--color-text));
    }

    .callout--danger mat-icon {
      color: var(--color-error);
    }

    .callout__body {
      display: grid;
      gap: var(--space-2xs);
    }

    .callout strong {
      display: block;
      font-size: var(--font-size-sm);
    }
  `]
})
export class CalloutComponent {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly tone = input<CalloutTone>('info');
  readonly roleName = input<string | null>(null);
}
