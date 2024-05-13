import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environment'
import { BehaviorSubject, catchError, EMPTY, map, Observable, of, tap } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { MovieSchema } from '@schemas'
import { CarouselItem, Movie } from '@models'

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private apiUrl = environment.apiUrl
	private movies$ = new BehaviorSubject<Movie[]>([])

	constructor(private http: HttpClient) {}

	/**
	 * Movies
	 */

	/**
	 * Fetches the list of movies currently playing in theaters.
	 * @returns {Observable<Movie[]>} An Observable that emits an array of `Movie` objects.
	 */
	loadMovies(): Observable<Movie[]> {
		return this.http.get<{ results: MovieSchema[] }>(`${this.apiUrl}/movie/now_playing`).pipe(
			map(({ results }) => {
				const movies: Movie[] = results.map(movie => {
					return {
						id: movie.id,
						title: movie.title,
						poster: movie.poster_path,
						banner: movie.backdrop_path,
						classification: {
							id: uuid(),
							classification: 'G',
							meaning: 'General Audiences'
						},
						genre: [],
						runtime: 120
					}
				})

				return movies
			}),
			tap(movies => this.movies$.next(movies)),
			catchError(() => {
				return EMPTY
			})
		)
	}

	/**
	 * Returns the list of movies currently playing in theaters.
	 * @returns {Observable<Movie[]>} An Observable that emits an array of `Movie` objects.
	 */
	getMovies() {
		return this.movies$.asObservable()
	}

	/**
	 * Checks if the movies are already loaded.
	 * @returns {boolean} A boolean value indicating whether the movies are loaded.
	 */
	areMoviesLoaded() {
		return this.movies$.value.length > 0
	}

	/**
	 * Carousel
	 */

	/**
	 * It generates a carousel of movies for display.
	 * @returns {Observable<CarouselItem[]>} An Observable that emits an array of `CarouselItem` objects.
	 *
	 * The function randomly sorts the movies and selects the first five for the carousel.
	 */
	getMoviesCarousel() {
		const movies = this.movies$.value
		const posters: CarouselItem[] = movies.flatMap(movie => {
			return {
				id: uuid(),
				image: movie.banner || movie.poster,
				alt: movie.title,
				hint: `🎬 Movie: ${movie.title}`
			}
		})

		return of(posters.sort(() => Math.random() - 0.5).slice(0, 5))
	}
}
