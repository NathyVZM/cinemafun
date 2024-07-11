import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { CarouselComponent, MovieComponent } from '@components'
import { MovieService } from '@services'

@Component({
	selector: 'cf-home',
	standalone: true,
	imports: [AsyncPipe, CarouselComponent, MovieComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	movieService = inject(MovieService)
	movies$ = this.movieService.getMoviesForHome()
	carousel$ = this.movieService.getMoviesCarousel()
}
