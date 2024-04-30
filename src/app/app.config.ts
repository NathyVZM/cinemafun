import { provideAnimations } from '@angular/platform-browser/animations'
import { TuiRootModule } from '@taiga-ui/core'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
		importProvidersFrom(TuiRootModule)
	]
}
