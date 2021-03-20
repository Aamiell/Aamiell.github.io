import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {

  public practices: Practice[];
  public practice: Practice;
  public tagFilter: string;
  constructor(private firedb: FirebasedbService, private router: Router) {
    this.firedb.getPractices().subscribe(
      (originalPractice: Practice[]) => {
        this.practices = originalPractice;
      }
    );
    this.practice = new Practice();
  }

  ngOnInit(): void {
  }

  seeDetails(i: number) {
    //console.log(i);
    this.practice = this.practices[i];
    //console.log(this.practice);
    this.router.navigate(["practices", i]);
  }

  deletePractice(i: number) {
    //console.log(this.practices[i]);
    this.firedb.deletePractice(this.practices[i].id);
  }

  modifyPractice(i: number) {
    this.practice = this.practices[i];
    this.router.navigate(["modify_practices", i]);
  }

  searchPracticesByTag() {
    this.firedb.searchPracticesByTag(this.tagFilter).subscribe(
      (queryPractices) => {
        this.practices = queryPractices;
        console.log(this.practices);
      }
    );
  }
}