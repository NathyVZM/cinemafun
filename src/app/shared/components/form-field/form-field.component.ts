import { CommonModule } from '@angular/common'
import { Component, Input, forwardRef } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms'
import { TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule, tuiNumberFormatProvider } from '@taiga-ui/core'
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputNumberModule } from '@taiga-ui/kit'
import { CoreService } from '@services'

@Component({
	selector: 'cf-form-field',
	standalone: true,
	imports: [
		CommonModule,
		TuiInputModule,
		TuiInputNumberModule,
		TuiLabelModule,
		TuiTextfieldControllerModule,
		TuiErrorModule,
		TuiFieldErrorPipeModule,
		ReactiveFormsModule,
		FormsModule
	],
	templateUrl: './form-field.component.html',
	styleUrl: './form-field.component.sass',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormFieldComponent),
			multi: true
		},
		tuiNumberFormatProvider({
			decimalSeparator: '.',
			thousandSeparator: ' '
		})
	]
})
export class FormFieldComponent implements ControlValueAccessor {
	@Input({ required: true }) id = ''
	@Input({ required: true }) placeholder = ''
	@Input({ required: true }) type = ''
	@Input() label = ''
	@Input() showCleaner = false
	@Input() iconLeft = ''
	@Input() iconRight = ''
	@Input() isRequired = false
	@Input() spellCheck: boolean | undefined = false
	@Input() autoCapitalize: boolean | undefined = false
	isDisabled = false
	value!: string | number | null

	constructor(private coreService: CoreService) {
		this.coreService
			.getIsFormFieldDisabled()
			.pipe(takeUntilDestroyed())
			.subscribe(_isDisabled => (this.isDisabled = _isDisabled))
	}

	onInput(event: Event) {
		const value = (event.target as HTMLInputElement).value
		const valueNumber = Number(value.replace(/ /g, ''))

		if (isNaN(valueNumber)) this.value = value || null
		else this.value = valueNumber || null

		this.onTouched()
		this.propagateChange(this.value)
	}

	propagateChange = (_: any) => {}
	onTouched = () => {}

	writeValue(value: string): void {
		if (value === undefined) return
		this.value = value || null
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = isDisabled
	}
}

