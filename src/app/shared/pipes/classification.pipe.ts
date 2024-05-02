import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'classification',
	standalone: true
})
export class ClassificationPipe implements PipeTransform {
	transform(classification: string): string {
		return ` | ${classification}`
	}
}
