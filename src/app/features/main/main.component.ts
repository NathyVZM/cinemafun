import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent, NavbarComponent, SidebarComponent } from '@components'

@Component({
	selector: 'cf-main',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, FooterComponent, SidebarComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.sass'
})
export class MainComponent {}

