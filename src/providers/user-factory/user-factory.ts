import { Injectable } from '@angular/core';
import { User } from '../../Models/User';

/*
  Generated class for the UserFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserFactoryProvider {
  user: User;

  constructor() {
    
  }

  createUser(firstName:string, lastName:string, userID:string, email:string, password:string, phone:string, pictureURI:string){
    this.user = {
      firstName : firstName, 
      lastName:lastName, 
      userID: userID, 
      email:email, 
      password:password, 
      phone:phone, 
      pictureURI:pictureURI
    }
    return this.user;
  }


  
}
