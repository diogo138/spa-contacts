import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { StarsComponent } from './stars/stars.component';
import { ReplacePipe } from './replace-pipe/replace.pipe';
import { Router, RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    StarsComponent,
    ReplacePipe,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'contacts', component: ContactsListComponent },
      { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      { path: '**', component: Error404Component }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
