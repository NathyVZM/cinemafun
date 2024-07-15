import { AfterViewInit, Component, ElementRef, input, model, Renderer2, viewChild } from '@angular/core'
import { AsyncPipe, NgClass, NgOptimizedImage, NgTemplateOutlet } from '@angular/common'
import { TuiHintModule, TuiSizeL, TuiSizeS } from '@taiga-ui/core'
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit'
import { CarouselItem, LoaderParams } from '@models'
import { ApiConfigurationService } from '@services'
import { Router } from '@angular/router'
import { GenrePipe } from '@pipes'
import { ButtonComponent } from '../button/button.component'

@Component({
	selector: 'cf-carousel',
	standalone: true,
	imports: [
		AsyncPipe,
		NgClass,
		NgOptimizedImage,
		NgTemplateOutlet,
		TuiCarouselModule,
		TuiPaginationModule,
		TuiHintModule,
		ButtonComponent,
		GenrePipe
	],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
	items = input.required<CarouselItem[]>()
	duration = input(10000)
	isDraggable = input(false)
	addFade = input(false)
	paginationSize = input<TuiSizeS | TuiSizeL>('s')
	loaderParams = input<LoaderParams>()
	index = model(0)

	pagination = viewChild<{ el: ElementRef<HTMLDivElement> }>('pagination')

	isImageLoading = true
	isSignUp = false

	imagesPath$ = this.apiConfigurationService.getImagesPath()
	backdropSizes$ = this.apiConfigurationService.getBackdropSizes()
	posterSizes$ = this.apiConfigurationService.getPosterSizes()

	constructor(
		private apiConfigurationService: ApiConfigurationService,
		private renderer: Renderer2,
		private router: Router
	) {
		this.isSignUp = this.router.url.includes('sign-up')
	}

	ngAfterViewInit(): void {
		const buttons = this.pagination()?.el.nativeElement.querySelectorAll('button')
		buttons?.forEach((button, index) => {
			this.renderer.setAttribute(button, 'aria-label', `carousel-button-${index + 1}`)
		})
	}

	/**
	 * Returns a media query string based on the provided size.
	 * @param {string} size - The size of the media query in the format 'Xw', where X is the width in pixels.
	 * @returns A media query string in the format '(max-width: Xpx)'.
	 */
	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}

	/**
	 * Callback function triggered when an image finishes loading.
	 * Sets the `isImageLoading` property to `false`.
	 */
	onImageLoad() {
		this.isImageLoading = false
	}

	/**
	 * Moves the carousel to the previous slide.
	 */
	previousSlide() {
		this.index.set(this.index() - 1 < 0 ? this.items().length - 1 : this.index() - 1)
	}

	/**
	 * Moves to the next slide in the carousel.
	 */
	nextSlide() {
		this.index.set(this.index() + 1 >= this.items().length ? 0 : this.index() + 1)
	}
}
