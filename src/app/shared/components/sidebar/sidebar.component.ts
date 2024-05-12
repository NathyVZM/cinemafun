import { Component } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { Router } from '@angular/router'
import { tuiNumberFormatProvider } from '@taiga-ui/core'
import { TuiLineClampModule } from '@taiga-ui/kit'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { catchError, delay, EMPTY, first } from 'rxjs'
import { AuthService, CoreService, UserService } from '@services'
import { ButtonComponent } from '../button/button.component'
import { IconComponent } from '../icon/icon.component'
import { NavigationItemComponent } from '../navigation-item/navigation-item.component'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [AsyncPipe, TuiLineClampModule, TuiMoneyModule, NavigationItemComponent, IconComponent, ButtonComponent],
	providers: [
		tuiNumberFormatProvider({
			decimalSeparator: '.',
			thousandSeparator: ' '
		})
	],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	navigation$ = this.coreService.getNavigation()
	user$ = this.userService.getUser()

	constructor(
		private coreService: CoreService,
		private userService: UserService,
		private authService: AuthService,
		private router: Router
	) {}

	signOut() {
		this.coreService.setIsNavigationItemLoading(true)

		this.authService
			.signOut()
			.pipe(
				delay(1000),
				first(),
				catchError(() => {
					this.coreService.setIsNavigationItemLoading(false)
					return EMPTY
				})
			)
			.subscribe({
				next: () => this.router.navigate(['/sign-up']),
				error: () => this.coreService.setIsNavigationItemLoading(false),
				complete: () => this.coreService.setIsNavigationItemLoading(false)
			})
	}
}
