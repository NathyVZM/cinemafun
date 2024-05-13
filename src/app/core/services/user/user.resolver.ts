import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'
import { UserService } from '@services'

export const userResolver: ResolveFn<void> = (route, state) => {
	const userService = inject(UserService)
	return userService.loadUser()
}
