import { CommonModule } from '@angular/common'
import { booleanAttribute, Component, Input } from '@angular/core'
import { TuiTitleModule, TuiIconModule, tuiIconResolverProvider } from '@taiga-ui/experimental'

@Component({
	selector: 'cf-logo',
	standalone: true,
	imports: [CommonModule, TuiTitleModule, TuiIconModule],
	providers: [tuiIconResolverProvider(icon => `/assets/icons/${icon}.svg`)],
	templateUrl: './logo.component.html',
	styleUrl: './logo.component.sass'
})
export class LogoComponent {
	@Input({ transform: booleanAttribute }) isSubtitle = false
}
