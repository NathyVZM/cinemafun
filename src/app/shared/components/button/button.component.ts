import { booleanAttribute, Component, input, model, output } from '@angular/core'
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
	type = input.required<'submit' | 'reset' | 'button'>()
	label = input('')
	form = input('')
	appearance = input<TuiAppearance>(TuiAppearance.Primary)
	icon = input('')
	iconRight = input('')
	shape = input<'rounded' | 'square'>('rounded')
	size = input<TuiSizeXS | TuiSizeXL>('l')
	isIconButton = input(false, { transform: booleanAttribute })
	isDisabled = model(false)
	isLoading = model(false)

	buttonClick = output()

	constructor(private coreService: CoreService) {
		combineLatest({
			_isLoading: this.coreService.getIsButtonLoading(),
			_isDisabled: this.coreService.getIsButtonDisabled()
		})
			.pipe(takeUntilDestroyed())
			.subscribe(({ _isLoading, _isDisabled }) => {
				this.isLoading.set(_isLoading)
				this.isDisabled.set(_isDisabled)
			})
	}

	onButtonClick() {
		this.buttonClick.emit()
	}
}
