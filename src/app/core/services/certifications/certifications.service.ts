import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'
import { BehaviorSubject, map, tap } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { Classification } from '@models'
import { CertificationSchema } from '@schemas'

@Injectable({
	providedIn: 'root'
})
export class CertificationsService {
	private apiUrl = environment.apiUrl
	private movieCertifications$ = new BehaviorSubject<Classification[]>([])

	constructor(private http: HttpClient) {}

	/**
	 * Retrieves the movie certifications from the API and stores them in a subject.
	 */
	loadMovieCertifications() {
		return this.http
			.get<{ certifications: { US: CertificationSchema[] } }>(`${this.apiUrl}/certification/movie/list`)
			.pipe(
				map(({ certifications }) => {
					const classifications: Classification[] = certifications.US.map(certification => {
						return {
							id: uuid(),
							classification: certification.certification,
							meaning: certification.meaning
						}
					})

					return classifications
				}),
				tap(classifications => this.movieCertifications$.next(classifications)),
				map(() => true)
			)
	}

	/**
	 * Retrieves the movie certifications as an observable.
	 * @returns An observable that emits the movie certifications.
	 */
	getMovieCertifications() {
		return this.movieCertifications$.asObservable()
	}

	areMovieCertificationsLoaded() {
		return this.movieCertifications$.value.length > 0
	}
}
