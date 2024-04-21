import { Injectable } from '@angular/core'
import { SOCIAL_MEDIA } from '@data'
import { of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class CoreService {
	constructor() {}

	getNavigation() {
		return of(SOCIAL_MEDIA)
	}
}
