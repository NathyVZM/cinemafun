import { CommonModule } from '@angular/common'
import { booleanAttribute, Component, forwardRef, Input } from '@angular/core'
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms'
import {
	TuiLabelModule,
	TuiTextfieldControllerModule,
	TuiHintDirection,
	TuiHintModule,
	tuiNumberFormatProvider
} from '@taiga-ui/core'
import { TuiInputModule, TuiInputNumberModule, TuiInputPasswordModule } from '@taiga-ui/kit'

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
		TuiHintModule
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
	styleUrl: './form-field.component.sass'
})
export class FormFieldComponent implements ControlValueAccessor {
	@Input({ required: true }) id = ''
	@Input({ required: true }) placeholder = ''
	@Input({ required: true }) type: 'text' | 'email' | 'password' | 'number' = 'text'
	@Input() label = ''
	@Input() iconLeft = ''
	@Input() iconRight = ''
	@Input() filler = ''
	@Input() hint = ''
	@Input() hintDirection: TuiHintDirection = 'bottom'
	@Input() prefix = ''
	@Input() postfix = ''
	@Input({ transform: booleanAttribute }) showCleaner = false
	@Input({ transform: booleanAttribute }) spellCheck = false
	@Input({ transform: booleanAttribute }) autoCapitalize = false
	@Input({ transform: booleanAttribute }) isRequired = false
	isDisabled = false
	value!: string | number | null

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
