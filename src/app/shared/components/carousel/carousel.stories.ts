import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular'
import { CarouselComponent } from './carousel.component'

/**
 * The **Carousel component** displays a carousel of items, such as movies or images, with optional pagination and draggable functionality.
 * It supports various configurations, including the duration of the slide transition and the size of the pagination.
 */
const meta: Meta<CarouselComponent> = {
	component: CarouselComponent,
	title: 'Carousel',
	tags: ['autodocs'],
	argTypes: {
		items: {
			type: 'symbol',
			control: 'object',
			description: 'The **items** to display in the carousel.',
			table: {
				category: 'inputs',
				type: { summary: 'CarouselItem[]' },
				defaultValue: { summary: '[]' }
			}
		},
		duration: {
			type: 'number',
			control: 'number',
			description: 'The **duration** of the carousel slide transition in milliseconds.',
			table: {
				category: 'inputs',
				type: { summary: 'number' },
				defaultValue: { summary: '10000' }
			}
		},
		isDraggable: {
			type: 'boolean',
			control: 'boolean',
			description: 'Determines whether the carousel is **draggable**.',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		paginationSize: {
			type: 'string',
			control: 'select',
			options: ['s', 'm', 'l'],
			table: {
				category: 'inputs',
				type: { summary: 'TuiSizeS | TuiSizeL' },
				defaultValue: { summary: 's' }
			}
		},
		loaderParams: {
			type: 'symbol',
			control: 'object',
			description: 'The **loader parameters** for the images of the carousel. Used for `NgOptimizedImage`.',
			table: {
				category: 'inputs',
				type: { summary: 'LoaderParams' },
				defaultValue: { summary: 'undefined' }
			}
		},
		imagePath: {
			type: 'string',
			control: 'text',
			description: 'The **base URL** for the images of the carousel.',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		backdropSizes: {
			type: 'symbol',
			control: 'object',
			description: 'The **sizes** for the backdrop images of the carousel.',
			table: {
				category: 'inputs',
				type: { summary: 'string[]' },
				defaultValue: { summary: '[]' }
			}
		},
		posterSizes: {
			type: 'symbol',
			control: 'object',
			description: 'The **sizes** for the poster images of the carousel.',
			table: {
				category: 'inputs',
				type: { summary: 'string[]' },
				defaultValue: { summary: '[]' }
			}
		},
		index: {
			type: 'number',
			control: 'number',
			description: 'The **index** of the current carousel slide.',
			table: {
				category: 'inputs',
				type: { summary: 'number' },
				defaultValue: { summary: '0' }
			}
		},
		pagination: {
			table: {
				disable: true
			}
		},
		isImageLoading: {
			table: {
				disable: true
			}
		},
		isSignUp: {
			table: {
				disable: true
			}
		}
	},
	decorators: [
		componentWrapperDecorator(
			story => `
        <style>
            cf-carousel {
                width: 100%;
                height: 560px;
            }
        </style>

        ${story}
        `
		)
	]
}

export default meta
type Story = StoryObj<CarouselComponent>

export const Example: Story = {
	args: {
		items: [
			{
				id: '1',
				image: '/czuYVuyFIXBMVXvl2JgKrGAvV2Q.jpg',
				hint: '🎬 Movie: Joker: Folie à Deux',
				alt: 'Joker: Folie à Deux',
				movie: {
					title: 'Joker: Folie à Deux',
					poster: '/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg',
					genre: ['Drama', 'Crime', 'Thriller']
				}
			},
			{
				id: '2',
				image: '/4zKrH1zrNAiCE5EJexx0PrR5JDj.jpg',
				hint: '🎬 Movie: Speak No Evil',
				alt: 'Speak No Evil',
				movie: {
					title: 'Speak No Evil',
					poster: '/fDtkrO2OAF8LKQTdzYmu1Y7lCLB.jpg',
					genre: ['Horror', 'Thriller']
				}
			},
			{
				id: '3',
				image: '/rxX4hQWJPG1SjuKY3OQtP6cPmXm.jpg',
				hint: '🎬 Movie: The Crow',
				alt: 'The Crow',
				movie: {
					title: 'The Crow',
					poster: '/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg',
					genre: ['Action', 'Fantasy', 'Horror', 'Thriller', 'Crime']
				}
			},
			{
				id: '4',
				image: '/haDgjvqnympvEOQRIBDoQNVwn0.jpg',
				hint: '🎬 Movie: Alien: Romulus',
				alt: 'Alien: Romulus',
				movie: {
					title: 'Alien: Romulus',
					poster: '/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg',
					genre: ['Horror', 'Science Fiction', 'Action']
				}
			},
			{
				id: '5',
				image: '/r14GYnHxLT2EAP38JMPu8aRIGrr.jpg',
				hint: '🎬 Movie: Beetlejuice Beetlejuice',
				alt: 'Beetlejuice Beetlejuice',
				movie: {
					title: 'Beetlejuice Beetlejuice',
					poster: '/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
					genre: ['Comedy', 'Fantasy', 'Horror']
				}
			}
		],
		loaderParams: { width: 1570, height: 560, fit: 'cover' },
		imagePath: 'https://image.tmdb.org/t/p/',
		backdropSizes: ['w300', 'w780', 'w1280', 'original'],
		posterSizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
	}
}
