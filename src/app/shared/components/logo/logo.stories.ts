import { Meta, StoryObj } from '@storybook/angular'
import { LogoComponent } from './logo.component'

/**
 * A simple **logo component** that includes the app title and its icon.
 */
const meta: Meta<LogoComponent> = {
	component: LogoComponent,
	title: 'Logo',
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<LogoComponent>

export const Default: Story = {}
