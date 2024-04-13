import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { LogoComponent, FormFieldComponent } from '@components'
import { TuiInputModule } from '@taiga-ui/kit'
import { TuiTextfieldControllerModule } from '@taiga-ui/core'

@Component({
	selector: 'cf-navbar',
	standalone: true,
	imports: [ReactiveFormsModule, LogoComponent, FormFieldComponent, TuiInputModule, TuiTextfieldControllerModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
	form = new FormGroup({
		search: new FormControl('')
	})

	constructor() {
		this.form.valueChanges.subscribe(res => console.log(res))
	}

	onSubmit() {
		console.log(this.form.value)
	}
}
