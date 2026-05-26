import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export type StepSkipDialogResult = 'mark-done' | 'skip';

@Component({
  selector: 'app-step-skip-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <section class="skip-dialog" aria-labelledby="skip-dialog-title">
      <div class="skip-dialog__hero">
        <div class="skip-dialog__badge" aria-hidden="true">
          <mat-icon>pending_actions</mat-icon>
        </div>
        <div class="skip-dialog__hero-copy">
          <p class="skip-dialog__eyebrow">Lektionstatus</p>
          <h2 id="skip-dialog-title" class="skip-dialog__title">Lektion noch nicht abgehakt</h2>
        </div>
      </div>

      <mat-dialog-content class="skip-dialog__content">
        <p class="skip-dialog__question">Hast du diesen Lektion schon erledigt?</p>
        <p class="skip-dialog__hint">Wenn du mit einem Lektion fertig bist, drücke unten auf "Als erledigt markieren." Wenn du einen Lektion später erledigen möchtest, einfach auf weiter.</p>
      </mat-dialog-content>

      <mat-dialog-actions class="skip-dialog__actions" align="end">
        <button mat-stroked-button type="button" class="skip-dialog__button skip-dialog__button--ghost" (click)="choose('skip')">
          <mat-icon>schedule</mat-icon>
          Später erledigen
        </button>
        <button mat-flat-button color="primary" type="button" class="skip-dialog__button skip-dialog__button--primary" (click)="choose('mark-done')">
          <mat-icon>check_circle</mat-icon>
          Als erledigt markieren
        </button>
      </mat-dialog-actions>
    </section>
  `,
  styles: [`
    .skip-dialog {
      display: grid;
      gap: 0.95rem;
      padding: 1.2rem 1.2rem 1rem;
    }

    .skip-dialog__hero {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.65rem;
      align-items: center;
      padding: 0 0 0.8rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 14%, var(--color-surface));
    }

    .skip-dialog__badge {
      inline-size: 2.3rem;
      block-size: 2.3rem;
      border-radius: 0.8rem;
      display: grid;
      place-items: center;
      background: linear-gradient(145deg, color-mix(in srgb, var(--color-secondary) 40%, var(--color-surface)), color-mix(in srgb, var(--color-secondary) 18%, var(--color-surface)));
      color: var(--color-text);
      box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-surface) 85%, transparent);
    }

    .skip-dialog__badge mat-icon {
      inline-size: 1.1rem;
      block-size: 1.1rem;
      font-size: 1.1rem;
    }

    .skip-dialog__hero-copy {
      min-width: 0;
      display: grid;
      align-content: start;
      gap: 0.18rem;
    }

    .skip-dialog__eyebrow {
      margin: 0;
      font-size: 0.66rem;
      font-weight: var(--font-weight-bold);
      line-height: 1;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: color-mix(in srgb, var(--color-primary-dark) 72%, var(--color-surface));
    }

    .skip-dialog__title {
      margin: 0;
      padding: 0;
      font-size: clamp(1.08rem, 1.2vw, 1.22rem);
      line-height: 1.04;
      letter-spacing: -0.01em;
      color: var(--color-text);
    }

    .skip-dialog__content {
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.3rem;
    }

    .skip-dialog__question {
      margin: 0;
      font-size: 1.02rem;
      font-weight: var(--font-weight-semibold);
      color: var(--color-primary-dark);
    }

    .skip-dialog__hint {
      margin: 0;
      color: color-mix(in srgb, var(--color-text) 78%, var(--color-surface));
      line-height: var(--line-height-base);
    }

    .skip-dialog__actions {
      margin: 0;
      padding: 0.9rem 0 0;
      gap: 0.75rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      border-top: 1px solid color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
    }

    .skip-dialog__button {
      min-height: 46px;
      border-radius: var(--radius-pill);
      font-weight: var(--font-weight-semibold);
      padding-inline: 1.1rem;
      box-sizing: border-box;
    }

    .skip-dialog__button--ghost {
      --mdc-outlined-button-outline-color: color-mix(in srgb, var(--color-primary) 35%, var(--color-surface));
      --mdc-outlined-button-label-text-color: var(--color-primary-dark);
      background: color-mix(in srgb, var(--color-primary) 4%, var(--color-surface));
    }

    .skip-dialog__button--primary {
      box-shadow: 0 10px 24px color-mix(in srgb, var(--color-primary) 24%, transparent);
    }

    @media (max-width: 560px) {
      .skip-dialog {
        gap: 0.8rem;
        padding: 1rem 1rem 0.95rem;
      }

      .skip-dialog__hero {
        grid-template-columns: 1fr;
        gap: 0.55rem;
        padding-bottom: 0.7rem;
      }

      .skip-dialog__actions {
        flex-direction: column;
        align-items: stretch;
      }

      .skip-dialog__button {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class StepSkipDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<StepSkipDialogComponent>) {}

  choose(result: StepSkipDialogResult): void {
    this.dialogRef.close(result);
  }
}


