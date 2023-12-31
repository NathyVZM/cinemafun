import { Component } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'
import { ModalComponent } from '@components'
import { FormField } from '@models'

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
	formFields: FormField[] = [
		{
			id: 'name',
			formControlName: 'name',
			placeholder: 'Jane Doe',
			type: 'text',
			label: 'Name',
			iconLeft: 'tuiIconUser'
		},
		{
			id: 'email',
			formControlName: 'email',
			placeholder: 'janedoe@example.com',
			type: 'email',
			label: 'Email',
			iconLeft: 'tuiIconMail'
		},
		{
			id: 'ticket',
			formControlName: 'ticket',
			placeholder: '4.45',
			type: 'number',
			label: 'Ticket price',
			iconLeft: 'tuiIconDollarSign'
		}
	]

	onSubmit() {
		console.log(this.form.value)
	}
}

