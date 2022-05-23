import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OverviewComponent } from './Components/Contacts/overview/overview.component'
import { AddComponent } from './Components/Contacts/add/add.component'
import { DetailsComponent } from './Components/Contacts/details/details.component'
import { UpdateComponent } from './Components/Contacts/update/update.component'
import { DeleteComponent } from './Components/Contacts/delete/delete.component'
import { LoginComponent } from './Components/login/login.component'

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'add', component: AddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: DetailsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
