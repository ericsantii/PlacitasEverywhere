import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from '../user/user'
import { HarvestPage } from '../harvest/harvest';
import { Product } from '../../Models/Product';
import { HarvestLandRepositoryProvider } from '../../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../../providers/harvest-land-factory/harvest-land-factory';
import { HarvestLand } from '../../Models/HarvestLand';
import { UserRepositoryProvider } from '../../providers/user-repository/user-repository';
import { UserFactoryProvider } from '../../providers/user-factory/user-factory';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public harvestLandRepository:HarvestLandRepositoryProvider, public harvestLandFactory:HarvestLandFactoryProvider, public userRepository: UserRepositoryProvider, public userFactory: UserFactoryProvider) {
    
    this.product = this.navParams.get('product');
    if(this.product.pricingOption == 'q'){
      this.byQuantity = true;
    }else {
      this.byWeight = true;
    }
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  
  getHarvestInfo(product){
    
    this.harvestLandRepository.getHarvestLand(this.product.harvestLandID).toPromise().then(
      res => {
        var harvestLand = this.harvestLandFactory.createHarvestLand(res);
        this.navCtrl.push(HarvestPage, {harvestLand: harvestLand});
      },
      err =>{
        console.log(err);
      }
    )
    
  }

  addToCart(product){
    //add to cart
  }

  goToSeller(sellerID){
    this.userRepository.getUser(this.product.sellerID).toPromise().then(
      res => {
        var seller = this.userFactory.createUser(res.firstName, res.lastName, res.userID,res.email,res.password,res.phone, res.pictureURI);
        console.log('seller',seller);
        this.navCtrl.push(UserPage, {seller: seller});
      },
      err =>{
        console.log(err);
      }
    )
    
  

  }

}
