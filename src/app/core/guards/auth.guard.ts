import { inject } from '@angular/core'
import { CanMatchFn } from '@angular/router'
import { AuthService } from '@services'

export const authGuard: CanMatchFn = (route, segments) => {
	const authService = inject(AuthService)
	if (!authService.isAuthenticated()) {
		// Redirect to '/sign-up' route
		// You can use the router service to navigate to the '/sign-up' route
		// For example:
		// router.navigate(['/sign-up']);
	}

	return true
}
