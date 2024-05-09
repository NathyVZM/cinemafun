import { Component } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { TuiTitleModule, TuiSkeletonModule } from '@taiga-ui/experimental'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { FormField } from '@models'
import { ButtonComponent, CarouselComponent, FormFieldComponent, LogoComponent } from '@components'
import { customMinLengthValidator, customRequiredValidator } from '@validators'
import { MovieService } from '@services'

@Component({
	selector: 'cf-sign-up',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		TuiTitleModule,
		TuiSkeletonModule,
		LogoComponent,
		FormFieldComponent,
		ButtonComponent,
		CarouselComponent
	],
	providers: [
		{
			provide: TUI_VALIDATION_ERRORS,
			useValue: {
				required: ({ message }: { message: string }) => message,
				minlength: ({ message }: { message: string }) => message,
				email: 'Enter a valid email'
			}
		}
	],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
	form = new FormGroup({
		name: new FormControl<string | null>(null, [
			customMinLengthValidator('Full name'),
			customRequiredValidator('Full name')
		]),
		email: new FormControl<string | null>(null, [Validators.email, customRequiredValidator('E-mail')]),
		balance: new FormControl<number | null>(null, customRequiredValidator('Balance')),
		ticket: new FormControl<number | null>(null, customRequiredValidator('Ticket'))
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
			label: 'Balance',
			placeholder: '100',
			icon: 'money',
			isRequired: true,
			hint: 'Your initial balance when you sign up'
		},
		{
			id: 'ticket',
			formControlName: 'ticket',
			type: 'number',
			label: 'Ticket price',
			placeholder: '4.45',
			icon: 'ticket',
			isRequired: true,
			hint: 'The base price for the tickets of movies you want to watch'
		}
	]

	carouselItems$ = this.movieService.getMoviesCarousel()
	isCarouselLoading = false

	constructor(private movieService: MovieService) {
		this.movieService
			.getIsCarouselLoading()
			.pipe(takeUntilDestroyed())
			.subscribe(isLoading => (this.isCarouselLoading = isLoading))
	}

	signUp() {
		console.log(this.form.value)
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}
	}
}
