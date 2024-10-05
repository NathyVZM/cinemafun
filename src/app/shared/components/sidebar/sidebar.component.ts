import { Component } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { Router } from '@angular/router'
import { TuiNumberFormat, tuiNumberFormatProvider } from '@taiga-ui/core'
import { TuiLineClamp, TuiSkeleton } from '@taiga-ui/kit'
import { TuiAmountPipe, TuiDecimalPipe } from '@taiga-ui/addon-commerce'
import { catchError, EMPTY, first, map, timer } from 'rxjs'
import { AuthService, CoreService, UserService } from '@services'
import { ButtonComponent } from '../button/button.component'
import { IconComponent } from '../icon/icon.component'
import { NavigationItemComponent } from '../navigation-item/navigation-item.component'

@Component({
	selector: 'cf-sidebar',
	standalone: true,
	imports: [
		AsyncPipe,
		TuiLineClamp,
		TuiSkeleton,
		TuiAmountPipe,
		TuiDecimalPipe,
		TuiNumberFormat,
		NavigationItemComponent,
		IconComponent,
		ButtonComponent
	],
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

		timer(1000)
			.pipe(
				map(() => this.authService.signOut()),
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
