import { Component, Input } from '@angular/core'
import { UpperCasePipe } from '@angular/common'
import { TuiIslandModule, TuiLineClampModule } from '@taiga-ui/kit'
import { ClassificationPipe, GenrePipe, RuntimePipe } from '@pipes'

@Component({
	selector: 'cf-movie',
	standalone: true,
	imports: [UpperCasePipe, TuiIslandModule, TuiLineClampModule, GenrePipe, RuntimePipe, ClassificationPipe],
	templateUrl: './movie.component.html',
	styleUrl: './movie.component.scss'
})
export class MovieComponent {
	@Input({ required: true }) title = ''
	@Input({ required: true }) poster = ''
	@Input({ required: true }) genre: string[] = []
	@Input({ required: true }) runtime = 0
	@Input({ required: true }) classification = ''
}
