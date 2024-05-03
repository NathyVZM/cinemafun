import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { TuiTitleModule } from '@taiga-ui/experimental'
import { ButtonComponent, FormFieldComponent, LogoComponent } from '@components'
import { FormField } from '@models'

@Component({
	selector: 'cf-sign-up',
	standalone: true,
	imports: [ReactiveFormsModule, TuiTitleModule, LogoComponent, FormFieldComponent, ButtonComponent],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
	form = new FormGroup({
		name: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		balance: new FormControl(0, Validators.required),
		ticket: new FormControl(0, Validators.required)
	})

	formFields: FormField[] = [
		{
			id: 'name',
			formControlName: 'name',
			type: 'text',
			label: 'Full name',
			placeholder: 'Jane Doe',
			icon: 'user',
			isRequired: true
		},
		{
			id: 'email',
			formControlName: 'email',
			type: 'email',
			label: 'E-mail',
			placeholder: 'janedoe@example.com',
			icon: 'envelope-simple',
			isRequired: true
		},
		{
			id: 'balance',
			formControlName: 'balance',
			type: 'number',
			label: 'Initial balance',
			placeholder: '100',
			icon: 'currency-dollar',
			isRequired: true
		},
		{
			id: 'ticket',
			formControlName: 'ticket',
			type: 'number',
			label: 'Ticket amount',
			placeholder: '4.45',
			icon: 'ticket',
			isRequired: true
		}
	]
}
