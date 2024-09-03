import { applicationConfig, componentWrapperDecorator, moduleMetadata, type Preview } from '@storybook/angular'
import { setCompodocJson } from '@storybook/addon-docs/angular'
import { themes } from '@storybook/theming'
import docJson from '../documentation.json'

import { provideAnimations } from '@angular/platform-browser/animations'
import { tuiIconResolverProvider, TuiRoot } from '@taiga-ui/core'
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins'

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
				})
			]
		}),
		applicationConfig({ providers: [provideAnimations(), NG_EVENT_PLUGINS] }),
		componentWrapperDecorator(story => `<tui-root tuiTheme="dark">${story}</tui-root>`)
	]
}

export default preview
