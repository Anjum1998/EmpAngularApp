import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { SearchEmployComponent } from './search-employ/search-employ.component';
import { DeleteEmployComponent } from './delete-employ/delete-employ.component';
import { EditEmployComponent } from './edit-employ/edit-employ.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"search",
    component:SearchEmployComponent
  },
  {
    path:"edit",
    component:EditEmployComponent
  },
  {
    path:"delete",
    component:DeleteEmployComponent
  },
  {
    path:"add",
    component:AddEmployComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddEmployComponent,
    SearchEmployComponent,
    DeleteEmployComponent,
    EditEmployComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
