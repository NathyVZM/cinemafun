import { booleanAttribute, Component, Input, output } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { TuiLoaderModule } from '@taiga-ui/core'
import { TuiActionModule } from '@taiga-ui/kit'
import { IconComponent } from '@components'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [CommonModule, RouterLink, TuiActionModule, TuiLoaderModule, IconComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {
	@Input({ required: true }) label = ''
	@Input() icon = ''
	@Input() route = ''
	@Input({ transform: booleanAttribute }) isButton = false
	@Input({ transform: booleanAttribute }) isLoading = false

	buttonClick = output()

	onClick() {
		this.buttonClick.emit()
	}
}
