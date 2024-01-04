import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }

  locationsForm = this.formBuilder.group({
    city: ['', Validators.required]
  });

  weatherData: any;
  locations: any;
  selectedLocation: any;

  obterRegioes() {

    let city = String(this.locationsForm.get('city')?.value);

    this.weatherService.getLatLon(city)
      .subscribe(data => {
        this.locations = data;

        console.log(data)
      });
  }

  obterClima(location: any) {

    this.selectedLocation = location;

    this.weatherService.getWeather(location.lat, location.lon)
      .subscribe((data: any) => {
        this.weatherData = data;

        console.log(data);
      });
  }
}
