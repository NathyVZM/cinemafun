import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { NavigationItemComponent } from '@components/components.index'
import { AuthService } from '@services/auth.service'
import { CoreService } from '@services/core.service'
import { concatMap, first, timer } from 'rxjs'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [NavigationItemComponent, CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
	coreService = inject(CoreService)
	authService = inject(AuthService)
	router = inject(Router)
	navigation = this.coreService.getNavigation()
	isLoading = false

	logOut() {
		this.isLoading = true
		timer(400)
			.pipe(
				concatMap(() => this.authService.removeUser()),
				first()
			)
			.subscribe(() => {
				this.isLoading = false
				this.router.navigateByUrl('/sign-in')
			})
	}
}

