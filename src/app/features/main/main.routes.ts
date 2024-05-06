import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { MainComponent } from './main.component'

export const mainRoutes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'home',
				loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
			},
			{
				path: 'movies',
				loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent)
			},
			{
				path: 'favorites',
				loadComponent: () => import('./favorites/favorites.component').then(m => m.FavoritesComponent)
			},
			{
				path: 'food-drinks',
				loadComponent: () => import('./food-drinks/food-drinks.component').then(m => m.FoodDrinksComponent)
			}
		]
	}
]
