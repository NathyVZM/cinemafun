import { applicationConfig, componentWrapperDecorator, moduleMetadata, type Preview } from '@storybook/angular'
import { setCompodocJson } from '@storybook/addon-docs/angular'
import { themes } from '@storybook/theming'
import docJson from '../documentation.json'

import { provideRouter } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http'
import { tuiIconResolverProvider, TuiRoot } from '@taiga-ui/core'
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins'

import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common'

setCompodocJson(docJson)

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#1c1c27' },
				{ name: 'light', value: '#fff' }
			]
		}
	},
	decorators: [
		moduleMetadata({
			imports: [TuiRoot],
			providers: [
				tuiIconResolverProvider(icon => {
					if (icon.includes('tui')) {
						return `assets/taiga-ui/icons/${icon.replace('@tui.', '')}.svg`
					}
					return `icons/${icon}-duotone.svg`
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
			]
		}),
		applicationConfig({ providers: [provideRouter([]), provideAnimations(), provideHttpClient(), NG_EVENT_PLUGINS] }),
		componentWrapperDecorator(
			story => `
			<tui-root tuiTheme="dark">
				<div id="lights">
					<div class="pink"></div>
					<div class="blue"></div>
					<div class="second-blue"></div>
					<div class="green"></div>
					<div class="yellow"></div>
				</div>
				${story}
			</tui-root>
			`
		)
	]
}

export default preview
