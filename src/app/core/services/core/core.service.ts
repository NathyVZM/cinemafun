import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { NAVIGATION, SOCIAL_MEDIA } from '@data'

@Injectable({
	providedIn: 'root'
})
export class CoreService {
	private isButtonLoading$ = new BehaviorSubject<boolean>(false)
	private isButtonDisabled$ = new BehaviorSubject<boolean>(false)
	private isFormFieldDisabled$ = new BehaviorSubject<boolean>(false)
	private isNavigationItemLoading$ = new BehaviorSubject<boolean>(false)

	/**
	 * Navigation
	 */

	getSocialMedia() {
		return of(SOCIAL_MEDIA)
	}

	getNavigation() {
		return of(NAVIGATION)
	}

	/**
	 * Button
	 */

	getIsButtonLoading() {
		return this.isButtonLoading$.asObservable()
	}

	setIsButtonLoading(isLoading: boolean) {
		this.isButtonLoading$.next(isLoading)
	}

	getIsButtonDisabled() {
		return this.isButtonDisabled$.asObservable()
	}

	setIsButtonDisabled(isDisabled: boolean) {
		this.isButtonDisabled$.next(isDisabled)
	}

	/**
	 * Form field
	 */

	getIsFormFieldDisabled() {
		return this.isFormFieldDisabled$.asObservable()
	}

	setIsFormFieldDisabled(isDisabled: boolean) {
		this.isFormFieldDisabled$.next(isDisabled)
	}

	/**
	 * Navigation item
	 */

	getIsNavigationItemLoading() {
		return this.isNavigationItemLoading$.asObservable()
	}

	setIsNavigationItemLoading(isLoading: boolean) {
		this.isNavigationItemLoading$.next(isLoading)
	}
}
