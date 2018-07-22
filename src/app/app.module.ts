import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BestellingFormComponent} from './bestelling-form/bestelling-form.component';
import {MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BestellingFormComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDN4xVbtO8-Oevx0u1Svg0iFi-hulxosAA",
      authDomain: "orderportal-ace32.firebaseapp.com",
      databaseURL: "https://orderportal-ace32.firebaseio.com",
      projectId: "orderportal-ace32",
      storageBucket: "orderportal-ace32.appspot.com",
      messagingSenderId: "103244401422"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
