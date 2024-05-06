import { Routes } from '@angular/router'
import { MainComponent, HomeComponent, MoviesComponent, FavoritesComponent, FoodDrinksComponent } from '@features'

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
				component: HomeComponent
			},
			{
				path: 'movies',
				component: MoviesComponent
			},
			{
				path: 'favorites',
				component: FavoritesComponent
			},
			{
				path: 'food-drinks',
				component: FoodDrinksComponent
			}
		]
	}
]
