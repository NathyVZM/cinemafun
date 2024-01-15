import { Component } from '@angular/core'
import { NavigationItemComponent } from '@components/components.index'
import { Navigation } from '@models/navigation.model'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [NavigationItemComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
	navigation: Navigation[] = [
		{ name: 'Home', icon: '', link: '/' },
		{ name: 'Movies', icon: '', link: '/movies' },
		{ name: 'Favorites', icon: '', link: '/favorites' },
		{ name: 'Foods and drinks', icon: '', link: '/food-drinks' }
	]
}

