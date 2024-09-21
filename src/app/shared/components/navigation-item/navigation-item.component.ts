import { booleanAttribute, Component, input, model, output } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TuiLoader } from '@taiga-ui/core'
import { CoreService } from '@services'
import { IconComponent } from '../icon/icon.component'
import { ButtonComponent } from '../button/button.component'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, TuiLoader, IconComponent, ButtonComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {
	label = input.required<string>()
	icon = input('')
	route = input('')
	isButton = input(false, { transform: booleanAttribute })
	isLoading = model(false)

	navigationItemClick = output()

	constructor(private coreService: CoreService) {
		this.coreService
			.getIsNavigationItemLoading()
			.pipe(takeUntilDestroyed())
			.subscribe(_isLoading => this.isLoading.set(_isLoading))
	}

	onNavigationItemClick() {
		this.navigationItemClick.emit()
	}
}
