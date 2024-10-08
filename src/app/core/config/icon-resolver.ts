import { inject, Provider } from '@angular/core'
import { TuiStringHandler } from '@taiga-ui/cdk/types'
import { tuiCreateTokenFromFactory } from '@taiga-ui/cdk/utils/miscellaneous'
import { TUI_ASSETS_PATH } from '@taiga-ui/core'
import { TUI_ICON_REGISTRY } from './icons'

export const TUI_ICON_START_RESOLVER = tuiCreateTokenFromFactory<TuiStringHandler<string>>(() => {
	const path = inject(TUI_ASSETS_PATH)
	return icon =>
		icon.includes('@tui') ? `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg` : `icons/${icon}-duotone.svg`
})

export function tuiInjectIconResolver(): TuiStringHandler<string> {
	const icons = inject(TUI_ICON_REGISTRY)
	const resolver = inject(TUI_ICON_START_RESOLVER)

	return icon => icons[icon] || resolver(icon)
}

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
	return {
		provide: TUI_ICON_START_RESOLVER,
		useValue
	}
}
