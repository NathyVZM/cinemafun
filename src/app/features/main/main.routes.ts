import { Routes } from '@angular/router'
import { MainComponent } from '@features'

export const mainRoutes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'home',
				loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
				title: 'Home'
			},
			{
				path: 'movies',
				loadComponent: () => import('./movies/movies.component').then(c => c.MoviesComponent),
				title: 'Movies'
			},
			{
				path: 'movie/:id',
				loadComponent: () => import('./movie-details/movie-details.component').then(c => c.MovieDetailsComponent),
				title: 'Movie details'
			}
		]
	}
]
