import { booleanAttribute, Component, input, model, output } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TuiLoaderModule } from '@taiga-ui/core'
import { TuiActionModule } from '@taiga-ui/kit'
import { CoreService } from '@services'
import { IconComponent } from '../icon/icon.component'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, TuiActionModule, TuiLoaderModule, IconComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {
	label = input.required<string>()
	icon = input('')
	route = input('')
	isButton = input(false, { transform: booleanAttribute })
	isLoading = model(false)

	buttonClick = output()

	constructor(private coreService: CoreService) {
		this.coreService
			.getIsNavigationItemLoading()
			.pipe(takeUntilDestroyed())
			.subscribe(_isLoading => this.isLoading.set(_isLoading))
	}

	onButtonClick() {
		this.buttonClick.emit()
	}
}
