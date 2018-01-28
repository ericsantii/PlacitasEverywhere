import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from '../../Models/CartItem';
import { CartItemFactoryProvider } from '../../providers/cart-item-factory/cart-item-factory';
import { CartItemRepositoryProvider } from '../../providers/cart-item-repository/cart-item-repository';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {


  cartItems:CartItem[] = [];
  

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartItemFactory: CartItemFactoryProvider, public cartItemRepository:CartItemRepositoryProvider) {
    
    cartItemRepository.getCartItemsByUserID(localStorage.getItem('loggedInID')).toPromise().then(
      res => {
        this.cartItems = cartItemFactory.createCartItemFromJSON(res)
      },
      err =>{
        console.log(err);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  updateQuantity(item, quantity){
    
    this.cartItemRepository.updateQuantity(item, quantity);

    
  }
  deleteItem(cartItem){
    this.cartItemRepository.deleteCartItem(cartItem);

  }
  

}
