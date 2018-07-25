import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BestellingFormComponent} from './bestelling-form/bestelling-form.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BestellingFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
