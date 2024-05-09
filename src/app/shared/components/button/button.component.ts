import { booleanAttribute, Component, input, output } from '@angular/core'
import { TuiAppearance, TuiButtonModule, TuiSizeXL, TuiSizeXS } from '@taiga-ui/core'

@Component({
	selector: 'cf-button',
	standalone: true,
	imports: [TuiButtonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	type = input.required<'submit' | 'reset' | 'button'>()
	label = input('')
	form = input('')
	appearance = input<TuiAppearance>(TuiAppearance.Primary)
	icon = input('')
	iconRight = input('')
	shape = input<'rounded' | 'square'>('rounded')
	size = input<TuiSizeXS | TuiSizeXL>('l')
	isDisabled = input(false, { transform: booleanAttribute })
	isLoading = input(false, { transform: booleanAttribute })
	isIconButton = input(false, { transform: booleanAttribute })

	buttonClick = output()

	onButtonClick() {
		this.buttonClick.emit()
	}
}
