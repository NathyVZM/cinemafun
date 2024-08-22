import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { FormFieldComponent } from '../form-field/form-field.component'
import { LogoComponent } from '../logo/logo.component'

@Component({
	selector: 'cf-navbar',
	standalone: true,
	imports: [ReactiveFormsModule, LogoComponent, FormFieldComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
	form = new FormGroup({
		search: new FormControl('')
	})

	onSubmit() {
		console.log(this.form.value)
	}
}
