import { Component } from '@angular/core'
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common'
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
	imports: [RouterOutlet, TuiRootModule, TuiModeModule, TuiThemeNightModule, TuiAlertModule],
	providers: [
		{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
		tuiSvgSrcInterceptors((svg: TuiSafeHtml) => (!String(svg).includes('tui') ? `assets/icons/${svg}-duotone.svg` : svg)),
		{
			provide: IMAGE_LOADER,
			useValue: (config: ImageLoaderConfig) => {
				const netlifyPath = 'https://cinemafun.netlify.app/.netlify/images'
				const imagePath = `${netlifyPath}?url=${config.src}`

				const queryParams = new URLSearchParams([])
				const paramMapping = new Map([
					['width', 'w'],
					['format', 'fm'],
					['quality', 'q'],
					['fit', 'fit']
				])

				paramMapping.forEach((value, key) => {
					if (config.loaderParams?.[key]) {
						queryParams.append(value, config.loaderParams[key])
					}
				})

				return `${imagePath}${queryParams.size > 0 ? `&${queryParams.toString()}` : ''}`
			}
		}
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {}
