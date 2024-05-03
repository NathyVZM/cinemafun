import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import {
	ButtonComponent,
	FooterComponent,
	MovieComponent,
	NavbarComponent,
	SidebarComponent
} from '@components/components.index'

@Component({
	selector: 'cf-main',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent, MovieComponent, ButtonComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss'
})
export class MainComponent {}
