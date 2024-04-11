import { Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: 'sign-up',
		loadComponent: () => import('./features/sign-up/sign-up.component').then(c => c.SignUpComponent),
		title: 'Sign up'
	},
	{
		path: '',
		redirectTo: 'sign-up',
		pathMatch: 'full'
	}
]
