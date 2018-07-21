import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestellingFormComponent } from './bestelling-form/bestelling-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BestellingFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
