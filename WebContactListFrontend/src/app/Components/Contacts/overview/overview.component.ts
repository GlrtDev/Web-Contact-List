import { Component, OnInit } from '@angular/core';
// Pamiętajcie o imporcie odpowiednich składowych: model oraz serwis
import { Contacts } from '../../../Interfaces/contacts.model';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  public contacts: Contacts[] =  [];

  // w konstukturze definiujemy właściwość prywatną, która daje nam dostęp do
  // implementacji naszego serwisu - narazie w ograniczonej formie
  constructor(private httpService: HttpService) { }

  // wykorzystujemy implementację naszego serwisu, przekazujemy odpowiedni adres
  // naszego API a zarazem żadanej metody. Obsługujemy informację pomyślną oraz 
  // ewentualne błędy
  public getContacts = () => {
    let route: string = 'https://localhost:44381/Contact';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.contacts = result as Contacts[];
        console.info("get all complete");
      },
        (error) => {
          console.error(error);
        });
  }
  ngOnInit() {
    this.getContacts();
  }
}
