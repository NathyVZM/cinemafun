import { Component, input, model } from '@angular/core'
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common'
import { TuiHintModule, TuiSizeL, TuiSizeS } from '@taiga-ui/core'
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit'
import { Observable } from 'rxjs'
import { CarouselItem } from '@models'
import { ApiConfigurationService } from '@services'
import { IconComponent } from '../icon/icon.component'

@Component({
	selector: 'cf-carousel',
	standalone: true,
	imports: [AsyncPipe, NgClass, NgOptimizedImage, TuiCarouselModule, TuiPaginationModule, TuiHintModule, IconComponent],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
	items = input.required<Observable<CarouselItem[]>>()
	index = model(0)
	duration = input(10000)
	isDraggable = input(false)
	addFade = input(false)
	paginationSize = input<TuiSizeS | TuiSizeL>('s')

	imagesPath$ = this.apiConfigurationService.getImagesPath()
	backdropSizes$ = this.apiConfigurationService.getBackdropSizes()

	constructor(private apiConfigurationService: ApiConfigurationService) {}

	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}
}
