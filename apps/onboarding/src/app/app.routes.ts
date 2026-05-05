import { Routes } from '@angular/router';

import { stepAccessGuard } from './guards/step-access.guard';
import { KursstartComponent } from './pages/kursstart/kursstart.component';
import { OnboardingShellComponent } from './pages/onboarding-shell/onboarding-shell.component';
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { StepPageComponent } from './pages/step-page/step-page.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartseiteComponent
	},
	{
		path: 'kursstart',
		component: KursstartComponent
	},
	{
		path: 'onboarding',
		component: OnboardingShellComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'step/1'
			},
			{
				path: 'step/:id',
				component: StepPageComponent,
				canActivate: [stepAccessGuard]
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];
