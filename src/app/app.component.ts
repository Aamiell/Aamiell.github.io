import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user: firebase.User;

  constructor(private router: Router, private fireauth: FirebaseauthService) {
  }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
        //console.log("----- DADES DE L'USUARI -----");
        //console.log(this.user);
        //console.log("-----------------------------");
      }
    )
  }
  logout() {
    this.fireauth.logout();
    this.router.navigate(['/home']);
  }
}