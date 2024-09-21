import { Meta, StoryObj } from '@storybook/angular'
import { NavigationItemComponent } from './navigation-item.component'

/**
 * The **Navigation Item component** provides a versatile navigation item that can be used as a link or a button.
 * It supports various states, including loading, and can emit click events.
 * The component also integrates with the router for navigation.
 */
const meta: Meta<NavigationItemComponent> = {
	component: NavigationItemComponent,
	title: 'NavigationItem',
	tags: ['autodocs'],
	argTypes: {
		label: {
			type: 'string',
			control: 'text',
			description: 'The label text for the navigation item.',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		icon: {
			type: 'string',
			control: 'text',
			description: 'The icon name for the navigation item.',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		route: {
			type: 'string',
			control: 'text',
			description: 'The route path for the navigation item link.',
			if: { arg: 'isButton', truthy: false },
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		isButton: {
			type: 'boolean',
			control: 'boolean',
			description: 'Determines if the navigation item should be rendered as a button.',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		isLoading: {
			type: 'boolean',
			control: 'boolean',
			description: 'Indicates if the navigation item button is in a loading state.',
			if: { arg: 'isButton', truthy: true },
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		navigationItemClick: {
			description: 'Event emitted when the navigation item button is clicked.',
			if: { arg: 'isButton', truthy: true },
			table: {
				category: 'outputs',
				type: { summary: 'EventEmitter<void>' }
			}
		},
		onNavigationItemClick: {
			table: {
				disable: true
			}
		}
	},
	parameters: {
		designToken: {
			tabs: [
				'Navigation Item Color',
				'Navigation Item Spacing',
				'Navigation Item BorderRadius',
				'Navigation Item FontSize',
				'Navigation Item FontWeight',
				'Colors',
				'Spacings',
				'Font Sizes',
				'SVG Icons'
			],
			defaultTab: 'Navigation Item Color'
		}
	}
}

export default meta
type Story = StoryObj<NavigationItemComponent>

export const Example: Story = {
	args: {
		label: 'Home',
		icon: 'house',
		isButton: false,
		isLoading: false
	}
}
