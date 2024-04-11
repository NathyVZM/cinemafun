import { CommonModule } from '@angular/common'
import { booleanAttribute, Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
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
		FormsModule,
		CommonModule,
		TuiInputModule,
		TuiInputNumberModule,
		TuiInputPasswordModule,
		TuiTextfieldControllerModule,
		TuiLabelModule,
		TuiHintModule
	],
	providers: [
		tuiNumberFormatProvider({
			decimalSeparator: '.',
			thousandSeparator: ' '
		})
	],
	templateUrl: './form-field.component.html',
	styleUrl: './form-field.component.sass'
})
export class FormFieldComponent {
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
}
