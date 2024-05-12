import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'
import { Movie } from '@models'
import { MovieService } from './movie.service'

export const movieResolver: ResolveFn<Movie[]> = (route, state) => {
	const movieService = inject(MovieService)
	return movieService.loadMovies()
}
