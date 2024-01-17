import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiSvgModule } from '@taiga-ui/core'
import { TuiActionModule, TuiMarkerIconModule } from '@taiga-ui/kit'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [RouterLink, TuiActionModule, TuiMarkerIconModule, TuiSvgModule, CommonModule],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.sass'
})
export class NavigationItemComponent {
	@Input({ required: true }) name = ''
	@Input({ required: true }) icon = ''
	@Input({ required: true }) link = ''
}

