import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { TuiRootModule } from '@taiga-ui/core'

import { routes } from './app.routes'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { apiInterceptor } from './core/config/api.interceptor'

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
		importProvidersFrom(TuiRootModule),
		provideHttpClient(withInterceptors([apiInterceptor]))
	]
}
