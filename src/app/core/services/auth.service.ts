import { Injectable } from '@angular/core'
import { User } from '@models'

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
		sessionStorage.removeItem('user')
	}
}

