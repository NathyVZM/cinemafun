import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { tap } from 'rxjs'
import { AuthService } from '@services'

export const authGuard: CanMatchFn = (route, segments) => {
	const authService = inject(AuthService)
	const router = inject(Router)

	return authService.isAuthenticated().pipe(
		tap(isAuthenticated => {
			if (!isAuthenticated) {
				router.navigate(['/sign-up'])
			}
		})
	)
}
