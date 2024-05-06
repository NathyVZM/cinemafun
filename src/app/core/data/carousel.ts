import { CarouselItem } from '@models'
import { v4 as uuid } from 'uuid'

export const CAROUSEL: CarouselItem[] = [
	{
		id: uuid(),
		image: 'assets/descargar.jpeg',
		alt: 'Carousel item 1'
	},
	{
		id: uuid(),
		image: 'assets/Pretty-in-Pink.jpg',
		alt: 'Carousel item 2'
	}
]
