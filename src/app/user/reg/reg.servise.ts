import {Injectable} from  "@angular/core";
import { HttpServise } from "../../core/http.servise";

@Injectable()
export class RegistrationServise
{
    constructor (public httpServise : HttpServise){}

    register (user)
    {
        return this.httpServise.post("auth/singup", user);
    }
}
