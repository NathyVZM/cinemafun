import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ButtonComponent, FormFieldComponent } from '@components'
import { FormField } from '@models'

@Component({
	selector: 'cf-modal',
	standalone: true,
	imports: [ButtonComponent, FormFieldComponent, ReactiveFormsModule],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.sass'
})
export class ModalComponent {
	@Input() form!: FormGroup
	@Input() formId = ''
	@Input() formFields: FormField[] = []
	@Output() modalSubmit = new EventEmitter()

	onSubmit() {
		this.modalSubmit.emit(this.form)
	}

	isFieldRequired(field: string) {
		const controlValidators = this.form.get(field)?.validator

		if (controlValidators) {
			const validators = controlValidators({} as AbstractControl)
			return validators && validators['required']
		}

		return false
	}
}

