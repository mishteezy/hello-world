import { Component } from '@angular/core';
import { CitiesServise } from '../cities.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(public citiesService: CitiesServise) {}
}