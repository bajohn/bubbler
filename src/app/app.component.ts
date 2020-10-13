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
  circleX = 100;
  circleY = 100;
  readonly circleRadius = 50;
  circleDrag = false;
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
      console.log(el);
      return {
        city: el.city,
        description: el.description,
        id: el.id,
        name: el.name,
        neighborhood: el.neighborhood
      }
    });
  }

  click() {
    console.log('click');
    const restaurant: Restaurant = {
      city: 'Washington',
      description: 'Arepas',
      name: 'The Royal',
      neighborhood: 'Shaw'
    };
    this.api.CreateRestaurant(restaurant)
  }

  circleClickDown() {
    this.circleDrag = true;
  }
  circleClickUp() {
    this.circleDrag = false;
  }
  circleMouseMove(event: MouseEvent) {
    if (this.circleDrag) {
      this.circleX = event.x;
      this.circleY = event.y - this.circleRadius;
    }

  }


}
