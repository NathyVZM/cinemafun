import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular'
import { MovieComponent } from './movie.component'

/**
 * The **Movie component** displays detailed information about a movie, including its title, poster, genre, runtime, and classification.
 * It supports various states and integrates with the media query for responsive design.
 */
const meta: Meta<MovieComponent> = {
	component: MovieComponent,
	title: 'Movie',
	tags: ['autodocs'],
	argTypes: {
		id: {
			type: 'number',
			control: 'number',
			description: 'The **ID** of the movie.',
			table: {
				category: 'inputs',
				type: { summary: 'number' }
			}
		},
		title: {
			type: 'string',
			control: 'text',
			description: 'The **title** of the movie.',
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		poster: {
			type: 'string',
			control: 'text',
			description: 'The **poster URL** of the movie.',
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		genre: {
			type: 'symbol',
			control: 'object',
			description: 'The **genre** of the movie, represented as an array of strings.',
			table: {
				category: 'inputs',
				type: { summary: 'string[]' },
				defaultValue: { summary: 'undefined' }
			}
		},
		runtime: {
			type: 'number',
			control: 'number',
			description: 'The **runtime** of the movie in minutes.',
			table: {
				category: 'inputs',
				type: { summary: 'number' }
			}
		},
		classification: {
			type: 'string',
			control: 'text',
			description: 'The **classification** of the movie, such as PG, R, etc.',
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		imagePath: {
			type: 'string',
			control: 'text',
			description: 'The **base URL** for the movie poster images.',
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		posterSizes: {
			type: 'symbol',
			control: 'object',
			description: 'An array of **available poster sizes**.',
			table: {
				category: 'inputs',
				type: { summary: 'string[]' },
				defaultValue: { summary: 'undefined' }
			}
		},
		meaning: {
			type: 'string',
			control: 'text',
			description: 'The **meaning** or description of the classification.',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		classificationColor: {
			table: {
				disable: true
			}
		},
		classifications: {
			table: {
				disable: true
			}
		},
		getMediaQuery: {
			table: {
				disable: true
			}
		}
	},
	parameters: {
		designToken: {
			tabs: [
				'Movie Color',
				'Movie Spacing',
				'Movie BorderRadius',
				'Movie FontSize',
				'Movie FontWeight',
				'Colors',
				'Spacings',
				'Font Sizes',
				'SVG Icons'
			]
		}
	},
	decorators: [
		componentWrapperDecorator(
			story => `
		<style>
			cf-movie {
				width: 19rem;
			}
		</style>
		${story}
		`
		)
	]
}

export default meta
type Story = StoryObj<MovieComponent>

export const Example: Story = {
	args: {
		id: 100,
		title: 'Big Hero 6',
		poster: '/2mxS4wUimwlLmI1xp6QW6NSU361.jpg',
		genre: ['Animation', 'Adventure', 'Family'],
		runtime: 102,
		classification: 'PG',
		imagePath: 'https://image.tmdb.org/t/p/',
		posterSizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
	}
}
