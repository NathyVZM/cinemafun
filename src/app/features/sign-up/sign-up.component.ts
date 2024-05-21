import { Component, Inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { TuiAlertService } from '@taiga-ui/core'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { TuiTitleModule, TuiSkeletonModule } from '@taiga-ui/experimental'
import { catchError, delay, EMPTY, first, tap } from 'rxjs'
import { FormField, User } from '@models'
import { ButtonComponent, CarouselComponent, FormFieldComponent, LogoComponent } from '@components'
import { customMinLengthValidator, customRequiredValidator } from '@validators'
import { AuthService, CoreService, MovieService } from '@services'

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
			hint: '💵 Your initial balance when you sign up',
			prefix: '$'
		},
		{
			id: 'ticket',
			formControlName: 'ticket',
			type: 'number',
			label: 'Ticket price',
			placeholder: '4.45',
			icon: 'ticket',
			isRequired: true,
			hint: '💰 The base price for the tickets of movies you want to watch',
			prefix: '$'
		}
	]

	carouselItems$ = this.movieService.getMoviesCarousel()
	isCarouselVisible = true

	constructor(
		private movieService: MovieService,
		private coreService: CoreService,
		private authService: AuthService,
		private router: Router,
		private responsive: BreakpointObserver,
		@Inject(TuiAlertService) private readonly alerts: TuiAlertService
	) {
		this.responsive
			.observe([Breakpoints.Tablet, Breakpoints.Handset])
			.pipe(takeUntilDestroyed())
			.subscribe(res => {
				if (res.matches) {
					this.isCarouselVisible = false
					return
				}

				this.isCarouselVisible = true
			})
	}

	signUp() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

		this.coreService.setIsButtonDisabled(true)
		this.coreService.setIsButtonLoading(true)
		this.coreService.setIsFormFieldDisabled(true)

		const user: User = {
			id: '',
			name: this.form.get('name')?.value!,
			email: this.form.get('email')?.value!,
			balance: this.form.get('balance')?.value!,
			ticket: this.form.get('ticket')?.value!
		}

		this.authService
			.signUp(user)
			.pipe(
				delay(1200),
				first(),
				catchError(() => {
					this.toggleButtonAndFormFieldState(false)
					return EMPTY
				}),
				tap(() => {
					this.alerts
						.open('You have successfully signed up!', { label: 'Success', status: 'success', autoClose: true })
						.pipe(first())
						.subscribe()
				})
			)
			.subscribe({
				next: () => this.router.navigate(['/home']),
				error: () => {
					this.toggleButtonAndFormFieldState(false)
				},
				complete: () => {
					this.toggleButtonAndFormFieldState(false)
				}
			})
	}

	toggleButtonAndFormFieldState(state: boolean) {
		this.coreService.setIsButtonDisabled(state)
		this.coreService.setIsButtonLoading(state)
		this.coreService.setIsFormFieldDisabled(state)
	}
}
