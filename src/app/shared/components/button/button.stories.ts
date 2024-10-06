import { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from './button.component'

/**
 * A versatile **button component** that supports various types, appearances, sizes, and states, including loading and disabled states.
 * It can also include leading and trailing icons.
 */
const meta: Meta<ButtonComponent> = {
	component: ButtonComponent,
	title: 'Button',
	tags: ['autodocs'],
	argTypes: {
		type: {
			description: 'Specifies the **type** of the button, which determines its behavior when clicked.',
			type: 'string',
			control: 'select',
			options: ['button', 'submit', 'reset'],
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: 'button' }
			}
		},
		label: {
			description: 'The **text label** displayed on the button.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		form: {
			description: 'The **ID of the form** that the button is associated with.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		appearance: {
			description: 'Defines the **visual style** of the button.',
			type: 'string',
			control: 'select',
			options: ['primary', 'accent', 'secondary', 'destructive', 'flat', 'outline', 'opposite', 'glass', 'floating'],
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' }
			}
		},
		iconLeading: {
			description: 'The **icon** displayed at the beginning of the button.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		iconTrailing: {
			description: 'The **icon** displayed at the end of the button.',
			type: 'string',
			control: 'text',
			if: { arg: 'isIconButton', truthy: false },
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		size: {
			description: 'Specifies the **size** of the button.',
			type: 'string',
			control: {
				type: 'radio',
				labels: { xs: 'Extra small', s: 'Small', m: 'Medium', l: 'Large' }
			},
			options: ['xs', 's', 'm', 'l'],
			table: {
				category: 'inputs',
				type: { summary: 'TuiSizeXS | TuiSizeXL' },
				defaultValue: { summary: 'l' }
			}
		},
		isIconButton: {
			description: 'Indicates whether the button is an **icon button**.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		isDisabled: {
			description: 'Determines if the button is **disabled** and non-interactive.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		isLoading: {
			description: 'Shows a **loading indicator** on the button when true.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		buttonClick: {
			table: {
				category: 'outputs',
				type: { summary: 'EventEmitter<void>' }
			}
		},
		onButtonClick: {
			table: {
				disable: true
			}
		}
	},
	parameters: {
		designToken: {
			tabs: [
				'Button Color',
				'Button Spacing',
				'Button BorderRadius',
				'Button FontWeight',
				'Button FontSize',
				'Icon Button Spacing',
				'Icon Button BorderRadius',
				'Colors',
				'Spacings',
				'Font Sizes',
				'SVG Icons'
			]
		}
	}
}

export default meta
type Story = StoryObj<ButtonComponent>

export const Example: Story = {
	args: {
		type: 'button',
		label: 'A button',
		appearance: 'primary',
		size: 'l',
		isIconButton: false,
		isDisabled: false,
		isLoading: false
	}
}
