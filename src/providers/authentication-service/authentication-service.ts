import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../Models/User';
import { UserFactoryProvider } from '../user-factory/user-factory';
/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {
  url:string;

  constructor(public http: Http, public userFactory:UserFactoryProvider) {
    console.log('Hello AuthenticationServiceProvider Provider');
    this.url = 'http://24.48.230.114:3005';
  }

  authenticateUser(userID, password){
    var user:User;
    return this.http.get(this.url + '/api/user/id/' + userID)
    .map((res) => res.json())
    .subscribe(
      res =>{
        
      if(res.password == password){
        localStorage.setItem('loggedInID', userID)
      }
      else{
        //Password Incorrect
      }
    },
    err => {
      //User Doesnt exist
      console.log(err);
    }
    

    )
    
  }

}
