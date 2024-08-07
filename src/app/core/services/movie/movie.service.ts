import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environment'
import { BehaviorSubject, catchError, concatMap, delay, EMPTY, forkJoin, map, Observable, of, tap } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { MovieSchema } from '@schemas'
import { CarouselItem, Classification, Movie } from '@models'
import { CertificationsService } from '@services'

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private apiUrl = environment.apiUrl
	private movies$ = new BehaviorSubject<Movie[]>([])

	constructor(
		private http: HttpClient,
		private certificationsService: CertificationsService
	) {}

	/**
	 * Movies
	 */

	/**
	 * Loads the list of movies from the API.
	 * @returns An Observable that emits an array of Movie objects.
	 */
	loadMovies(): Observable<Movie[]> {
		return this.http.get<{ results: MovieSchema[] }>(`${this.apiUrl}/movie/now_playing`).pipe(
			map(({ results }) => {
				const movies: Movie[] = results.map(movie => {
					return {
						id: movie.id,
						title: movie.title,
						poster: movie.poster_path,
						backdrop: movie.backdrop_path,
						classification: {} as Classification,
						genre: [],
						runtime: 0,
						banner: '',
						logo: ''
					}
				})

				return movies
			}),
			concatMap(movies => {
				const moviesDetails = movies.map(movie => {
					return this.http.get<MovieSchema>(`${this.apiUrl}/movie/${movie.id}?append_to_response=release_dates,images`).pipe(
						delay(200),
						map(m => {
							const releaseDates = m.release_dates.results
							const releaseDate = releaseDates.find(date => date.iso_3166_1 === 'US')

							const certification = releaseDate?.release_dates.find(date => {
								return date.certification && (date.type === 3 || date.type === 1)
							})

							return {
								...movie,
								genre: m.genres.flatMap(genre => genre.name),
								runtime: m.runtime,
								classification: {
									id: uuid(),
									classification: certification?.certification || 'NR',
									meaning: 'Not Rated'
								},
								banner:
									(
										m.images.backdrops.find(image => image.iso_639_1 === 'en') ||
										m.images.backdrops.find(image => !image.iso_639_1)
									)?.file_path || '',
								logo:
									(m.images.logos.find(image => image.iso_639_1 === 'en') || m.images.logos.find(image => !image.iso_639_1))
										?.file_path || ''
							}
						})
					)
				})
				return forkJoin(moviesDetails)
			}),
			concatMap(movies => {
				return this.certificationsService.getMovieCertifications().pipe(
					map(certifications => {
						return movies.map(movie => {
							const classification = certifications.find(
								certification => certification.classification === movie.classification.classification
							)
							return {
								...movie,
								classification: {
									...movie.classification,
									meaning: classification?.meaning || 'Not Rated'
								}
							}
						})
					})
				)
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
	 * Returns a list of movies for display on the home page.
	 * @returns {Observable<Movie[]>} An Observable that emits an array of `Movie` objects.
	 *
	 * The function randomly sorts the movies and selects the first five for display.
	 */
	getMoviesForHome() {
		return this.movies$.asObservable().pipe(map(movies => movies.sort(() => Math.random() - 0.5).slice(0, 5)))
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
	 * Generates a carousel of movies for display.
	 * @returns {Observable<CarouselItem[]>} An Observable that emits an array of `CarouselItem` objects.
	 *
	 * The function randomly sorts the movies and selects the first five for the carousel.
	 */
	getMoviesCarousel(isSignUp: boolean = false) {
		const movies = this.movies$.value
		const posters: CarouselItem[] = movies.flatMap(movie => {
			return {
				id: uuid(),
				image: isSignUp ? movie.backdrop : movie.banner,
				alt: movie.title,
				hint: `🎬 Movie: ${movie.title}`,
				movie: {
					title: movie.title,
					poster: movie.poster,
					genre: movie.genre
				}
			}
		})

		return of(posters.sort(() => Math.random() - 0.5).slice(0, 5))
	}
}
