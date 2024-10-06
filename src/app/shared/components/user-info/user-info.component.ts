import { Component, input } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { TuiNumberFormat } from '@taiga-ui/core'
import { TuiLineClamp } from '@taiga-ui/kit'
import { TuiAmountPipe, TuiDecimalPipe } from '@taiga-ui/addon-commerce'
import { ButtonComponent } from '../button/button.component'
import { IconComponent } from '../icon/icon.component'

@Component({
	selector: 'cf-user-info',
	standalone: true,
	imports: [AsyncPipe, TuiLineClamp, TuiAmountPipe, TuiDecimalPipe, TuiNumberFormat, IconComponent, ButtonComponent],
	templateUrl: './user-info.component.html',
	styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
	readonly id = input.required<string>()
	name = input.required<string>()
	email = input.required<string>()
	balance = input.required<number>()
	ticket = input.required<number>()
}
