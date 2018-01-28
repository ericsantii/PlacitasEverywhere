import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the CartItemRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartItemRepositoryProvider {

  url:string;

  constructor(public http: Http) {
    console.log('Hello CartItemRepositoryProvider Provider');
    this.url = 'http://24.48.230.114:3005';
  }


  addProductToCart(cartItem){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req = this.http.post(this.url + '/api/cartItem' , JSON.stringify(cartItem), options)
    .map((res)=> res.json())
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });

  }

  getCartItemsByUserID(userID){
    return this.http.get(this.url + '/api/cartItem/buyerID/' + userID)
    .map((res) => res.json())
  }

  updateQuantity(cartItem, quantity){
    cartItem.numOfItems = quantity
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req = this.http.put(this.url + '/api/cartItem/' + cartItem._id, JSON.stringify(cartItem), options)
    .map((res)=> res.json())
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });
    
  }
  deleteCartItem(cartItem){
    console.log(cartItem)
    return this.http.delete(this.url + '/api/cartItem/' + cartItem._id)
    .map((res) => res.json()).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
