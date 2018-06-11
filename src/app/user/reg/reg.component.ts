import {Component} from "@angular/core";
import {Registration} from "./reg"

@Component({
    selector: 'reg',
    templateUrl: './reg.component.html'
})


export class RegistrationComponent{
    user = new Registration();

    submitRegistration()
    {
        console.log(this.user);
    }
}