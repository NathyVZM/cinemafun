import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ButtonComponent, FooterComponent, MovieComponent, NavbarComponent, SidebarComponent } from '@components'
import { Movie } from '@models'

@Component({
	selector: 'cf-main',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent, MovieComponent, ButtonComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss'
})
export class MainComponent {
	movies: Movie[] = [
		{
			id: '1',
			title: 'The Shawshank Redemption',
			poster: 'descargar.jpeg',
			genre: ['Drama'],
			runtime: 142,
			classification: '9.3'
		},
		{
			id: '2',
			title: 'The Godfather',
			poster: 'descargar.jpeg',
			genre: ['Crime', 'Drama'],
			runtime: 175,
			classification: '9.2'
		},
		{
			id: '3',
			title: 'The Dark Knight',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Crime', 'Drama'],
			runtime: 152,
			classification: '9.0'
		},
		{
			id: '4 ',
			title: 'The Lord of the Rings: The Return of the King',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 201,
			classification: '8.9'
		},
		{
			id: '5',
			title: 'Pulp Fiction',
			poster: 'descargar.jpeg',
			genre: ['Crime', 'Drama'],
			runtime: 154,
			classification: '8.9'
		},
		{
			id: '6',
			title: "Schindler's List",
			poster: 'descargar.jpeg',
			genre: ['Biography', 'Drama', 'History'],
			runtime: 195,
			classification: '8.9'
		},
		{
			id: '7',
			title: 'The Lord of the Rings: The Fellowship of the Ring',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 178,
			classification: '8.8'
		},
		{
			id: '8',
			title: 'Forrest Gump',
			poster: 'descargar.jpeg',
			genre: ['Drama', 'Romance'],
			runtime: 142,
			classification: '8.8'
		},
		{
			id: '9',
			title: 'Inception',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Sci-Fi'],
			runtime: 148,
			classification: '8.8'
		},
		{
			id: '10',
			title: 'The Lord of the Rings: The Two Towers',
			poster: 'descargar.jpeg',
			genre: ['Action', 'Adventure', 'Drama'],
			runtime: 179,
			classification: '8.7'
		}
	]
}
