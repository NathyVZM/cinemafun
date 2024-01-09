export interface FormField {
	id: string
	formControlName: string
	placeholder: string
	type: string
	label: string
	iconLeft: string
	iconRight?: string
	showCleaner?: boolean
	spellCheck?: boolean
	autoCapitalize?: boolean
}

