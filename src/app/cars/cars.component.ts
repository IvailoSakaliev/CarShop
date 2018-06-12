import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { CarServise } from './car.servise';
@Component({
  selector: 'cars',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarServise]
})
export class CarComponent implements OnInit {

  constructor(private carServise: CarServise) { }

  ngOnInit() {

  }

  onSubmit(cars: NgForm) {
    if (cars.value.$key == null)
      this.carServise.addCar(cars.value);
   
    // this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

}