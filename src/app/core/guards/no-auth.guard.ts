import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { AuthService } from '@services'

export const noAuthGuard: CanMatchFn = (route, segments) => {
	const authService = inject(AuthService)
	const router = inject(Router)

	if (authService.hasUser()) {
		router.navigateByUrl('/home')
		return false
	}

	return true
}

