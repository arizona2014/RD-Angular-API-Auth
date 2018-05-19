import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { MenuComponent } from "./menu/menu.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from "./add-contact/add-contact.component";
import { ApiService } from "./shared/api.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactListComponent,
    ContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
