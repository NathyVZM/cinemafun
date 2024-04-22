import { booleanAttribute, Component, Input } from '@angular/core'
import { TuiTitleModule } from '@taiga-ui/experimental'
import { IconComponent } from '@components'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
	selector: 'cf-logo',
	standalone: true,
	imports: [TuiTitleModule, IconComponent, RouterLink],
	templateUrl: './logo.component.html',
	styleUrl: './logo.component.scss'
})
export class LogoComponent {
	@Input({ transform: booleanAttribute }) isSubtitle = false
}
