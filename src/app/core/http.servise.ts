import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class HttpServise{
    constructor (public http : Http){}

    post(url , data)
    {
        return this.http
            .post(url, JSON.stringify(data))
            .subscribe(res=> res.json());
    }
    
}