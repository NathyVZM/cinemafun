import { Pipe, PipeTransform } from '@angular/core'
import { formatDate } from '@angular/common'

@Pipe({
	name: 'runtime',
	standalone: true
})
export class RuntimePipe implements PipeTransform {
	transform(runtime: number): string {
		return formatDate(runtime * 1000 * 60, "h 'hr' m 'min'", 'en-us', 'z') || ''
	}
}
