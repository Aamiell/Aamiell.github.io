import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  public practices: Practice[];
  public practice: Practice;
  public tagFilter: string;
  public user: firebase.User;
  constructor(private firedb: FirebasedbService, private router: Router, private fireauth: FirebaseauthService) {
    this.firedb.getPractices().subscribe(
      (originalPractice: Practice[]) => {
        this.practices = originalPractice;
      }
    );
    this.practice = new Practice();
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
  seeDetails(i: number) {
    //console.log(i);
    this.practice = this.practices[i];
    //console.log(this.practice);
    this.router.navigate(["practices", i]);
  }
}
