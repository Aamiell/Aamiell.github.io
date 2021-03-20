import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginfall: boolean = false;
  public acceptedUserError: boolean = false;

  constructor(private fireauth: FirebaseauthService, private firestore: FirebasedbService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        //Login correcte
        let email = user.user.email;
        this.firestore.checkAcceptedUser(email).pipe(take(1)).subscribe(
          (originalEmails: any[]) => {
            if (originalEmails.length == 1) {
              //Correcte
              this.loginfall = false;
              this.acceptedUserError = false;
              this.router.navigate(['/private']);
            } else {
              //Login error
              this.loginfall = true;
              this.acceptedUserError = true;
              this.fireauth.logout();
            }
          }
        );
      }
    ).catch(
      (error: any) => {
        //Error de credencials al login
      }
    )
  }
}