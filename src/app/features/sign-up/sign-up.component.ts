import { Component } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { first, of, timer } from 'rxjs'
import { ModalComponent } from '@components'
import { FormField, User } from '@models'
import { AuthService, CoreService } from '@services'

@Component({
	selector: 'cf-sign-up',
	standalone: true,
	imports: [ModalComponent, ReactiveFormsModule],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.sass'
})
export class SignUpComponent {
	form = new FormGroup({
		name: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		ticket: new FormControl<number | null>(null, Validators.required)
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

	constructor(
		private coreService: CoreService,
		private authService: AuthService,
		private router: Router
	) {}

	onSubmit() {
		this.coreService.setButtonDisabled(true)
		this.coreService.setButtonLoading(true)
		this.coreService.setFormFieldDisabled(true)

		const user: User = {
			name: this.form.get('name')?.value!,
			email: this.form.get('email')?.value!,
			ticket: this.form.get('ticket')?.value!
		}

		this.authService.setUser(user)

		timer(400)
			.pipe(first())
			.subscribe(() => {
				this.coreService.setFormFieldDisabled(false)
				this.coreService.setButtonDisabled(false)
				this.coreService.setButtonLoading(false)
				this.router.navigateByUrl('/home')
			})
	}
}

