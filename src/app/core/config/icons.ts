import { FactoryProvider, inject } from '@angular/core'
import { tuiCreateToken } from '@taiga-ui/cdk/utils/miscellaneous'

export const TUI_ICON_REGISTRY = tuiCreateToken<Record<string, string>>({})
export const TUI_ICON_STARTS = TUI_ICON_REGISTRY

export function tuiIconsProvider(icons: Record<string, string>): FactoryProvider {
	return {
		provide: TUI_ICON_REGISTRY,
		useFactory: () => ({
			...(inject(TUI_ICON_REGISTRY, { skipSelf: true, optional: true }) || {}),
			...Object.fromEntries(
				Object.entries(icons).map(([key, value]) => [key, `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`])
			)
		})
	}
}
