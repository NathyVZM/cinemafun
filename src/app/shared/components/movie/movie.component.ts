import { UpperCasePipe } from '@angular/common'
import { Component } from '@angular/core'
import { TuiIslandModule } from '@taiga-ui/kit'

@Component({
	selector: 'cf-movie',
	standalone: true,
	imports: [UpperCasePipe, TuiIslandModule],
	templateUrl: './movie.component.html',
	styleUrl: './movie.component.scss'
})
export class MovieComponent {}
