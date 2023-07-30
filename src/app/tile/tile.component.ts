import { Component } from '@angular/core';
import { CitiesServise } from '../cities.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  constructor(public citiesService: CitiesServise) {}
}
