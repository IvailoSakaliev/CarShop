import {Component, OnInit} from "@angular/core";
import {AuthemticationServise} from "../../core/authentication.servise";
import { Registration } from "./reg";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'reg',
    templateUrl: './reg.component.html',
    providers: [AuthemticationServise]
})


export class RegistrationComponent{
    public user: Registration = new Registration()

    constructor()
    {
    
    }
    onSubmit(form: NgForm) {
        
      }
    
    
    
      

}