import { Component } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'
import { ModalComponent } from '@components/index'

@Component({
	selector: 'cf-sign-up',
	standalone: true,
	imports: [ModalComponent, ReactiveFormsModule],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.sass'
})
export class SignUpComponent {
	form = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		ticket: new FormControl(0)
	})

	onSubmit() {
		console.log(this.form.value)
	}
}

