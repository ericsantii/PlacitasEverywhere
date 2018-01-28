import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellingPoint } from '../../Models/SellingPoint';
import { Product } from '../../Models/Product';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myproducts = [
      {
        name: 'Aguacate',
        pictureURI:'https://www.organicfacts.net/wp-content/uploads/avocado.jpg',
        harvestLandID:'hL1',
        pricingOption:'p',
        pricePerUnit: 4,
        productType:'v',
        sellerID:'fdgd',
        _id:null
      },
      {
        name: 'Guineo',
        pictureURI:'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg',
        harvestLandID:'hL1',
        pricingOption:'p',
        pricePerUnit: 5,
        productType:'v',
        sellerID:'fdgd',
        _id:null
      },
      {
        name: 'Parcha',
        pictureURI:'https://qph.ec.quoracdn.net/main-qimg-fa2ddc3dd7569564b3f77eeca059e045-c',
        harvestLandID:'hL1',
        pricingOption:'q',
        pricePerUnit: 4,
        productType:'v',
        sellerID:'fdgd',
        _id:null
      }

    ]
     

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignProductsPage');
  }

  updateSellingPoint(products){
    this.sellingP = this.navParams.get('sellingPoint');
    this.sellingP.products = products; // assign array of products to selling point

  }

}
