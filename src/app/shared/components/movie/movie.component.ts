import { Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'
import { RouterLink } from '@angular/router'
import { TuiIslandModule, TuiLineClampModule } from '@taiga-ui/kit'
import { ClassificationPipe, GenrePipe, RuntimePipe } from '@pipes'

@Component({
	selector: 'cf-movie',
	standalone: true,
	imports: [NgClass, RouterLink, TuiIslandModule, TuiLineClampModule, GenrePipe, RuntimePipe, ClassificationPipe],
	templateUrl: './movie.component.html',
	styleUrl: './movie.component.scss'
})
export class MovieComponent {
	@Input({ required: true }) id = ''
	@Input({ required: true }) title = ''
	@Input({ required: true }) poster = ''
	@Input({ required: true }) genre: string[] = []
	@Input({ required: true }) runtime = 0
	@Input({ required: true }) classification = ''
	classifications = new Map([
		['G', 'general'],
		['PG', 'parental-guidance'],
		['PG-13', 'parental-guidance-13'],
		['R', 'restricted'],
		['NC-17', 'adults-only']
	])

	getClassificationColor() {
		return this.classifications.get(this.classification)
	}
}
