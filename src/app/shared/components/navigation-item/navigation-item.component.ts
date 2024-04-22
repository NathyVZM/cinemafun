import { Component } from '@angular/core'
import { IconComponent } from '@components/components.index'
import { TuiActionModule } from '@taiga-ui/kit'

@Component({
	selector: 'cf-navigation-item',
	standalone: true,
	imports: [TuiActionModule, IconComponent],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {}
