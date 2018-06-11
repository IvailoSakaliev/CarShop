import {NgModule, Component} from "@angular/core";
import {RouterModule, Routes} from  "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component"; 
import { ContactsComponent } from "./contact/contacts.component";
import {FormsModule} from "@angular/forms";
import { CarComponent } from "./cars/cars.component";
import {RegistrationComponent} from "./user/reg/reg.component";
import { HttpServise } from "./core/http.servise";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent},
    {path: 'cars', component: CarComponent},
    {path:'registration' ,component:RegistrationComponent}
];

@NgModule({
    declarations:    [
        HomeComponent,
        AboutComponent,
        ContactsComponent,
        CarComponent,
        RegistrationComponent
    ],
    imports: [RouterModule.forRoot(routes),
        FormsModule],
        providers: [HttpServise],
    exports: [RouterModule]
})

export class AppRoutesModule {}