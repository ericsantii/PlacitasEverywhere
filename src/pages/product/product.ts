import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import {UserPage} from '../user/user'
=======
import { HarvestPage } from '../harvest/harvest';
>>>>>>> c4c1465668df63ac259504325a3edf934e47f47e

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product;
  quantity: number;
  harvestinf;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.harvestinf=[
      {
        landid: 1,
        name: 'My Backyard',
        picture : 'https://thumb1.shutterstock.com/display_pic_with_logo/139990/491150020/stock-photo-vegetable-garden-in-late-summer-herbs-flowers-and-vegetables-in-backyard-formal-garden-eco-491150020.jpg',
        location: 'Aguada'
      },
      {
        landid: 2,
        name: 'My Posa',
        picture : 'http://www.agardenpatch.com/skin1/images/2017/vegetable-garden.jpg',
        location: 'Aguadilla'
      },
      {
        landid: 3,
        name: 'My Posita',
        picture : 'http://www.puertoricoexplore.com/uploads/small_finca.jpg',
        location: 'Aguadilla'
      },
      {
        landid: 4,
        name: 'La Finca',
        picture : 'https://i.pinimg.com/474x/f5/23/53/f52353711ad2d543d49b25ef0cdba4c0--puerto-rico.jpg',
        location: 'Aguadilla'
      }


    ]
    this.product = this.navParams.get('product');
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  getHarvestInfo(item){
    this.navCtrl.push(HarvestPage,
      {item: {
        landid: 1,
        name: 'My Posita',
        picture : 'http://www.puertoricoexplore.com/uploads/small_finca.jpg',
        location: 'Aguadilla'

      }}
    
    
    );
  }

  addToCart(product){
    //add to cart
  }

  goToSeller(sellerID){
    this.navCtrl.push(UserPage, 
      {user: {
        firstName : 'Fernando',
        lastName : 'Ortiz',
        userID : 'Forzzark',
        pictureURI: 'sdsdfg'

      }}
  );

  }
  gotToHarvestLand(harvestLandID){


  }
}
