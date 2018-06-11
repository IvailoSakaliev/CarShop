import {NgModule} from "@angular/core";
import {RouterModule, Routes} from  "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component"; 
import { ContactsComponent } from "./contact/contacts.component";
import {FormsModule} from "@angular/forms";
import { CarComponent } from "./cars/cars.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent},
    {path: 'cars', component: CarComponent}
];

@NgModule({
    declarations:    [
        HomeComponent,
        AboutComponent,
        ContactsComponent,
        CarComponent
    ],
    imports: [RouterModule.forRoot(routes),
        FormsModule],
    exports: [RouterModule]
})

export class AppRoutesModule {}