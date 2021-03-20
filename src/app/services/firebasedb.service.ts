import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Practice } from '../models/practice';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  getPractices(): Observable<Practice[]> {
    return this.firestore.collection<Practice>("practices").valueChanges({idField: 'id'});
  }

  savePractice(practice: Practice) {
    //console.log(practice);
    this.firestore.collection("practices").add ({
      title: practice.title,
      content: practice.content,
      tag: practice.tag,
      exersiceDate: practice.exersiceDate
    });
  }

  deletePractice(id: string) {
    this.firestore.collection<Practice>("practices").doc(id).delete();
  }

  modifyPractice(id: string, practice: Practice) {
    this.firestore.collection("practices").doc(id).update ({
    title: practice.title,
    content: practice.content,
    tag: practice.tag,
    exersiceDate: practice.exersiceDate
    });
  }

  searchPracticesByTag(tag: string): Observable<Practice[]> {
    return this.firestore.collection<Practice>("practices", ref => this.queryByTag(tag, ref)).valueChanges({idField: 'id'});
  }

  private queryByTag(tag: string, ref: any) {
    return ref.where("tag", "==", tag);
  }

  checkAcceptedUser(email: string): Observable<any[]> {
    return this.firestore.collection("accepted_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any) {
    return ref.where("email","==", email);
      
  }
}
