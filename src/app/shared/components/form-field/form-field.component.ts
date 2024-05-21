import { booleanAttribute, Component, forwardRef, input } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms'
import {
	TuiLabelModule,
	TuiTextfieldControllerModule,
	TuiHintDirection,
	TuiHintModule,
	tuiNumberFormatProvider,
	TuiErrorModule
} from '@taiga-ui/core'
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputNumberModule, TuiInputPasswordModule } from '@taiga-ui/kit'
import { CoreService } from '@services'

@Component({
	selector: 'cf-form-field',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		TuiInputModule,
		TuiInputNumberModule,
		TuiInputPasswordModule,
		TuiTextfieldControllerModule,
		TuiLabelModule,
		TuiHintModule,
		TuiErrorModule,
		TuiFieldErrorPipeModule
	],
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
	],
	templateUrl: './form-field.component.html',
	styleUrl: './form-field.component.scss'
})
export class FormFieldComponent implements ControlValueAccessor {
	nativeId = input.required<string>()
	placeholder = input.required<string>()
	type = input.required<'text' | 'email' | 'password' | 'number'>()
	label = input('')
	iconLeft = input('')
	iconRight = input('')
	filler = input('')
	hint = input<string | undefined>('')
	hintDirection = input<TuiHintDirection>('bottom')
	prefix = input('')
	postfix = input('')
	showCleaner = input(false, { transform: booleanAttribute })
	spellCheck = input(false, { transform: booleanAttribute })
	autoCapitalize = input(false, { transform: booleanAttribute })
	isRequired = input(false, { transform: booleanAttribute })

	isDisabled = false
	value!: string | number | null

	constructor(private coreService: CoreService) {
		this.coreService
			.getIsFormFieldDisabled()
			.pipe(takeUntilDestroyed())
			.subscribe(_isDisabled => (this.isDisabled = _isDisabled))
	}

	onNgModelChange(value: string | number) {
		this.value = value || null
		this.onTouched()
		this.onChange(this.value)
	}

	onChange = (_: any) => {}
	onTouched = () => {}

	writeValue(value: string): void {
		if (value === undefined) return
		this.value = value || null
	}

	registerOnChange(fn: any): void {
		this.onChange = fn
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = isDisabled
	}
}
