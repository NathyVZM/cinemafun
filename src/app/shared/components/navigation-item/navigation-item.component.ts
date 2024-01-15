import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiActionModule } from '@taiga-ui/kit'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [TuiActionModule, RouterLink],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.sass'
})
export class NavigationItemComponent {
	@Input({ required: true }) name = ''
	@Input({ required: true }) icon = ''
	@Input({ required: true }) link = ''
}

