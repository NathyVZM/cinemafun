import { Meta, StoryObj } from '@storybook/angular'
import { FormFieldComponent } from './form-field.component'

const meta: Meta<FormFieldComponent> = {
	component: FormFieldComponent,
	title: 'Form Field',
	tags: ['autodocs'],
	argTypes: {
		nativeId: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		placeholder: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		type: {
			type: 'string',
			control: 'select',
			options: ['text', 'email', 'password', 'number'],
			table: {
				category: 'inputs',
				type: { summary: 'text | email | password | number' },
				defaultValue: { summary: 'text' }
			}
		},
		label: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		iconLeading: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		iconTrailing: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		filler: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		hint: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		hintDirection: {
			type: 'string',
			control: 'select',
			options: [
				'bottom-left',
				'bottom-right',
				'bottom',
				'left-bottom',
				'left-top',
				'left',
				'right-bottom',
				'right-top',
				'right',
				'top-left',
				'top-right',
				'top'
			],
			table: {
				category: 'inputs',
				type: { summary: 'TuiHintDirection' },
				defaultValue: { summary: 'bottom' }
			}
		},
		prefix: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		postfix: {
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		showCleaner: {
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		spellCheck: {
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		autoCapitalize: {
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		isRequired: {
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		}
	}
}

export default meta
type Story = StoryObj<FormFieldComponent>

export const Default: Story = {
	args: {
		nativeId: 'name',
		placeholder: 'Jane Doe',
		type: 'text',
		label: 'Name',
		hint: 'Please enter your name',
		hintDirection: 'bottom',
		showCleaner: false,
		isRequired: false
	}
}
