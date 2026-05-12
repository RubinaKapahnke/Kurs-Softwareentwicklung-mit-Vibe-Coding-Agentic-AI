import { Routes } from '@angular/router';

import { stepAccessGuard } from './guards/step-access.guard';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./pages/startseite/startseite.component').then((m) => m.StartseiteComponent)
	},
	{
		path: 'kursstart',
		pathMatch: 'full',
		redirectTo: 'kurse/vibe-coding-agentic-ai'
	},
	{
		path: 'kurse/:courseId',
		loadComponent: () => import('./pages/kursstart/kursstart.component').then((m) => m.KursstartComponent)
	},
	{
		path: 'kurse/:courseId/onboarding',
		loadComponent: () => import('./pages/onboarding-shell/onboarding-shell.component').then((m) => m.OnboardingShellComponent),
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'step/1'
			},
			{
				path: 'step/:id',
				loadComponent: () => import('./pages/step-page/step-page.component').then((m) => m.StepPageComponent),
				canActivate: [stepAccessGuard]
			},
			{
				path: 'zusammenfassung',
				loadComponent: () => import('./pages/zusammenfassung/zusammenfassung.component').then((m) => m.ZusammenfassungComponent)
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
