import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { TuiTextfieldControllerModule } from '@taiga-ui/core'
import { TuiInputModule } from '@taiga-ui/kit'
import { FormFieldComponent, LogoComponent } from '@components'

@Component({
	selector: 'cf-navbar',
	standalone: true,
	imports: [ReactiveFormsModule, LogoComponent, FormFieldComponent, TuiInputModule, TuiTextfieldControllerModule],
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
