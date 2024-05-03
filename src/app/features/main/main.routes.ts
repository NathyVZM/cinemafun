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
				component: HomeComponent
			}
		]
	}
]
