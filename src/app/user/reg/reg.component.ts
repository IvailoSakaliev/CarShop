import {Component, OnInit} from "@angular/core";
import {AuthemticationServise} from "../../core/authentication.servise";
import { Registration } from "./reg";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'reg',
    templateUrl: './reg.component.html',
    providers: [AuthemticationServise]
})


export class RegistrationComponent{
    public email: string;
    public password: string;
    constructor(public authService: AuthemticationServise, public route: Router, ) { }

    ngOnInit() {
    }

    onRegister() {
        this.authService.register(this.email, this.password);
        this.route.navigate(['/login']);
    }
    
    
    
      

}