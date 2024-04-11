import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { TuiIconModule, tuiIconResolverProvider } from '@taiga-ui/experimental'

@Component({
	selector: 'cf-icon',
	standalone: true,
	imports: [CommonModule, TuiIconModule],
	providers: [tuiIconResolverProvider(icon => `/assets/icons/${icon}-duotone.svg`)],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.sass'
})
export class IconComponent {
	@Input({ required: true }) icon = ''
	@Input() classes: string | string[] | Set<string> | { [klass: string]: any } | null | undefined = null
}
