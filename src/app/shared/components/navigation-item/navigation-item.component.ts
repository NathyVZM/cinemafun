import { booleanAttribute, Component, input, output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TuiLoaderModule } from '@taiga-ui/core'
import { TuiActionModule } from '@taiga-ui/kit'
import { IconComponent } from '@components'

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
	isLoading = input(false, { transform: booleanAttribute })

	buttonClick = output()

	onClick() {
		this.buttonClick.emit()
	}
}
