import { Component } from '@angular/core'
import { FormFieldComponent } from '@components'

@Component({
	selector: 'cf-navbar',
	standalone: true,
	imports: [FormFieldComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {}

