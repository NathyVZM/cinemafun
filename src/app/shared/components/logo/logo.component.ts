import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiTitle } from '@taiga-ui/core'
import { IconComponent } from '../icon/icon.component'

@Component({
	selector: 'cf-logo',
	standalone: true,
	imports: [RouterLink, TuiTitle, IconComponent],
	templateUrl: './logo.component.html',
	styleUrl: './logo.component.scss'
})
export class LogoComponent {}
