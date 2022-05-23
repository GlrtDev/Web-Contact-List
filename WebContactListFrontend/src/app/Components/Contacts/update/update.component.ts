import { Component, OnInit, Input } from '@angular/core';
import { Contacts } from '../../../Interfaces/contacts.model';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() public contact!: Contacts;
  constructor(private httpService: HttpService) { }

  public updateContact = () => {
    let route: string = 'https://localhost:44381/Contact';
    this.httpService.updateData(route + "/" + this.contact.id, this.contact)
      .subscribe((result) => {
        alert("update complete")
      },
        (error) => {
          console.error(error);
        });
  }

  onSubmit() {
    this.updateContact();
  }
  ngOnInit(): void {
  }

}
