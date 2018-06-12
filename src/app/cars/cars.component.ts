import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { CarServise } from './car.servise';
import { Car } from './cars';
@Component({
  selector: 'cars',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarServise]
})
export class CarComponent implements OnInit {
    car: Car = new Car();
  constructor(private carServise: CarServise) {
    carServise.car = this.car;
   }

  ngOnInit() {

  }

  onSubmit() {
    if (this.car.$key == null)
      this.carServise.addCar(this.car);
   
    // this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

}