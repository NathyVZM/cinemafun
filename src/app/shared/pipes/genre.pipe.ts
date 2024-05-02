import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'genre',
	standalone: true
})
export class GenrePipe implements PipeTransform {
	transform(genre: string[]): string {
		return genre.join(' / ')
	}
}
