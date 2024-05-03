import { Component } from '@angular/core'
import { MovieComponent } from '@components/components.index'
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
			id: '1',
			title: 'The Shawshank Redemption',
			poster: 'descargar.jpeg',
			genre: ['Drama'],
			runtime: 142,
			classification: 'R'
		},
		{
			id: '2',
			title: 'The Godfather',
			poster: 'descargar.jpeg',
			genre: ['Crime', 'Drama'],
			runtime: 175,
			classification: 'PG-13'
		},
		{
			id: '3',
			title: 'The Dark Knight',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Crime', 'Drama'],
			runtime: 152,
			classification: 'PG'
		},
		{
			id: '4 ',
			title: 'The Lord of the Rings: The Return of the King',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 201,
			classification: 'PG'
		},
		{
			id: '5',
			title: 'Pulp Fiction',
			poster: 'descargar.jpeg',
			genre: ['Crime', 'Drama'],
			runtime: 154,
			classification: 'G'
		},
		{
			id: '6',
			title: "Schindler's List",
			poster: 'descargar.jpeg',
			genre: ['Biography', 'Drama', 'History'],
			runtime: 195,
			classification: 'PG-13'
		},
		{
			id: '7',
			title: 'The Lord of the Rings: The Fellowship of the Ring',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 178,
			classification: 'PG'
		},
		{
			id: '8',
			title: 'Forrest Gump',
			poster: 'descargar.jpeg',
			genre: ['Drama', 'Romance'],
			runtime: 142,
			classification: 'G'
		},
		{
			id: '9',
			title: 'Inception',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Sci-Fi'],
			runtime: 148,
			classification: 'NC-17'
		},
		{
			id: '10',
			title: 'The Lord of the Rings: The Two Towers',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 179,
			classification: 'NC-17'
		}
	]
}
