import { Injectable } from '@angular/core'
import { NAVIGATION, SOCIAL_MEDIA } from '@data'
import { BehaviorSubject, of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class CoreService {
	private isButtonDisabled = new BehaviorSubject<boolean>(false)
	private isButtonLoading = new BehaviorSubject<boolean>(false)
	private isFormFieldDisabled = new BehaviorSubject<boolean>(false)
	private isNavigationItemLoading = new BehaviorSubject<boolean>(false)

	constructor() {}

	// Button
	setButtonDisabled(isDisabled: boolean) {
		this.isButtonDisabled.next(isDisabled)
	}

	getIsButtonDisabled() {
		return this.isButtonDisabled.asObservable()
	}

	setButtonLoading(isLoading: boolean) {
		this.isButtonLoading.next(isLoading)
	}

	getIsButtonLoading() {
		return this.isButtonLoading.asObservable()
	}

	// Form field
	setFormFieldDisabled(isDisabled: boolean) {
		this.isFormFieldDisabled.next(isDisabled)
	}

	getIsFormFieldDisabled() {
		return this.isFormFieldDisabled.asObservable()
	}

	// Navigation
	getNavigation() {
		return of(NAVIGATION)
	}

	getSocialMedia() {
		return of(SOCIAL_MEDIA)
	}

	// Navigation Item
	setNagivationItemLoading(isLoading: boolean) {
		this.isNavigationItemLoading.next(isLoading)
	}

	getIsNavigationItemLoading() {
		return this.isNavigationItemLoading.asObservable()
	}
}

