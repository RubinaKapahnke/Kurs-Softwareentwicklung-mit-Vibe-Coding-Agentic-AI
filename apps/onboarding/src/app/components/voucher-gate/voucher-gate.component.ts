import { Component, effect, input, output } from '@angular/core';
import confetti from 'canvas-confetti';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HasVoucherAnswer, ParticipationStatus } from '../../services/onboarding-state.service';
import { ChoiceCardComponent } from '../choice-card/choice-card.component';

@Component({
  selector: 'app-voucher-gate',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ChoiceCardComponent],
  templateUrl: './voucher-gate.component.html',
  styleUrl: './voucher-gate.component.scss'
})
export class VoucherGateComponent {
  readonly voucherValidated = input.required<boolean>();
  readonly participationStatus = input.required<ParticipationStatus>();
  readonly hasVoucherAnswer = input.required<HasVoucherAnswer>();
  readonly showVoucherInput = input.required<boolean>();
  readonly showContactInfo = input.required<boolean>();
  readonly voucherInput = input.required<string>();
  readonly voucherError = input.required<boolean>();
  readonly voucherCopied = input.required<boolean>();

  readonly participationStatusSelected = output<ParticipationStatus>();
  readonly hasVoucherSelected = output<boolean>();
  readonly voucherInputChanged = output<string>();
  readonly voucherSubmitted = output<void>();
  readonly contactMessageCopied = output<void>();

  private hasPlayedConfetti = false;

  constructor() {
    // Fire once when the voucher success state appears.
    effect(() => {
      const isValidated = this.voucherValidated();

      if (isValidated && !this.hasPlayedConfetti) {
        this.hasPlayedConfetti = true;
        setTimeout(() => this.launchConfetti(), 0);
        return;
      }

      if (!isValidated) {
        this.hasPlayedConfetti = false;
      }
    });
  }

  onVoucherInput(value: string): void {
    this.voucherInputChanged.emit(value);
  }

  private launchConfetti(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const colors = ['#FBBE02', '#346995', '#264D75', '#2E7D32', '#FFFFFF'];

    confetti({
      particleCount: 90,
      spread: 58,
      angle: 90,
      startVelocity: 72,
      gravity: 1,
      scalar: 1.05,
      ticks: 220,
      origin: { x: 0.3, y: 1.15 },
      colors
    });

    confetti({
      particleCount: 90,
      spread: 58,
      angle: 90,
      startVelocity: 72,
      gravity: 1,
      scalar: 1.05,
      ticks: 220,
      origin: { x: 0.7, y: 1.15 },
      colors
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 88,
        angle: 90,
        startVelocity: 64,
        gravity: 1,
        scalar: 0.95,
        ticks: 200,
        origin: { x: 0.5, y: 1.1 },
        colors
      });
    }, 140);
  }
}
