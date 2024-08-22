import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { apiInterceptor } from './core/config/api.interceptor'

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
		provideHttpClient(withInterceptors([apiInterceptor])),
        NG_EVENT_PLUGINS
    ]
}
