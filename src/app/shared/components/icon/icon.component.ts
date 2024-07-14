import { Component, input } from '@angular/core'
import { NgClass } from '@angular/common'
import { TuiIconModule, tuiIconResolverProvider } from '@taiga-ui/experimental'

@Component({
	selector: 'cf-icon',
	standalone: true,
	imports: [NgClass, TuiIconModule],
	providers: [tuiIconResolverProvider(icon => `icons/${icon}-duotone.svg`)],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss'
})
export class IconComponent {
	icon = input.required<string>()
	classes = input<string | string[] | Set<string> | { [klass: string]: any } | null | undefined>(null)
}
