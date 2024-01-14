import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core'
import { TuiAppearance, TuiButtonModule, TuiSizeXL, TuiSizeXS } from '@taiga-ui/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { combineLatest } from 'rxjs'
import { CoreService } from '@services'

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
	@Output() buttonClick = new EventEmitter<any>()

	constructor(private coreService: CoreService) {
		combineLatest({ _isDisabled: this.coreService.getIsButtonDisabled(), _isLoading: this.coreService.getIsButtonLoading() })
			.pipe(takeUntilDestroyed())
			.subscribe(({ _isDisabled, _isLoading }) => {
				this.isDisabled = _isDisabled
				this.isLoading = _isLoading
			})
	}

	onClick() {
		this.buttonClick.emit()
	}
}

