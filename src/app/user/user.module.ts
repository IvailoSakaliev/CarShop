import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { RegistrationServise } from "./reg/reg.servise";
@NgModule({
    imports: [CommonModule],
    declarations : [UserComponent],
    providers:[RegistrationServise],
    exports: [UserComponent]
})

export class UserModule{}
