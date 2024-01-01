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
		path: 'home',
		loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent),
		title: 'Home',
		canMatch: [authGuard]
	},
	{
		path: 'movies',
		loadComponent: () => import('./features/movies/movies.component').then(c => c.MoviesComponent),
		title: 'Movies',
		canMatch: [authGuard]
	},
	{
		path: 'movie/:id',
		loadComponent: () => import('./features/movie-details/movie-details.component').then(c => c.MovieDetailsComponent),
		title: 'Movie details',
		canMatch: [authGuard]
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
]

