import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {LocalModule} from './country/local.module';
import {MaterialModule} from './shared/material/material.module';
 
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocalModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
