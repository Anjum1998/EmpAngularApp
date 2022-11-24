import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { SearchEmployComponent } from './search-employ/search-employ.component';
import { DeleteEmployComponent } from './delete-employ/delete-employ.component';
import { EditEmployComponent } from './edit-employ/edit-employ.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
