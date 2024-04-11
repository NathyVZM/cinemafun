import { booleanAttribute, Component, Input } from '@angular/core'
import { TuiTitleModule } from '@taiga-ui/experimental'
import { IconComponent } from '@components'

@Component({
	selector: 'cf-logo',
	standalone: true,
	imports: [TuiTitleModule, IconComponent],
	templateUrl: './logo.component.html',
	styleUrl: './logo.component.sass'
})
export class LogoComponent {
	@Input({ transform: booleanAttribute }) isSubtitle = false
}
