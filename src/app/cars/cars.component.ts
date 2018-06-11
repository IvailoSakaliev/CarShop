import {Component} from "@angular/core";
import {Car} from "./cars";

@Component({
    selector:'carform',
    templateUrl: './car.component.html',
})
export class CarComponent{
    titleCars = "Cars";

    car = new Car('','','',0);

    submitCar()
    {
        console.log(this.car);
    }
}