import {Component} from "@angular/core";
import {Registration} from "./reg"
import { RegistrationServise } from "./reg.servise";

@Component({
    selector: 'reg',
    templateUrl: './reg.component.html'
})


export class RegistrationComponent{
    user = new Registration();

    constructor(public registerServise : RegistrationServise){}
    
    submitRegistration()
    {
        console.log(this.user);
    }
}