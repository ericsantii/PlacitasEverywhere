import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  cartItems;
  

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cartItems = [

      {
        productName : 'Aguacate',
        price : '$100.00',
        pictureURI: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg',
        pricingOption : 'q',
        harvestLandID : '543453',
        sellerID: 'Pepito',
        productID: 'product1',
        numOfItems : 2
      },
      {
        productName : 'Guineo',
        price : '$50.00',
        pictureURI: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg',
        pricingOption : 'q',
        harvestLandID : '453453',
        sellerID: 'Pepito',
        productID: 'product2',
        numOfItems : 2
      },
      {
        productName : 'Parcha',
        price : '$75.00',
        pictureURI: 'https://qph.ec.quoracdn.net/main-qimg-fa2ddc3dd7569564b3f77eeca059e045-c',
        pricingOption : 'q',
        harvestLandID : '453453',
        sellerID: 'Pepito',
        productID: 'product3',
        numOfItems : 2
      },
      {
        productName : 'China',
        price : '$25.00',
        pictureURI : 'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg',
        pricingOption : 'p',
        harvestLandID : '453453',
        sellerID: 'Pepitoo',
        productID: 'product4',
        numOfItems : 2
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  deleteItemFromCart()
  {

  }

}
