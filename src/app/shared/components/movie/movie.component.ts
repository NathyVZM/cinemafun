import { Component, computed, input } from '@angular/core'
import { AsyncPipe, NgClass } from '@angular/common'
import { RouterLink } from '@angular/router'
import { TuiIslandModule, TuiLineClampModule } from '@taiga-ui/kit'
import { ClassificationPipe, GenrePipe, RuntimePipe } from '@pipes/pipes.index'
import { ApiConfigurationService } from '@services/services.index'

@Component({
	selector: 'cf-movie',
	standalone: true,
	imports: [
		NgClass,
		RouterLink,
		AsyncPipe,
		TuiIslandModule,
		TuiLineClampModule,
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

	classificationColor = computed(() => this.classifications.get(this.classification()))
	classifications = new Map([
		['G', 'general'],
		['PG', 'parental-guidance'],
		['PG-13', 'parental-guidance-13'],
		['R', 'restricted'],
		['NC-17', 'adults-only']
	])

	imagesPath$ = this.apiConfigurationService.getImagesPath()
	posterSizes$ = this.apiConfigurationService.getPosterSizes()

	constructor(private apiConfigurationService: ApiConfigurationService) {}

	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}
}
