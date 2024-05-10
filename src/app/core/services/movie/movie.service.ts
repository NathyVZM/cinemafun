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
	private isCarouselLoading$ = new BehaviorSubject<boolean>(true)

	constructor(private http: HttpClient) {}

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
				this.setIsCarouselLoading(false)
				return EMPTY
			})
		)
	}

	getMovies() {
		return this.movies$.asObservable()
	}

	getMoviesCarousel() {
		const movies = this.movies$.value
		const posters: CarouselItem[] = movies.flatMap(movie => {
			return {
				id: uuid(),
				image: movie.banner || movie.poster,
				alt: movie.title,
				hint: movie.title
			}
		})

		this.setIsCarouselLoading(false)
		return of(posters.sort(() => Math.random() - 0.5).slice(0, 5))
	}

	setIsCarouselLoading(isLoading: boolean) {
		this.isCarouselLoading$.next(isLoading)
	}

	getIsCarouselLoading() {
		return this.isCarouselLoading$.asObservable()
	}
}
