import { Component, computed, input } from '@angular/core'
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'
import { TuiHint } from '@taiga-ui/core'
import { TuiCardLarge } from '@taiga-ui/layout'
import { TuiLineClamp } from '@taiga-ui/kit'
import { RuntimePipe, ClassificationPipe, GenrePipe } from '@pipes'

@Component({
	selector: 'cf-movie',
	standalone: true,
	imports: [
		NgClass,
		RouterLink,
		AsyncPipe,
		NgOptimizedImage,
		TuiCardLarge,
		TuiHint,
		TuiLineClamp,
		GenrePipe,
		RuntimePipe,
		ClassificationPipe
	],
	templateUrl: './movie.component.html',
	styleUrl: './movie.component.scss'
})
export class MovieComponent {
	id = input.required<number>()
	title = input.required<string>()
	poster = input.required<string>()
	genre = input.required<string[]>()
	runtime = input.required<number>()
	classification = input.required<string>()
	imagePath = input.required<string>()
	posterSizes = input.required<string[]>()
	meaning = input('')

	classificationColor = computed(() => this.classifications.get(this.classification()))
	classifications = new Map([
		['G', 'general'],
		['PG', 'parental-guidance'],
		['PG-13', 'parental-guidance-13'],
		['R', 'restricted'],
		['NC-17', 'adults-only']
	])

	isImageLoading = true

	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}

	onImageLoad() {
		this.isImageLoading = false
	}
}
