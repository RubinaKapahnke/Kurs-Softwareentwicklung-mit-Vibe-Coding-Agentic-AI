import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
