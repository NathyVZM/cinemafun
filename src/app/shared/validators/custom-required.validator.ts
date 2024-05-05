import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms'

export function customRequiredValidator(field: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const result = Validators.required(control)

		if (result !== null) return { required: { ...result, message: `${field} is required` } }
		return null
	}
}
