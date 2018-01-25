import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductPage} from '../product/product';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { ProductFactoryProvider } from '../../providers/product-factory/product-factory';
import { Product } from '../../Models/Product';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  products:Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public productRepository:ProductRepositoryProvider, public productFactory:ProductFactoryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onCancel($event){
    //

  }

    onInput(input){
      
      if(input != ''){
      this.productRepository.searchProductsMatching(input).subscribe(
        (res) => {
          this.products = this.productFactory.createProductsFromJSON(res);
          
        },
        err => {
          console.log("Error Ocurred");
        }
      );
    }
    
    }

    openProductPage(item){
      console.log(item)
      this.navCtrl.push(ProductPage, item);
    }
}
