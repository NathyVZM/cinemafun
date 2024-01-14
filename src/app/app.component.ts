import { TuiRootModule, TuiModeModule, TuiThemeNightModule } from '@taiga-ui/core'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, TuiRootModule, TuiModeModule, TuiThemeNightModule, RouterLink],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass'
})
export class AppComponent {}

