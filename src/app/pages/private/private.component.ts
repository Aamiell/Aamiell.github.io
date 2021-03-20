import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  public user: firebase.User;

  constructor(private fireauth: FirebaseauthService, private router: Router) { }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        //console.log(originalUser);
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
