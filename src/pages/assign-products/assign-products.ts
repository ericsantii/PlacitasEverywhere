import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellingPoint } from '../../Models/SellingPoint';
import { Product } from '../../Models/Product';
import { MySellingPointsPage } from '../my-selling-points/my-selling-points';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { ProductFactoryProvider } from '../../providers/product-factory/product-factory';
import { SellingPointRepositoryProvider } from '../../providers/selling-point-repository/selling-point-repository';

/**
 * Generated class for the AssignProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-products',
  templateUrl: 'assign-products.html',
})
export class AssignProductsPage {
    sellingP:SellingPoint;
    myproducts:Product[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public productsRepository: ProductRepositoryProvider, public productsFactory: ProductFactoryProvider, public sellingPointRepository:SellingPointRepositoryProvider) {
    this.sellingP = this.navParams.get('sellingPoint')
     productsRepository.getProductsFrom(localStorage.getItem('loggedInID')).toPromise().then(
       res=>{
         this.myproducts = productsFactory.createProductsFromJSON(res);
       },
       err => {
         console.log(err)
       }

     )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignProductsPage');
  }

  
  

  updateSellingPointProducts($event, i){
    if(this.sellingP.products == undefined){
      this.sellingP.products = [];
    }

    if($event.checked){
      this.sellingP.products.push(this.myproducts[i])

    }
    this.sellingPointRepository.updateSellingPoint(this.sellingP)
  }

}
