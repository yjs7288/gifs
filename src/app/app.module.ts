import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import{AppRoutingModule}from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    Pantalla1Component,
    Pantalla2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
