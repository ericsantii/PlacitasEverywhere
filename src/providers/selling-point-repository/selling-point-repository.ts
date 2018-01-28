import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellingPoint } from '../../Models/SellingPoint';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/*
/*
  Generated class for the SellingPointRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SellingPointRepositoryProvider {
  url: string;
  constructor(public http: Http) {
    console.log('Hello SellingPointRepositoryProvider Provider');
    this.url = 'http://24.48.230.114:3005'
  }
  postSellingPoint(sellingPoint: SellingPoint) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req = this.http.post(this.url + 'sellingPoints', JSON.stringify(sellingPoint), options)
      .map((res) => res.json())
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error");
      });

  }

  getSellingPointsFromUser(userID){
    return this.http.get(this.url + '/api/sellingPoints/seller/' + userID)
    .map((res) => res.json())


  }

}
