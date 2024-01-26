import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { StarsComponent } from './stars/stars.component';
import { ReplacePipe } from './replace-pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    StarsComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
