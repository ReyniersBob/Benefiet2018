import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = '';
  password: string = '';


  constructor(private fire: AngularFireAuth, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }


  myLogin() {
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(this.email, this.password);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', this.fire.auth.currentUser.email);

        this.fire.authState.subscribe(auth => {
          console.log(auth);
          if (auth) {
            localStorage.setItem('uid', auth.uid);
          }
        });
        this.snackbar.open('login worked', 'close', {duration: 5000});
        // todo add navigation after succeeded
        // this.router.navigate(['app-bestelling-form']);
      }).catch(error => {
        // todo add popup when login denied
      console.error(error);
      this.snackbar.open('login denied', 'close', {duration: 5000});
    });
  }

}
