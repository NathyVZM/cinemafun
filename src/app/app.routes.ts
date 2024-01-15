import { Routes } from '@angular/router'
import { authGuard, noAuthGuard } from '@guards'

export const routes: Routes = [
	{
		path: 'sign-up',
		loadComponent: () => import('./features/sign-up/sign-up.component').then(c => c.SignUpComponent),
		title: 'Sign up',
		canMatch: [noAuthGuard]
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('./features/main/main.routes').then(r => r.mainRoutes),
		canMatch: [authGuard]
	}
]

