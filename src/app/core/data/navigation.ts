import { Navigation } from '@models'
import { v4 as uuid } from 'uuid'

export const NAVIGATION: Navigation[] = [
	{ id: uuid(), label: 'Home', icon: 'house', link: '/home' },
	{ id: uuid(), label: 'Movies', icon: 'film-reel', link: '/movies' },
	{ id: uuid(), label: 'Favorites', icon: 'heart', link: '/favorites' },
	{ id: uuid(), label: 'Food and Drinks', icon: 'popcorn', link: '/food-drinks' }
]
