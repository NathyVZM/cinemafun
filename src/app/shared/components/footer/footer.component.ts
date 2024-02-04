import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { CoreService } from '@services'

@Component({
	selector: 'cf-footer',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.sass'
})
export class FooterComponent {
	coreService = inject(CoreService)
	socialMedia = this.coreService.getSocialMedia()
	year = new Date().getFullYear()
}
