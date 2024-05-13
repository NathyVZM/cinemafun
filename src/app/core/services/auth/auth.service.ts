import { inject, Injectable } from '@angular/core'
import { of } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { User } from '@models'
import { UserService } from '../user/user.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userService = inject(UserService)

	/**
	 * Signs up a new user.
	 *
	 * @param user - The user object containing the user details.
	 * @returns {Observable<void>} An Observable that emits the result of the sign up operation.
	 */
	signUp(user: User) {
		const newUser: User = { ...user, id: uuid() }
		sessionStorage.setItem('user', JSON.stringify(newUser))
		return of(this.userService.setUser(newUser))
	}

	/**
	 * Signs out the user by removing the user session from the session storage.
	 * @returns {Observable<void>} An Observable that completes after removing the user session.
	 */
	signOut() {
		sessionStorage.removeItem('user')
		return of(this.userService.setUser(null))
	}

	/**
	 * Checks if the user is authenticated.
	 *
	 * This function checks if there is a 'user' item in the session storage.
	 * If the 'user' item exists, it means the user is authenticated.
	 *
	 * @returns {Observable<boolean>} An Observable that emits `true` if the user is authenticated, `false` otherwise.
	 */
	isAuthenticated() {
		return of(sessionStorage.getItem('user') !== null)
	}
}
