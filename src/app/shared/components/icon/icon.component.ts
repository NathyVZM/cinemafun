import { Component, input } from '@angular/core'
import { NgClass } from '@angular/common'
import { TuiIcon, tuiIconResolverProvider } from '@taiga-ui/core'

@Component({
	selector: 'cf-icon',
	standalone: true,
	imports: [NgClass, TuiIcon],
	providers: [tuiIconResolverProvider(icon => (icon.includes('@tui') ? icon : `icons/${icon}-duotone.svg`))],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss'
})
export class IconComponent {
	icon = input.required<string>()
	classes = input<string | string[] | Set<string> | { [klass: string]: any } | null | undefined>(null)
}
