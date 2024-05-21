import { ResolveFn } from '@angular/router'
import { CertificationsService } from './certifications.service'
import { inject } from '@angular/core'

export const certificationsResolver: ResolveFn<boolean | void> = (route, state) => {
	const certificationsService = inject(CertificationsService)

	if (certificationsService.areMovieCertificationsLoaded()) return
	return certificationsService.loadMovieCertifications()
}
