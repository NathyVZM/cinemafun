import { Component } from '@angular/core'
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { tuiIconResolverProvider, TuiRoot } from '@taiga-ui/core'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, TuiRoot],
	providers: [
		tuiIconResolverProvider(icon => {
			return icon.includes('tui') ? `assets/taiga-ui/icons/${icon.replace('@tui.', '')}.svg` : `icons/${icon}-duotone.svg`
		}),
		{
			provide: IMAGE_LOADER,
			useValue: (config: ImageLoaderConfig) => {
				const netlifyPath = 'https://cinemafun.netlify.app/.netlify/images'
				const imagePath = `${netlifyPath}?url=${config.src}`

				const queryParams = new URLSearchParams([])
				const paramMapping = new Map([
					['width', 'w'],
					['height', 'h'],
					['format', 'fm'],
					['quality', 'q'],
					['fit', 'fit'],
					['position', 'position']
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
