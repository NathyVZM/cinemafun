export interface FormField {
	id: string
	formControlName: string
	type: 'text' | 'email' | 'password' | 'number'
	label: string
	placeholder: string
	icon: string
	isRequired: boolean
}
