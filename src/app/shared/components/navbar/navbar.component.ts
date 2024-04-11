import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { LogoComponent, FormFieldComponent } from '@components'

@Component({
	selector: 'cf-navbar',
	standalone: true,
	imports: [ReactiveFormsModule, LogoComponent, FormFieldComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
	form = new FormGroup({
		search: new FormControl('')
	})

	onSubmit() {
		console.log(this.form.value)
	}
}
