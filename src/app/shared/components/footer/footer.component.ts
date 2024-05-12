import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { CoreService } from '@services'
import { IconComponent } from '../icon/icon.component'
import { LogoComponent } from '../logo/logo.component'

@Component({
	selector: 'cf-footer',
	standalone: true,
	imports: [AsyncPipe, LogoComponent, IconComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	coreService = inject(CoreService)
	socialMedia = this.coreService.getSocialMedia()
	currentYear = new Date().getFullYear()
}
