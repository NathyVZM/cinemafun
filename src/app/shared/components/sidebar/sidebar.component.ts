import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ButtonComponent, IconComponent, NavigationItemComponent } from '@components'
import { CoreService } from '@services/core.service'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [AsyncPipe, NavigationItemComponent, IconComponent, ButtonComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	coreService = inject(CoreService)
	navigation = this.coreService.getNavigation()
}
