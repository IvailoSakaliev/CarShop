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

  addCar(car : Car):void
  {
    this.carList.push({content : car, done: false});
  }

  DeleteCar($key : string){
    this.carList.remove($key);
  }

}