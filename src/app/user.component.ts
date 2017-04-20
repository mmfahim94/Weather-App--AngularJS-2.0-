import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
  	providers: [WeatherService]
})

export class UserComponent {
	city: string;
	temp: number;
	description: string;
	private date: any;

	constructor(private weatherService: WeatherService){
		this.date = new Date();
		setInterval(() => {
			this.date = new Date();
		}, 1000);

		this.weatherService.getWeather().subscribe(weather => {
			this.city = weather.name;
			this.temp = weather.main.temp;
			this.description = weather.weather[0].main;
		});
	}
}