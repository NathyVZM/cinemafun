import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'
import { ApiConfigurationService } from './api-configuration.service'

export const apiConfigurationResolver: ResolveFn<boolean> = (route, state) => {
	const apiConfigurationService = inject(ApiConfigurationService)
	return apiConfigurationService.getApiDetails()
}
