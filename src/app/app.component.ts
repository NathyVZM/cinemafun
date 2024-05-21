import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import {
	TUI_SANITIZER,
	TuiAlertModule,
	TuiModeModule,
	TuiRootModule,
	tuiSvgSrcInterceptors,
	TuiThemeNightModule
} from '@taiga-ui/core'
import { TuiSafeHtml } from '@taiga-ui/cdk'
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, TuiRootModule, TuiModeModule, TuiThemeNightModule, TuiAlertModule],
	providers: [
		{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
		tuiSvgSrcInterceptors((svg: TuiSafeHtml) => (!String(svg).includes('tui') ? `assets/icons/${svg}-duotone.svg` : svg))
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'cinemafun'
}
