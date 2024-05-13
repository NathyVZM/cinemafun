import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { AuthService } from '@services'
import { map, tap } from 'rxjs'

export const noAuthGuard: CanMatchFn = (route, segments) => {
	const authService = inject(AuthService)
	const router = inject(Router)

	return authService.isAuthenticated().pipe(
		tap(isAuthenticated => {
			if (isAuthenticated) {
				router.navigate(['/home'])
			}
		}),
		map(isAuthenticated => !isAuthenticated)
	)
}
