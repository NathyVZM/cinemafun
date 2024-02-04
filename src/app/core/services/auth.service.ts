import { Injectable } from '@angular/core'
import { User } from '@models'
import { of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor() {}

	getUser(): User {
		return JSON.parse(sessionStorage.getItem('user')!)
	}

	setUser(user: User) {
		sessionStorage.setItem('user', JSON.stringify(user))
	}

	removeUser() {
		return of(sessionStorage.removeItem('user'))
	}
}

