import {Component} from "@angular/core";

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
  })

export class ContactsComponent{
  contact = "Contact";
  profileImagePath = "./assets/images/contactImage.jpg";
  adress = "бул. България 236 А - На къра";
  tel = "0898090909";
  facebook = "https://www.facebook.com/ivailo.sakaliev1";
  instagram = "https://www.instagram.com/ivailosakaliev/";
  github = "https://github.com/IvailoSakaliev";
}