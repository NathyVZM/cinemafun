import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms'

export function customMinLengthValidator(field: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const result = Validators.minLength(2)(control)

		if (result !== null) {
			const requiredLength = result['minlength']['requiredLength']
			return { minlength: { ...result, message: `${field} must have at least ${requiredLength} characters` } }
		}
		return null
	}
}
