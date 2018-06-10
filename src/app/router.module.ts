import {NgModule} from "@angular/core";
import {RouterModule, Routes} from  "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component"; 
import { ContactsComponent } from "./contact/contacts.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent}
];

@NgModule({
    declarations:    [
        HomeComponent,
        AboutComponent,
        ContactsComponent
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}