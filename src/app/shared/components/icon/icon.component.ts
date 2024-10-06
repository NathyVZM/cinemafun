import { Component, computed, input, numberAttribute } from '@angular/core'
import { NgClass } from '@angular/common'
import { TuiIcon } from '@taiga-ui/core'

@Component({
	selector: 'cf-icon',
	standalone: true,
	imports: [NgClass, TuiIcon],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss'
})
export class IconComponent {
	icon = input.required<string>()
	background = input('')
	color = input('')
	backgroundColor = input('')
	size = input(24, { transform: numberAttribute })

	colorPalette = computed(() => {
		const colors = new Map([
			['night', 'var(--cf-night)'],
			['platinum', 'var(--cf-platinum)'],
			['ghost-white', 'var(--cf-ghost-white)'],
			['brilliant-rose', 'var(--cf-brilliant-rose)'],
			['deep-sky-blue', 'var(--cf-deep-sky-blue)'],
			['sunglow', 'var(--cf-sunglow)'],
			['spring-green', 'var(--cf-spring-green)'],
			['folly', 'var(--cf-folly)'],
			['cool-gray', 'var(--cf-cool-gray)']
		])
		return colors.get(this.color()) || this.color()
	})
}
