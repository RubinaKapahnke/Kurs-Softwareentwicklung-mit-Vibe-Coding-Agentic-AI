import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-footer',
  imports: [CommonModule],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {
  readonly footerLinks = [
    {
      label: 'Impressum',
      href: 'https://www.knoot-academy.de/impressum',
      target: '_blank'
    },
    {
      label: 'Datenschutz',
      href: 'https://www.knoot-academy.de/datenschutz',
      target: '_blank'
    },
    {
      label: 'AGB',
      href: 'https://www.knoot-academy.de/agb',
      target: '_blank'
    },
    {
      label: 'Kontakt',
      href: 'https://www.knoot-academy.de/kontakt',
      target: '_blank'
    }
  ];

  readonly currentYear = new Date().getFullYear();
}
