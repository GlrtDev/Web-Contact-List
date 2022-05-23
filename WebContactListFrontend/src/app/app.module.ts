import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';  
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { AddComponent } from './Components/Contacts/add/add.component';
import { DeleteComponent } from './Components/Contacts/delete/delete.component';
import { DetailsComponent } from './Components/Contacts/details/details.component';
import { OverviewComponent } from './Components/Contacts/overview/overview.component';
import { UpdateComponent } from './Components/Contacts/update/update.component';
import { LoginComponent } from './Components/login/login.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    DetailsComponent,
    OverviewComponent,
    UpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44381"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
