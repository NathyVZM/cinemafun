import { NavigationItem } from '@models'
import { v4 as uuid } from 'uuid'

export const NAVIGATION: NavigationItem[] = [
	{ id: uuid(), label: 'Home', icon: 'house', route: '/home' },
	{ id: uuid(), label: 'Movies', icon: 'film-reel', route: '/movies' },
	{ id: uuid(), label: 'Favorites', icon: 'heart', route: '/favorites' },
	{ id: uuid(), label: 'Food and Drinks', icon: 'popcorn', route: '/food-drinks' }
]
