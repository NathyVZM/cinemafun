import { booleanAttribute, Component, Input, input, output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TuiLoaderModule } from '@taiga-ui/core'
import { TuiActionModule } from '@taiga-ui/kit'
import { IconComponent } from '../icon/icon.component'
import { CoreService } from '@services/services.index'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, TuiActionModule, TuiLoaderModule, IconComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {
	@Input({ transform: booleanAttribute }) isLoading = false

	label = input.required<string>()
	icon = input('')
	route = input('')
	isButton = input(false, { transform: booleanAttribute })

	buttonClick = output()

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
