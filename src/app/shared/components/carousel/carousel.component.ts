import { AsyncPipe, NgClass } from '@angular/common'
import { Component, Input, input } from '@angular/core'
import { CarouselItem } from '@models'
import { TuiSizeL, TuiSizeS } from '@taiga-ui/core'
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit'
import { Observable } from 'rxjs'

@Component({
	selector: 'cf-carousel',
	standalone: true,
	imports: [AsyncPipe, NgClass, TuiCarouselModule, TuiPaginationModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
	@Input() index = 0

	items = input.required<Observable<CarouselItem[]>>()
	duration = input<number>(6000)
	isDraggable = input<boolean>(false)
	addFade = input<boolean>(false)
	paginationSize = input<TuiSizeS | TuiSizeL>('s')
}
