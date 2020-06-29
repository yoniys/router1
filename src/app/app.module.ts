import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A1Component } from './non-nav/a1/a1.component';
import { A2Component } from './non-nav/a2/a2.component';
import { A3Component } from './non-nav/a3/a3.component';
import { StarListComponent } from './nav/star-list/star-list.component';
import { PersonListComponent } from './nav/person-list/person-list.component';
import { DbWarperComponent } from './nav/db-warper/db-warper.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    A3Component,
    StarListComponent,
    PersonListComponent,
    DbWarperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
