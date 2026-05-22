import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./pages/courses-page.component').then((m) => m.CoursesPageComponent)
	},
	{
		path: 'kurse/:courseId/module/:moduleId',
		loadComponent: () => import('./pages/module-page.component').then((m) => m.ModulePageComponent)
	},
	{
		path: 'kurse/:courseId/module/:moduleId/step/:stepId',
		loadComponent: () => import('./pages/step-page.component').then((m) => m.StepPageComponent)
	},
	{
		path: 'fehler',
		loadComponent: () => import('./pages/error-page.component').then((m) => m.ErrorPageComponent)
	},
	{
		path: '**',
		redirectTo: 'fehler'
	}
];
