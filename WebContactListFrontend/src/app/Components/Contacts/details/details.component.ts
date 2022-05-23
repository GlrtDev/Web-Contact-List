import { Component, OnInit, Input } from '@angular/core';
import { Contacts } from '../../../Interfaces/contacts.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() public contact!: Contacts;
  public loggedIn: boolean = false;

  constructor(private jwtHelper: JwtHelperService) {}

  

  ngOnInit(): void {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.loggedIn = true;
    }
  }

}
