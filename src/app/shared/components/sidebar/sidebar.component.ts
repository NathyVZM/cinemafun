import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { Router } from '@angular/router'
import { ButtonComponent, NavigationItemComponent } from '@components/components.index'
import { AuthService, CoreService } from '@services'
import { concatMap, first, timer } from 'rxjs'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [NavigationItemComponent, CommonModule, ButtonComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
	coreService = inject(CoreService)
	authService = inject(AuthService)
	router = inject(Router)
	navigation = this.coreService.getNavigation()
	user$ = this.authService.getUser()

	logOut() {
		this.coreService.setNagivationItemLoading(true)
		timer(400)
			.pipe(
				concatMap(() => this.authService.removeUser()),
				first()
			)
			.subscribe({
				next: () => this.router.navigateByUrl('/sign-up'),
				complete: () => this.coreService.setNagivationItemLoading(false)
			})
	}
}

