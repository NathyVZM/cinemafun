import { Meta, StoryObj } from '@storybook/angular'
import { NavbarComponent } from './navbar.component'

/**
 * The **Navbar component** provides a navigation bar that includes a search form.
 * It uses the `ReactiveFormsModule` for form handling and includes the `LogoComponent` and `FormFieldComponent`.
 */
const meta: Meta<NavbarComponent> = {
	component: NavbarComponent,
	title: 'Navbar',
	tags: ['autodocs'],
	argTypes: {
		form: {
			table: {
				disable: true
			}
		},
		onSubmit: {
			table: {
				disable: true
			}
		}
	}
}

export default meta
type Story = StoryObj<NavbarComponent>

export const Default: Story = {}
