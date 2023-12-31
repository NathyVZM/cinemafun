import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiModeModule, TuiThemeNightModule } from '@taiga-ui/core'
import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterLink, RouterOutlet } from '@angular/router'
import { NavbarComponent, FooterComponent } from '@components'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
		TuiModeModule,
		TuiThemeNightModule,
		NavbarComponent,
		FooterComponent,
		RouterLink
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass'
})
export class AppComponent {
	title = 'cinemafun'
	route = 'sign-up'
	router = inject(Router)

	hasRoute() {
		return this.router.url.includes(this.route)
	}
}

