import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'
import { MovieService } from './movie.service'
import { Movie } from '@models'

export const movieResolver: ResolveFn<Movie[]> = (route, state) => {
	const movieService = inject(MovieService)
	return movieService.loadMovies()
}
