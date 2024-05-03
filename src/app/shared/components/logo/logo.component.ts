import { booleanAttribute, Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiTitleModule } from '@taiga-ui/experimental'
import { IconComponent } from '../icon/icon.component'

@Component({
	selector: 'cf-logo',
	standalone: true,
	imports: [RouterLink, TuiTitleModule, IconComponent],
	templateUrl: './logo.component.html',
	styleUrl: './logo.component.scss'
})
export class LogoComponent {
	@Input({ transform: booleanAttribute }) isSubtitle = false
}
