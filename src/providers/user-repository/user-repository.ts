import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../../Models/User";
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the UserRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserRepositoryProvider {
  url;
  constructor(public http: Http) {
    console.log('Hello UserRepositoryProvider Provider');
    this.url = 'http://localhost:3005/api/user';
  }

  saveNewUser(user:User){
    console.log(JSON.stringify(user));
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req= this.http.post(this.url , JSON.stringify(user), options).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error");
      });
  }

}


