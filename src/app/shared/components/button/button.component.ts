import { booleanAttribute, Component, Input, input, output } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { TuiAppearance, TuiButtonModule, TuiSizeXL, TuiSizeXS } from '@taiga-ui/core'
import { combineLatest } from 'rxjs'
import { CoreService } from '@services'

@Component({
	selector: 'cf-button',
	standalone: true,
	imports: [TuiButtonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	@Input({ transform: booleanAttribute }) isDisabled = false
	@Input({ transform: booleanAttribute }) isLoading = false

	type = input.required<'submit' | 'reset' | 'button'>()
	label = input('')
	form = input('')
	appearance = input<TuiAppearance>(TuiAppearance.Primary)
	icon = input('')
	iconRight = input('')
	shape = input<'rounded' | 'square'>('rounded')
	size = input<TuiSizeXS | TuiSizeXL>('l')
	isIconButton = input(false, { transform: booleanAttribute })

	buttonClick = output()

	constructor(private coreService: CoreService) {
		combineLatest({
			_isLoading: this.coreService.getIsButtonLoading(),
			_isDisabled: this.coreService.getIsButtonDisabled()
		})
			.pipe(takeUntilDestroyed())
			.subscribe(({ _isLoading, _isDisabled }) => {
				this.isLoading = _isLoading
				this.isDisabled = _isDisabled
			})
	}

	onButtonClick() {
		this.buttonClick.emit()
	}
}
