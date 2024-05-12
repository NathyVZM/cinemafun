import { inject, Injectable } from '@angular/core'
import { first, map, of } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { User } from '@models'
import { UserService } from '../user/user.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userService = inject(UserService)

	signUp(user: User) {
		const id = uuid()
		return of(sessionStorage.setItem('user', JSON.stringify({ ...user, id })))
	}

	signOut() {
		return of(sessionStorage.removeItem('user'))
	}

	isAuthenticated() {
		return this.userService.getUser().pipe(
			first(),
			map(user => Boolean(user))
		)
	}
}
