import { Routes } from '@angular/router'
import { movieResolver, apiConfigurationResolver, certificationsResolver } from '@services'
import { authGuard, noAuthGuard } from '@guards'

export const routes: Routes = [
	{
		path: 'sign-up',
		loadComponent: () => import('./features/sign-up/sign-up.component').then(c => c.SignUpComponent),
		title: 'Sign up',
		resolve: {
			certifications: certificationsResolver,
			apiConfiguration: apiConfigurationResolver,
			movies: movieResolver
		},
		canMatch: [noAuthGuard]
	},
	{
		path: '',
		redirectTo: 'sign-up',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('./features/main/main.routes').then(m => m.mainRoutes),
		canMatch: [authGuard]
	}
]
