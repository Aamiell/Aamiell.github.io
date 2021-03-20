import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-modify-practice',
  templateUrl: './modify-practice.component.html',
  styleUrls: ['./modify-practice.component.css']
})
export class ModifyPracticeComponent implements OnInit {

  public practices: Practice[];
  public practice: Practice;
  public idx: number;

  constructor(private firedb: FirebasedbService, private activateRoute: ActivatedRoute, private router: Router) {
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
  }

  modifyPractice(i: number) {
    this.firedb.modifyPractice(this.practice.id, this.practice);
    this.router.navigate(["practices"]);
  }
}
