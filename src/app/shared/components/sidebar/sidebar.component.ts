import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { TuiLineClampModule } from '@taiga-ui/kit'
import { ButtonComponent, IconComponent, NavigationItemComponent } from '@components'
import { CoreService } from '@services'

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
