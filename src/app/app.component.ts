import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/types/Restaurant';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.initialize();
  }

  async initialize() {
    this.api.OnCreateRestaurantListener.subscribe((event: any) => {
      console.log(event);
      const newRestaurant = event.value.data.onCreateRestaurant;
      this.restaurants = [newRestaurant, ...this.restaurants];
    });

    const resp = await this.api.ListRestaurants();
    this.restaurants = resp.items.map(el => {
      return {
        city: el.city,
        description: el.description,
        id: el.id,
        name: el.name
      }
    });
  }

  click() {
    console.log('click');
    const restaurant: Restaurant = {
      city: 'Washington',
      description: 'RIP',
      name: 'Satellite',
    };
    this.api.CreateRestaurant(restaurant)
  }


}
