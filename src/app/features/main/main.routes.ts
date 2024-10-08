import { Routes } from '@angular/router'
import { MainComponent, HomeComponent, MoviesComponent, FavoritesComponent, FoodDrinksComponent } from '@features'
import { apiConfigurationResolver, certificationsResolver, movieResolver, userResolver } from '@services'

export const mainRoutes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: MainComponent,
		resolve: {
			user: userResolver,
			apiConfiguration: apiConfigurationResolver,
			certificatons: certificationsResolver,
			movies: movieResolver
		},
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
