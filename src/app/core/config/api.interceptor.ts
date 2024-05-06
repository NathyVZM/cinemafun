import { HttpInterceptorFn } from '@angular/common/http'
import { environment } from 'environments/environment'

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	const apiToken = environment.apiToken

	const authReq = req.clone({
		headers: req.headers.set('Authorization', `Bearer ${apiToken}`)
	})

	return next(authReq)
}
