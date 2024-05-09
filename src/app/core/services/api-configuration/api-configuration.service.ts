import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigurationSchema } from '@schemas/configuration.schema'
import { environment } from 'environments/environment'
import { BehaviorSubject, map, tap } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ApiConfigurationService {
	private apiUrl = environment.apiUrl

	private imagesPath$ = new BehaviorSubject<string>('')
	private posterSizes$ = new BehaviorSubject<string[]>([])
	private backdropSizes$ = new BehaviorSubject<string[]>([])

	constructor(private http: HttpClient) {}

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

	getImagesPath() {
		return this.imagesPath$.asObservable()
	}

	getPosterSizes() {
		return this.posterSizes$.asObservable()
	}

	getBackdropSizes() {
		return this.backdropSizes$.asObservable()
	}
}
