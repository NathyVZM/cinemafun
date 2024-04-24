import { Component, Input } from '@angular/core'
import { TuiActionModule } from '@taiga-ui/kit'
import { IconComponent } from '@components'
import { Navigation } from '@models'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [RouterLink, TuiActionModule, IconComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {
	@Input({ required: true, alias: 'item' }) navigationItem!: Navigation
}
