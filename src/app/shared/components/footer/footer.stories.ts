import { Meta, StoryObj } from '@storybook/angular'
import { FooterComponent } from '@components'

/**
 * The **footer component** displays the site's footer, including the current year and social media links.
 */
const meta: Meta<FooterComponent> = {
	component: FooterComponent,
	title: 'Footer',
	tags: ['autodocs'],
	argTypes: {
		coreService: {
			table: {
				disable: true
			}
		},
		socialMedia: {
			table: {
				disable: true
			}
		},
		currentYear: {
			table: {
				disable: true
			}
		}
	}
}

export default meta
type Story = StoryObj<FooterComponent>

export const Example: Story = {}
