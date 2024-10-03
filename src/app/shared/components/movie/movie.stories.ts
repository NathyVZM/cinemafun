import { Meta, StoryObj } from '@storybook/angular'
import { MovieComponent } from './movie.component'

const meta: Meta<MovieComponent> = {
	component: MovieComponent,
	title: 'Movie',
	tags: ['autodocs'],
	argTypes: {
		id: {
			type: 'number',
			control: 'number',
			table: {
				category: 'inputs'
			}
		},
		title: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs'
			}
		},
		poster: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs'
			}
		},
		genre: {
			type: 'symbol',
			control: 'object',
			table: {
				category: 'inputs',
				defaultValue: { summary: 'undefined' }
			}
		},
		runtime: {
			type: 'number',
			control: 'number',
			table: {
				category: 'inputs'
			}
		},
		classification: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs'
			}
		},
		imagePath: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs'
			}
		},
		posterSizes: {
			type: 'symbol',
			control: 'object',
			table: {
				category: 'inputs',
				defaultValue: { summary: 'undefined' }
			}
		},
		meaning: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
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
		isImageLoading: {
			table: {
				disable: true
			}
		},
		getMediaQuery: {
			table: {
				disable: true
			}
		},
		onImageLoad: {
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
	}
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
