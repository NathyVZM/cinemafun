import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'
import { ApiConfigurationService } from './api-configuration.service'

export const apiConfigurationResolver: ResolveFn<boolean | void> = (route, state) => {
	const apiConfigurationService = inject(ApiConfigurationService)

	if (apiConfigurationService.isApiConfigurationLoaded()) return
	return apiConfigurationService.getApiDetails()
}
