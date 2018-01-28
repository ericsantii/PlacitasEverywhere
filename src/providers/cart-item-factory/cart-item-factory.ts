import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../../Models/CartItem';

/*
  Generated class for the CartItemFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartItemFactoryProvider {
  cartItem:CartItem;
  constructor(public http: HttpClient) {
    console.log('Hello CartItemFactoryProvider Provider');
  }

  createCartItem(product,quantity, buyerID){
      this.cartItem = {
        buyerID:buyerID,
	      product: product,
        numOfItems:quantity,
        _id:null
      }
      return this.cartItem


  }

  createCartItemWithAttributes(buyerID, product, quantity, _id){
    var cartItem = {
      buyerID:buyerID,
      product: product,
      numOfItems:quantity,
      _id:_id
    }
    return cartItem

}



  createCartItemFromJSON(cartItems){

    var arrayOfCartItems:CartItem[] = [];
    for(var cartItem of cartItems){
      arrayOfCartItems.push(this.createCartItemWithAttributes(cartItem.buyerID, cartItem.product, cartItem.numOfItems, cartItem._id));
    }
    return arrayOfCartItems;

  }

}
