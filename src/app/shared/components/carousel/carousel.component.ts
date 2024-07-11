import { AfterViewInit, Component, ElementRef, input, model, Renderer2, viewChild } from '@angular/core'
import { AsyncPipe, CommonModule, NgClass, NgOptimizedImage } from '@angular/common'
import { TuiHintModule, TuiSizeL, TuiSizeS } from '@taiga-ui/core'
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit'
import { CarouselItem, LoaderParams } from '@models'
import { ApiConfigurationService } from '@services'
import { Router } from '@angular/router'
import { GenrePipe } from '@pipes/genre.pipe'
import { ButtonComponent } from '@components/components.index'

@Component({
	selector: 'cf-carousel',
	standalone: true,
	imports: [
		CommonModule,
		NgOptimizedImage,
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

	getMediaQuery(size: string) {
		const formattedSize = size.replace('w', '')
		return `(max-width: ${formattedSize}px)`
	}

	onImageLoad() {
		this.isImageLoading = false
	}
}
