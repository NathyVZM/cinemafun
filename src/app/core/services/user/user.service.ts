import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { User } from '@models'

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private user$ = new BehaviorSubject<User | null>(null)

	/**
	 * Retrieves the current user as an Observable.
	 * @returns An Observable that emits the current user or null.
	 */
	getUser(): Observable<User | null> {
		return this.user$.asObservable()
	}

	/**
	 * Sets the user for the service.
	 * @param user - The user object to set. Pass `null` to clear the user.
	 */
	setUser(user: User | null) {
		this.user$.next(user)
	}

	/**
	 * Updates the user in the session storage and the service.
	 * @param user The user object with the new information.
	 * @returns An Observable that emits a void value.
	 */
	updateUser(user: User) {
		sessionStorage.setItem('user', JSON.stringify(user))
		return of(this.user$.next(user))
	}

	/**
	 * Loads the user from the session storage.
	 * @returns An Observable that emits the loaded user.
	 */
	loadUser() {
		const user = JSON.parse(sessionStorage.getItem('user') || 'null')
		return of(this.user$.next(user))
	}
}
