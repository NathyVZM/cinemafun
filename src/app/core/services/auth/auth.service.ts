import { inject, Injectable } from '@angular/core'
import { User } from '@models/user.model'
import { first, map, of } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { UserService } from '../user/user.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userService = inject(UserService)

	login(user: User) {
		const id = uuid()
		return of(sessionStorage.setItem('user', JSON.stringify({ ...user, id })))
	}

	logout() {
		return of(sessionStorage.removeItem('user'))
	}

	isAuthenticated() {
		return this.userService.getUser().pipe(
			first(),
			map(user => Boolean(user))
		)
	}
}
