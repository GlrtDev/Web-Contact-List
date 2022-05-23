import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Contacts, ContactsWithoutId } from '../../../Interfaces/contacts.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public contact: ContactsWithoutId;

  constructor(private httpService: HttpService) {
    // W konstrukturze tworzymy model tzw. danych defaultowych
    // Zostaną one połączone z danymi wprowadzonymi przez użytkownika
    // Otwierając ekran tworzenia nowego ogłoszenia zrozumiecie mój zamysł
    // poniższych danych
    this.contact = {
      name: "",
      surname: "",
      email: "",
      password: "",
      phone: 0,
      birthDate: "",
      category: 0
    };

  }

  public addContact = () => {
    let route: string = 'https://localhost:44381/Contact';
    this.httpService.addData(route, this.contact)
      .subscribe((result) => {
        alert("contact added")
      },
        (error) => {
          console.error(error);
        });
  }

  onSubmit() {
    this.addContact();
  }
}
