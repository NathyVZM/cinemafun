import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ButtonComponent, FormFieldComponent } from '@components'

@Component({
	selector: 'cf-modal',
	standalone: true,
	imports: [ButtonComponent, FormFieldComponent, ReactiveFormsModule],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.sass'
})
export class ModalComponent {
	@Input() form!: FormGroup
	@Output() submitModal = new EventEmitter()

	onSubmit() {
		this.submitModal.emit(this.form)
	}
}

