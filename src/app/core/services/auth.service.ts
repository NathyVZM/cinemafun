import { Injectable } from '@angular/core'
import { User } from '@models'
import { Observable, first, of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor() {}

	getUser(): Observable<User> {
		return of(JSON.parse(sessionStorage.getItem('user')!))
	}

	setUser(user: User) {
		return of(sessionStorage.setItem('user', JSON.stringify(user)))
	}

	removeUser() {
		return of(sessionStorage.removeItem('user'))
	}

	hasUser() {
		let userExist = false

		this.getUser()
			.pipe(first())
			.subscribe(user => (userExist = Boolean(user)))

		return userExist
	}
}

