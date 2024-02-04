import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ButtonComponent } from '@components/components.index'
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

	onClick() {
		this.buttonClick.emit()
	}
}

