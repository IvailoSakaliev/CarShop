import {Component} from "@angular/core";
import {Car} from "./cars";

@Component({
    selector:'carform',
    templateUrl: './car.component.html'

})
export class CarComponent{
    titleCars = "Cars";
    engines  =  [1.2, 1.4 , 1.6 , 1.8 , 2.0 , 4.0];

    car = new Car('','','',0);
}