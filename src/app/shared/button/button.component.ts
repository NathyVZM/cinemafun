import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core'
import { TuiAppearance, TuiButtonModule, TuiSizeXL, TuiSizeXS } from '@taiga-ui/core'

@Component({
	selector: 'cf-button',
	standalone: true,
	imports: [TuiButtonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.sass'
})
export class ButtonComponent {
	@Input({ required: true }) label = ''
	@Input({ required: true }) type = 'button'
	@Input() form = ''
	@Input() appearance: TuiAppearance = TuiAppearance.Primary
	@Input() icon = ''
	@Input() iconRight = ''
	@Input() shape: 'rounded' | 'square' = 'rounded'
	@Input() size: TuiSizeXS | TuiSizeXL = 'l'
	@Input({ transform: booleanAttribute }) isDisabled = false
	@Input({ transform: booleanAttribute }) isLoading = false
	@Input() formId = ''
	@Output() buttonClick = new EventEmitter<any>()

	onClick() {
		this.buttonClick.emit()
	}
}

