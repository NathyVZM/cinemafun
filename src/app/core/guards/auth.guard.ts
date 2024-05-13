import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { AuthService } from '@services'
import { tap } from 'rxjs'

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
