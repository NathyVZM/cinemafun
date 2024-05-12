import { Component } from '@angular/core'
import { MovieComponent } from '@components'
import { Movie } from '@models'

@Component({
	selector: 'cf-home',
	standalone: true,
	imports: [MovieComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	movies: Movie[] = [
		{
			id: 1,
			title: 'The Shawshank Redemption',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Drama'],
			runtime: 142,
			classification: {
				id: '1',
				classification: 'R',
				meaning: 'Restricted'
			}
		},
		{
			id: 2,
			title: 'The Godfather',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Crime', 'Drama'],
			runtime: 175,
			classification: {
				id: '2',
				classification: 'PG-13',
				meaning: 'Parents Strongly Cautioned'
			}
		},
		{
			id: 3,
			title: 'The Dark Knight',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Action', 'Crime', 'Drama'],
			runtime: 152,
			classification: {
				id: '3',
				classification: 'PG',
				meaning: 'Parental Guidance Suggested'
			}
		},
		{
			id: 4,
			title: 'The Lord of the Rings: The Return of the King',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 201,
			classification: {
				id: '3',
				classification: 'PG',
				meaning: 'Parental Guidance Suggested'
			}
		},
		{
			id: 5,
			title: 'Pulp Fiction',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Crime', 'Drama'],
			runtime: 154,
			classification: {
				id: '1',
				classification: 'G',
				meaning: 'General Audiences'
			}
		},
		{
			id: 6,
			title: "Schindler's List",
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Biography', 'Drama', 'History'],
			runtime: 195,
			classification: {
				id: '2',
				classification: 'PG-13',
				meaning: 'Parents Strongly Cautioned'
			}
		},
		{
			id: 7,
			title: 'The Lord of the Rings: The Fellowship of the Ring',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 178,
			classification: {
				id: '3',
				classification: 'PG',
				meaning: 'Parental Guidance Suggested'
			}
		},
		{
			id: 8,
			title: 'Forrest Gump',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Drama', 'Romance'],
			runtime: 142,
			classification: {
				id: '1',
				classification: 'G',
				meaning: 'General Audiences'
			}
		},
		{
			id: 9,
			title: 'Inception',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Sci-Fi'],
			runtime: 148,
			classification: {
				id: '2',
				classification: 'NC-17',
				meaning: 'No One 17 and Under Admitted'
			}
		},
		{
			id: 10,
			title: 'The Lord of the Rings: The Two Towers',
			poster: 'descargar.jpeg',
			banner: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 179,
			classification: {
				id: '2',
				classification: 'NC-17',
				meaning: 'No One 17 and Under Admitted'
			}
		}
	]
}
