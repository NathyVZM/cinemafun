import { inject } from '@angular/core'
import { TuiStringHandler } from '@taiga-ui/cdk/types'
import { tuiCreateTokenFromFactory } from '@taiga-ui/cdk/utils/miscellaneous'
import { TUI_ASSETS_PATH } from '@taiga-ui/core'

export const TUI_ICON_START_RESOLVER = tuiCreateTokenFromFactory<TuiStringHandler<string>>(() => {
	const path = inject(TUI_ASSETS_PATH)
	return icon =>
		icon.includes('@tui') ? `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg` : `icons/${icon}-duotone.svg`
})
