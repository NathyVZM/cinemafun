import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiModeModule, TuiThemeNightModule } from '@taiga-ui/core'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent, FooterComponent, ButtonComponent } from '@components'

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
		ButtonComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass'
})
export class AppComponent {
	title = 'cinemafun'
}

