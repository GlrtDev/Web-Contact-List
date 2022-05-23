import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contacts, ContactsWithoutId } from '../Interfaces/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }

  public getData = (route: string) => {
    return this.httpService.get(route);
  }

  public addData = (route: string, body: ContactsWithoutId) => {
    return this.httpService.post(route, body);
  }
  public updateData = (route: string, body: Contacts) => {
    return this.httpService.put(route, body);
  }

  public deleteData = (route: string) => {
    return this.httpService.delete(route);
  }
}
