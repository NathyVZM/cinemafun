export interface FormField {
	readonly id: string
	formControlName: string
	type: 'text' | 'email' | 'password' | 'number'
	label: string
	placeholder: string
	icon: string
	isRequired: boolean
	hint?: string
	prefix?: string
	postfix?: string
}
