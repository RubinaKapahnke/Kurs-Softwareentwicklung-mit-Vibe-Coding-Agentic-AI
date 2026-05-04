import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export type StepSkipDialogResult = 'mark-done' | 'skip';

@Component({
  selector: 'app-step-skip-dialog',
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>Schritt noch nicht abgehakt</h2>
    <mat-dialog-content>
      <p>Hast du diesen Schritt erledigt?</p>
      <p class="hint">Du kannst jederzeit zurückkommen und ihn später als erledigt markieren.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="choose('skip')">
        <mat-icon>schedule</mat-icon>
        Später erledigen
      </button>
      <button mat-raised-button color="primary" type="button" (click)="choose('mark-done')">
        <mat-icon>check_circle</mat-icon>
        Als erledigt markieren
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    h2 { margin-bottom: 0; }
    p { margin: 0.5rem 0 0; }
    .hint { font-size: 0.88rem; opacity: 0.7; }
    mat-dialog-actions { gap: 0.5rem; padding-bottom: 1rem; }
  `]
})
export class StepSkipDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<StepSkipDialogComponent>) {}

  choose(result: StepSkipDialogResult): void {
    this.dialogRef.close(result);
  }
}
