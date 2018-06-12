import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Car } from './cars';

@Injectable()
export class CarServise {
  carList: AngularFireList<any>;
  car: Car = new Car();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.carList = this.firebase.list('car');
    return this.carList;
  }

  addCar(car : Car)
  {
    this.carList.push({
      name: car.name,
      engine : car.engine,
      model : car.model,
      year: car.year
    });
  }

  DeleteCar($key : string){
    this.carList.remove($key);
  }

}