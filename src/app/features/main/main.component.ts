import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent, NavbarComponent, SidebarComponent } from '@components'

@Component({
	selector: 'cf-main',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss'
})
export class MainComponent {}
