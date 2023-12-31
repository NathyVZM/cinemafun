import { Routes } from '@angular/router'

export const routes: Routes = [
	{ path: 'sign-up', loadComponent: () => import('./features/sign-up/sign-up.component').then(c => c.SignUpComponent) },
	{ path: 'home', loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent) },
	{ path: 'movies', loadComponent: () => import('./features/movies/movies.component').then(c => c.MoviesComponent) },
	{ path: 'movie/:id', loadComponent: () => import('./features/movie-details/movie-details.component').then(c => c.MovieDetailsComponent) },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
]

