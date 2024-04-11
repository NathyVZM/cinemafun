import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { TuiModeModule, TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core'
import { ButtonComponent, FormFieldComponent, LogoComponent } from '@components'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		TuiRootModule,
		TuiModeModule,
		TuiThemeNightModule,
		ButtonComponent,
		FormFieldComponent,
		LogoComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass'
})
export class AppComponent {
	title = 'cinemafun'

	onClick() {
		console.log('hello world')
	}
}
