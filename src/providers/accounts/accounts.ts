import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AccountsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountsProvider {

  url;
  account:any;

  constructor(public http: HttpClient) {
    console.log('Hello AccountsProvider Provider');
    this.url = 'http://206.248.103.138:3005/api/user';
  }

  createAccount(firstName:string, lastName:string, userID:string, email:string, password:string, phone:string, pictureURI:string){
    console.log("AtCreateAccount")
    
    const req = this.http.post(this.url, {
      firstName : firstName,
      lastName : lastName,
      UserID: userID,
      email : email,
      password : password,
      phone : phone,
      pictureURI : pictureURI
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error Ocurred");
      }
    )
  }
}
