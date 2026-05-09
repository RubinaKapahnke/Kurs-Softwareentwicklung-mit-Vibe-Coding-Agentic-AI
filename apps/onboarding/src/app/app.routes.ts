import { Routes } from '@angular/router';

import { stepAccessGuard } from './guards/step-access.guard';
import { KursstartComponent } from './pages/kursstart/kursstart.component';
import { OnboardingShellComponent } from './pages/onboarding-shell/onboarding-shell.component';
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { StepPageComponent } from './pages/step-page/step-page.component';
import { ZusammenfassungComponent } from './pages/zusammenfassung/zusammenfassung.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartseiteComponent
	},
	{
		path: 'kursstart',
		pathMatch: 'full',
		redirectTo: 'kurse/vibe-coding-agentic-ai'
	},
	{
		path: 'kurse/:courseId',
		component: KursstartComponent
	},
	{
		path: 'kurse/:courseId/onboarding',
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
			},
			{
				path: 'zusammenfassung',
				component: ZusammenfassungComponent
			}
		]
	},
	{
		path: 'onboarding',
		pathMatch: 'full',
		redirectTo: 'kurse/vibe-coding-agentic-ai/onboarding'
	},
	{
		path: 'onboarding/step/:id',
		redirectTo: 'kurse/vibe-coding-agentic-ai/onboarding/step/:id'
	},
	{
		path: 'onboarding/zusammenfassung',
		redirectTo: 'kurse/vibe-coding-agentic-ai/onboarding/zusammenfassung'
	},
	{
		path: '**',
		redirectTo: ''
	}
];
