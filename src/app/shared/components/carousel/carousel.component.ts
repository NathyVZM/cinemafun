import { Component, DestroyRef, inject, input, model } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common'
import { TuiHintModule, TuiSizeL, TuiSizeS } from '@taiga-ui/core'
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit'
import { map, Observable } from 'rxjs'
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
	destroyRef$ = inject(DestroyRef)

	constructor(private apiConfigurationService: ApiConfigurationService) {}

	getImagePath(size: string, image: string) {
		return this.imagesPath$.pipe(
			takeUntilDestroyed(this.destroyRef$),
			map(imagesPath => {
				return `https://cinemafun.netlify.app/.netlify/images?url=${imagesPath}${size}${image}&fm=webp&fit=cover&w=1080&q=100`
			})
		)
	}

	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}
}
