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

	/**
	 * Retrieves the social media data.
	 * @returns {Observable<SocialMedia[]>} An observable that emits the social media data.
	 */
	getSocialMedia() {
		return of(SOCIAL_MEDIA)
	}

	/**
	 * Retrieves the navigation data.
	 * @returns {Observable<NavigationItem[]>} An observable that emits the navigation data.
	 */
	getNavigation() {
		return of(NAVIGATION)
	}

	/**
	 * Button
	 */

	/**
	 * Returns an observable that emits the current state of the button loading flag.
	 * @returns {Observable<boolean>} An observable that emits the current state of the button loading flag.
	 */
	getIsButtonLoading() {
		return this.isButtonLoading$.asObservable()
	}

	/**
	 * Sets the loading state of a button.
	 * @param isLoading - A boolean value indicating whether the button is loading or not.
	 */
	setIsButtonLoading(isLoading: boolean) {
		this.isButtonLoading$.next(isLoading)
	}

	/**
	 * Returns an observable that emits the current state of the button disabled flag.
	 * @returns {Observable<boolean>} An observable that emits the current state of the button disabled flag.
	 */
	getIsButtonDisabled() {
		return this.isButtonDisabled$.asObservable()
	}

	/**
	 * Sets the disabled state of a button.
	 * @param isDisabled - A boolean value indicating whether the button is disabled or not.
	 */
	setIsButtonDisabled(isDisabled: boolean) {
		this.isButtonDisabled$.next(isDisabled)
	}

	/**
	 * Form field
	 */

	/**
	 * Returns an observable that emits the current state of the form field disabled flag.
	 * @returns {Observable<boolean>} An observable that emits the current state of the form field disabled flag.
	 */
	getIsFormFieldDisabled() {
		return this.isFormFieldDisabled$.asObservable()
	}

	/**
	 * Sets the disabled state of a form field.
	 * @param isDisabled - A boolean value indicating whether the form field is disabled or not.
	 */
	setIsFormFieldDisabled(isDisabled: boolean) {
		this.isFormFieldDisabled$.next(isDisabled)
	}

	/**
	 * Navigation item
	 */

	/**
	 * Returns an observable that emits the current state of the navigation item loading.
	 * @returns {Observable<boolean>} An observable that emits the current state of the navigation item loading.
	 */
	getIsNavigationItemLoading() {
		return this.isNavigationItemLoading$.asObservable()
	}

	/**
	 * Sets the loading state of a navigation item.
	 * @param isLoading - A boolean value indicating whether the navigation item is loading or not.
	 */
	setIsNavigationItemLoading(isLoading: boolean) {
		this.isNavigationItemLoading$.next(isLoading)
	}
}
