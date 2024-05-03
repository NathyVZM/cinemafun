import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ButtonComponent, IconComponent, NavigationItemComponent } from '@components/components.index'
import { CoreService } from '@services/core.service'
import { TuiLineClampModule } from '@taiga-ui/kit'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [AsyncPipe, TuiLineClampModule, NavigationItemComponent, IconComponent, ButtonComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	coreService = inject(CoreService)
	navigation = this.coreService.getNavigation()
}
