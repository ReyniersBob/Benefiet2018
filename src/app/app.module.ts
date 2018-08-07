import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BestellingFormComponent} from './bestelling-form/bestelling-form.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatRadioButton, MatRadioButton, MatRadioGroup,
  MatSelectModule,
  MatSnackBarModule, MatTableModule
} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BestellingFormComponent,
    LoginComponent,
    AdminComponent
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
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatRadioGroup,
    MatRadioButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
