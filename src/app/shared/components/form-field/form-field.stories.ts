import { Meta, StoryObj } from '@storybook/angular'
import { FormFieldComponent } from './form-field.component'

/**
 * A versatile **form field component** that supports various input types, appearances, and states, including required and disabled states.
 * It can also include leading and trailing icons, hints, and additional content like prefixes and postfixes.
 */
const meta: Meta<FormFieldComponent> = {
	component: FormFieldComponent,
	title: 'Form Field',
	tags: ['autodocs'],
	argTypes: {
		nativeId: {
			description: 'The **ID** attribute for the form field, used to uniquely identify the element.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		placeholder: {
			description: 'The **placeholder** text displayed inside the form field when it is empty.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		type: {
			description: 'Specifies the **type** of input control to display, such as text, email, password, or number.',
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
			description: 'The **label** text for the form field, providing a description or name for the input.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		iconLeading: {
			description: 'The **icon** displayed at the beginning of the form field.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		iconTrailing: {
			description: 'The **icon** displayed at the end of the form field.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		filler: {
			description: 'A **filler** text or content for the form field, often used for additional information or decoration.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		hint: {
			description: 'A **hint** text providing additional guidance or information about the form field.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		hintDirection: {
			description: 'Specifies the **direction** in which the hint text should appear relative to the form field.',
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
			description: 'A **prefix** text or content displayed before the form field value.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		postfix: {
			description: 'A **postfix** text or content displayed after the form field value.',
			type: 'string',
			control: 'text',
			table: {
				category: 'inputs',
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}
		},
		showCleaner: {
			description: 'Determines whether a **cleaner** button is displayed to clear the form field value.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		spellCheck: {
			description: 'Enables or disables **spell check** for the form field.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		autoCapitalize: {
			description: 'Enables or disables **auto-capitalization** for the form field.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		isRequired: {
			description: 'Indicates whether the form field is **required** for form submission.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		isDisabled: {
			description: 'Determines if the form field is **disabled** and non-interactive.',
			type: 'boolean',
			control: 'boolean',
			table: {
				category: 'inputs',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		formField: { table: { disable: true } },
		value: { table: { disable: true } },
		onNgModelChange: { table: { disable: true } },
		onChange: { table: { disable: true } },
		onTouched: { table: { disable: true } },
		writeValue: { table: { disable: true } },
		registerOnChange: { table: { disable: true } },
		registerOnTouched: { table: { disable: true } },
		setDisabledState: { table: { disable: true } }
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
		isRequired: false,
		isDisabled: false
	}
}
