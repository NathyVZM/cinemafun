import { Component } from '@angular/core'
import { NavigationItemComponent } from '@components'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [NavigationItemComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {}
