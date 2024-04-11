import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TuiModeModule, TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core'
import { NavbarComponent } from '@components'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, TuiRootModule, TuiModeModule, TuiThemeNightModule, NavbarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass'
})
export class AppComponent {
	title = 'cinemafun'
}
