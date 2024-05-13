import { Routes } from '@angular/router'
import { MainComponent, HomeComponent, MoviesComponent, FavoritesComponent, FoodDrinksComponent } from '@features'
import { authGuard } from '@guards'
import { apiConfigurationResolver, movieResolver, userResolver } from '@services'

export const mainRoutes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: MainComponent,
		resolve: { user: userResolver, movies: movieResolver, apiConfiguration: apiConfigurationResolver },
		canMatch: [authGuard],
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
