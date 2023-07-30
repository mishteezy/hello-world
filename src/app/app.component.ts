import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface City {
  id: number
  image: string
  name: string
  description: string
  favorite: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (public router: Router) {}
}
