import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterLink } from '@angular/router'
import { ButtonComponent } from '@components'
import { CoreService } from '@services/core.service'
import { TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiActionModule, TuiMarkerIconModule } from '@taiga-ui/kit'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [RouterLink, TuiActionModule, TuiMarkerIconModule, TuiSvgModule, CommonModule, TuiLoaderModule, ButtonComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.sass'
})
export class NavigationItemComponent {
	@Input({ required: true }) name = ''
	@Input({ required: true }) icon = ''
	@Input({ transform: booleanAttribute }) hasRouting = true
	@Input({ transform: booleanAttribute }) isLoading = false
	@Input() link = ''
	@Output() buttonClick = new EventEmitter()

	constructor(private coreService: CoreService) {
		this.coreService
			.getIsNavigationItemLoading()
			.pipe(takeUntilDestroyed())
			.subscribe(_isLoading => (this.isLoading = _isLoading))
	}

	onClick() {
		this.buttonClick.emit()
	}
}

