import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { NavigationItemComponent } from '@components/components.index'
import { CoreService } from '@services/core.service'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [NavigationItemComponent, CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
	coreService = inject(CoreService)
	navigation = this.coreService.getNavigation()
}

