import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'
import { BehaviorSubject, map, tap } from 'rxjs'
import { ConfigurationSchema } from '@schemas'

@Injectable({
	providedIn: 'root'
})
export class ApiConfigurationService {
	private apiUrl = environment.apiUrl

	private imagesPath$ = new BehaviorSubject<string>('')
	private posterSizes$ = new BehaviorSubject<string[]>([])
	private backdropSizes$ = new BehaviorSubject<string[]>([])

	constructor(private http: HttpClient) {}

	/**
	 * Fetches the API configuration details.
	 * @returns {Observable<boolean>} An Observable that emits a boolean value.
	 */
	getApiDetails() {
		return this.http.get<ConfigurationSchema>(`${this.apiUrl}/configuration`).pipe(
			map(result => result.images),
			tap(configuration => {
				this.imagesPath$.next(configuration.secure_base_url)
				this.posterSizes$.next(configuration.poster_sizes)
				this.backdropSizes$.next(configuration.backdrop_sizes)
			}),
			map(() => true)
		)
	}

	/**
	 * Returns the base URL for images.
	 * @returns {Observable<string>} An Observable that emits a string value.
	 */
	getImagesPath() {
		return this.imagesPath$.asObservable()
	}

	/**
	 * Returns the list of poster sizes.
	 * @returns {Observable<string[]>} An Observable that emits an array of strings.
	 */
	getPosterSizes() {
		return this.posterSizes$.asObservable()
	}

	/**
	 * Returns the list of backdrop sizes.
	 * @returns {Observable<string[]>} An Observable that emits an array of strings.
	 */
	getBackdropSizes() {
		return this.backdropSizes$.asObservable()
	}

	/**
	 * Determines if the API configuration has been loaded.
	 * @returns {boolean} Returns `true` if the API configuration has been loaded, `false` otherwise.
	 */
	isApiConfigurationLoaded() {
		return this.imagesPath$.value !== '' && this.posterSizes$.value.length > 0 && this.backdropSizes$.value.length > 0
	}
}
