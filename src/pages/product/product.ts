import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from '../user/user'
import { HarvestPage } from '../harvest/harvest';
import { Product } from '../../Models/Product';
import { HarvestLandRepositoryProvider } from '../../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../../providers/harvest-land-factory/harvest-land-factory';
import { HarvestLand } from '../../Models/HarvestLand';

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

  product:Product;
  quantity: number;
  byQuantity: boolean = false;
  byWeight: boolean = false;
  harvestLand:HarvestLand;
  constructor(public navCtrl: NavController, public navParams: NavParams, public harvestLandRepository:HarvestLandRepositoryProvider, public harvestLandFactory:HarvestLandFactoryProvider) {
    
    this.product = this.navParams.get('product');
    if(this.product.pricingOption == 'q'){
      this.byQuantity = true;
    }else {
      this.byWeight = true;
    }
    
    this.harvestLandRepository.getHarvestLand(this.product.harvestLandID).subscribe(
      res => {
        this.harvestLand = this.harvestLandFactory.createHarvestLand(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  
  getHarvestInfo(product){
    console.log(this.harvestLand);
    this.navCtrl.push(HarvestPage, {harvestLand:this.harvestLand});
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

}
