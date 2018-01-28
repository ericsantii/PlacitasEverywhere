import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellingPoint } from '../../Models/SellingPoint';
import { Schedule } from '../../Models/Schedule';
import { AssignProductsPage } from '../assign-products/assign-products';
import { SellingPointRepositoryProvider } from '../../providers/selling-point-repository/selling-point-repository';
import { SellingPointFactoryProvider } from '../../providers/selling-point-factory/selling-point-factory';

/**
 * Generated class for the MySellingPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-selling-points',
  templateUrl: 'my-selling-points.html',
})
export class MySellingPointsPage {

  mySellingPoints;
  mySchedules: Schedule[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public sellingPointRepository:SellingPointRepositoryProvider, public sellingPointFactory:SellingPointFactoryProvider) {
    sellingPointRepository.getSellingPointsFromUser(localStorage.getItem('loggedInID')).toPromise().then(
        res=> {
          this.mySellingPoints = sellingPointFactory.createSellingPointFromJSON(res);
      }
    );
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySellingPointsPage');
  }

  assignProducts(sellingPoint){
    this.navCtrl.push(AssignProductsPage, {sellingPoint:sellingPoint})
  }
  deleteSellingPoint(sellingPoint){

    this.sellingPointRepository.deleteSellingPoint(sellingPoint);


  }

}
