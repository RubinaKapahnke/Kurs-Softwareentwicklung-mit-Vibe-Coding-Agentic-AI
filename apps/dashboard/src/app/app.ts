import { Component } from '@angular/core';
import { OverviewOptionAComponent } from '../../features/overview-option-a/overview-option-a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OverviewOptionAComponent],
  template: '<app-overview-option-a></app-overview-option-a>',
})
export class App {}
