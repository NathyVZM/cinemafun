import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { User } from '@models'

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
