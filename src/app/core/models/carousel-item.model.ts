export interface CarouselItem {
	readonly id: string
	image: string
	alt: string
	hint?: string
	movie: { title: string; poster: string; genre: string[] }
}
