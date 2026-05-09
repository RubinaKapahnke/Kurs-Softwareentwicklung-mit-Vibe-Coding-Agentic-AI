import { Component, input, output } from '@angular/core';
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

  onVoucherInput(value: string): void {
    this.voucherInputChanged.emit(value);
  }
}
