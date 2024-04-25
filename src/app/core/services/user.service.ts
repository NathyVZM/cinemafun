import { Injectable } from '@angular/core'
import { User } from '@models/user.model'
import { Observable, of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor() {}

	getUser(): Observable<User> {
		return of(JSON.parse(sessionStorage.getItem('user')!))
	}

	updateUser(user: User) {
		return of(sessionStorage.setItem('user', JSON.stringify(user)))
	}
}
