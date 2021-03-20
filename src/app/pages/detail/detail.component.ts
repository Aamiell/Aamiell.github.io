import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import firebase from 'firebase/app';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public practices: Practice[];
  public practice: Practice;
  private idx: number;
  public user: firebase.User;
  
  constructor(private firedb: FirebasedbService, private router: Router,private activateRoute: ActivatedRoute, private fireauth: FirebaseauthService ) {

    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null) {
          this.router.navigate(["/practices"])
        } else {
          this.idx = Number(params['id']);
          //console.log(this.idx);
          this.firedb.getPractices().subscribe(
            (originalPractice: Practice[]) => {
              this.practice = originalPractice[this.idx];
              //if (this.practices.length > originalPractice.length) {
                //console.log("NO EXSISTEIX");
                //this.router.navigate(["/practices"])
              //}
            }
          )
        }
      }
    );
  }

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
  GoToHome() {
    this.router.navigate(['/home']);
  }
  GoToPracticesPrivate() {
    this.router.navigate(['/practices']);
  }
  GoToPracticesPublic() {
    this.router.navigate(['/public']);
  }
}
