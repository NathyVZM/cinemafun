import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { AuthService } from '@services'

export const authGuard: CanMatchFn = (route, segments) => {
	const authService = inject(AuthService)
	const router = inject(Router)

	if (!authService.getUser()) {
		router.navigateByUrl('/sign-up')
		return false
	}

	return true
}

