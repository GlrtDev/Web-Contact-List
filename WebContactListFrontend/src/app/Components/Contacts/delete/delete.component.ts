import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Contacts } from '../../../Interfaces/contacts.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() public contact!: Contacts;

  constructor(private httpService: HttpService) { }

  public deleteContact = (contact: Contacts) => {
    let route: string = 'https://localhost:44381/Contact';
    this.httpService.deleteData(route + "/" + contact.id)
      .subscribe((result) => {
        alert("udało się all")
      },
        (error) => {
          console.error(error);
        });
  }

  onSubmit() {
    this.deleteContact(this.contact);
  }

  ngOnInit() { }
}
