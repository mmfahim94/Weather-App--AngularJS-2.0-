import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  template: `
		<ul> 
			<li><a routerLink="/">Home</a></li>
			<li><a routerLink="/about">About</a></li>
			<li><a routerLink="/services">Our Services</a></li>
			<li><a routerLink="/customers">Our Customers</a></li>
		</ul>	
  		<router-outlet></router-outlet>
  	`
})

export class AppComponent { }

