import { Injectable } from '@angular/core'
import { CAROUSEL, NAVIGATION, SOCIAL_MEDIA } from '@data'
import { of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class CoreService {
	constructor() {}

	getSocialMedia() {
		return of(SOCIAL_MEDIA)
	}

	getNavigation() {
		return of(NAVIGATION)
	}

	getCarousel() {
		return of(CAROUSEL)
	}
}
