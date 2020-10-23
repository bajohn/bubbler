import { Component, OnInit } from '@angular/core';
import { Restaurant, Circle } from 'src/types/Restaurant';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  restaurants: Restaurant[] = [];
  circles: Circle[] = [];

  readonly circleRadius = 50;
  circleDrag = false;
  idxFromId: { [key: number]: number } = {};
  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.initialize();
  }

  async initialize() {

    this.api.OnCreateCircleListener.subscribe((event: any) => {
      console.log(event);
      const newCircle = event.value.data.onCreateCircle;
      this.circles = [newCircle, ...this.circles];
    })

    const works = await this.api.Bubblerhandler('test');

    console.log('eh', works);
    this.api.OnUpdateCircleListener.subscribe((event: any) => {
      console.log(event);
      const newCircle = event.value.data.onUpdateCircle as Circle;
      const idx = this.idxFromId[newCircle.id];
      this.circles[idx].x = newCircle.x;
      this.circles[idx].y = newCircle.y;
    })


    const resp = await this.api.ListCircles();
    this.circles = resp.items.map((el, idx) => {
      this.idxFromId[el.id] = idx;
      return {
        x: el.x,
        y: el.y,
        id: el.id,
        mouseDown: false
      }
    });



  }

  createClick() {
    console.log('click');
    const circle: Circle = {
      x: 100,
      y: 100
    };
    this.api.CreateCircle(circle)
  }

  circleClickDown(id) {
    const idx = this.idxFromId[id];
    this.circles[idx].mouseDown = true;
  }
  circleClickUp(id) {
    const idx = this.idxFromId[id];
    this.circles[idx].mouseDown = false;
  }
  circleMouseMove(event: MouseEvent) {
    for (const circle of this.circles) {
      if (circle.mouseDown) {
        // circle.x = event.x;
        // circle.y = event.y;
        this.api.UpdateCircle({
          x: event.x,
          y: event.y,
          id: circle.id
        })

      }
    }

  }


}
