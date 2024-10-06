import { Meta, StoryObj } from '@storybook/angular'
import { of } from 'rxjs'
import { User } from '@models'
import { SidebarComponent } from './sidebar.component'

/**
 * The **Sidebar component** provides a collapsible sidebar that includes user information and navigation links.
 * It integrates with the router for navigation and supports user sign-out functionality.
 */
const meta: Meta<SidebarComponent> = {
	component: SidebarComponent,
	title: 'Sidebar',
	tags: ['autodocs'],
	argTypes: {
		navigation$: { table: { disable: true } },
		user$: { table: { disable: true } },
		signOut: { table: { disable: true } }
	}
}

export default meta
type Story = StoryObj<SidebarComponent>

export const Example: Story = {
	args: {
		user$: of<User>({ id: '100', name: 'Jane Doe', email: 'nathalievzm@gmail.com', balance: 100.45, ticket: 4.45 })
	}
}
