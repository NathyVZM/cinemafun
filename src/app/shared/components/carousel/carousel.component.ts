import { AfterViewInit, Component, ElementRef, input, model, Renderer2, viewChild } from '@angular/core'
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common'
import { TuiHintModule, TuiSizeL, TuiSizeS } from '@taiga-ui/core'
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit'
import { Observable } from 'rxjs'
import { CarouselItem } from '@models'
import { ApiConfigurationService } from '@services'

@Component({
	selector: 'cf-carousel',
	standalone: true,
	imports: [AsyncPipe, NgClass, NgOptimizedImage, TuiCarouselModule, TuiPaginationModule, TuiHintModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
	items = input.required<Observable<CarouselItem[]>>()
	duration = input(10000)
	isDraggable = input(false)
	addFade = input(false)
	paginationSize = input<TuiSizeS | TuiSizeL>('s')
	index = model(0)

	pagination = viewChild<{ el: ElementRef<HTMLDivElement> }>('pagination')

	isImageLoading = true

	imagesPath$ = this.apiConfigurationService.getImagesPath()
	backdropSizes$ = this.apiConfigurationService.getBackdropSizes()

	constructor(
		private apiConfigurationService: ApiConfigurationService,
		private renderer: Renderer2
	) {}

	ngAfterViewInit(): void {
		const buttons = this.pagination()?.el.nativeElement.querySelectorAll('button')
		buttons?.forEach((button, index) => {
			this.renderer.setAttribute(button, 'aria-label', `carousel-button-${index + 1}`)
		})
	}

	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}

	onImageLoad() {
		this.isImageLoading = false
	}
}
