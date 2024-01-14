import { Component, Input } from '@angular/core'

@Component({
	selector: 'cf-movie-details',
	standalone: true,
	imports: [],
	templateUrl: './movie-details.component.html',
	styleUrl: './movie-details.component.sass'
})
export class MovieDetailsComponent {
	@Input() id = ''
}
