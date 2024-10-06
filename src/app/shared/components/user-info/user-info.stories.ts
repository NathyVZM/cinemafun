import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular'
import { UserInfoComponent } from './user-info.component'

/**
 * The **UserInfo component** displays detailed information about a user, including their ID, name, email, balance, and ticket count.
 * It supports various states and integrates with the media query for responsive design.
 */
const meta: Meta<UserInfoComponent> = {
	component: UserInfoComponent,
	title: 'UserInfo',
	tags: ['autodocs'],
	argTypes: {
		id: {
			type: 'string',
			control: 'text',
			description: "The **ID** of the user. It's readonly.",
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		name: {
			type: 'string',
			control: 'text',
			description: 'The **name** of the user.',
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		email: {
			type: 'string',
			control: 'text',
			description: 'The **email** address of the user.',
			table: {
				category: 'inputs',
				type: { summary: 'string' }
			}
		},
		balance: {
			type: 'number',
			control: 'number',
			description: 'The **balance** of the user in their account.',
			table: {
				category: 'inputs',
				type: { summary: 'number' }
			}
		},
		ticket: {
			type: 'number',
			control: 'number',
			description: 'The **ticket price** they entered to buy the tickets.',
			table: {
				category: 'inputs',
				type: { summary: 'number' }
			}
		}
	},
	decorators: [
		componentWrapperDecorator(
			story => `
            <style>
                cf-user-info { 
                    width: 15rem;
                }
            </style>

            ${story}
        `
		)
	]
}

export default meta
type Story = StoryObj<UserInfoComponent>

export const Example: Story = {
	args: {
		id: 'some_uuid_here',
		name: 'Nathalie Zambrano',
		email: 'nathalievzm@gmail.com',
		balance: 150.6051,
		ticket: 4.45
	}
}
