import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private _data: any;
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data) {
    console.log("logged");
    console.log(data);
    this.myMethodSubject.next(data);
  }


  // set data(value) {
  //   this._data = value;
  // }

  // get data(): any {
  //   return this._data;
  // }

  // sendData(){
  //     return this._data;
  // }

}
