import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-create-practice',
  templateUrl: './create-practice.component.html',
  styleUrls: ['./create-practice.component.css']
})
export class CreatePracticeComponent implements OnInit {
  public practice: Practice;
  constructor(private firestore: AngularFirestore, private firedb: FirebasedbService, private router: Router) {
    this.practice = new Practice();
    }
  ngOnInit(): void {
  }

  savePractice() {
    //console.log(this.practice);
    this.firedb.savePractice(this.practice);
    this.router.navigate(["practices"]);
  }
}
