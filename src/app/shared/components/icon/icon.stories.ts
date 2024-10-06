import { Meta, StoryObj } from '@storybook/angular'
import { IconComponent } from './icon.component'

const meta: Meta<IconComponent> = {
	component: IconComponent,
	title: 'Icon',
	tags: ['autodocs'],
	argTypes: {
		icon: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		background: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		color: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		backgroundColor: {
			type: 'string',
			control: 'color',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		size: {
			type: 'number',
			control: 'number',
			table: {
				category: 'inputs',
				type: { summary: 'number' },
				defaultValue: { summary: '24' }
			}
		},
		colorPalette: { table: { disable: true } }
	}
}

export default meta
type Story = StoryObj<IconComponent>

export const Default: Story = {
	args: {
		icon: 'heart',
		color: 'brilliant-rose',
		size: 24
	}
}
