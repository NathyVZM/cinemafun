import { Routes } from '@angular/router'
import { movieResolver, apiConfigurationResolver } from '@services/services.index'

export const routes: Routes = [
	{
		path: 'sign-up',
		loadComponent: () => import('./features/sign-up/sign-up.component').then(c => c.SignUpComponent),
		title: 'Sign up',
		resolve: { movies: movieResolver, apiConfiguration: apiConfigurationResolver }
	},
	{
		path: '',
		redirectTo: 'sign-up',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('./features/main/main.routes').then(m => m.mainRoutes)
	}
]
