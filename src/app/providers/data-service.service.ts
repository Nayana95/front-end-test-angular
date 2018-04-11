import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";

@Injectable()
export class DataServiceService {

  constructor(private http: Http) { }

  getJSON():  Observable<any>  {
    var dataurl = './assets/json/activity-data.json';
    return this.http.get(dataurl)
            .map(
              (res:any) => res.json(), 
              (err: any) => console.log(err));
            
  }

}
