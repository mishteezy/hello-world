import { Component, OnInit } from '@angular/core';
import { CitiesServise } from '../cities.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {
  form: any

  constructor(public citiesService: CitiesServise,
              public router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    })
  }

  submit() {
    const formData = {...this.form.value}

    this.citiesService.cities.push({name: formData.name, description: formData.description, image: formData.image, favorite: false, id: this.citiesService.cities.length + 1})
    
    this.router.navigate(['/'])
  }
}
