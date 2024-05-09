import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { IconComponent, LogoComponent } from '@components'
import { CoreService } from '@services'

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
