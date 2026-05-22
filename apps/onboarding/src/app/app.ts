import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { buildLearningPlatformRedirectUrl, isLegacyRedirectEnabled } from './services/legacy-learning-platform-redirect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    if (typeof window === 'undefined' || !isLegacyRedirectEnabled()) {
      return;
    }

    const pathname = window.location.pathname;
    const target = buildLearningPlatformRedirectUrl(pathname);
    window.location.assign(target);
  }
}
