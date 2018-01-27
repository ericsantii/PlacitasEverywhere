import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarvestPage } from '../harvest/harvest';
import { SellingPointPage } from '../selling-point/selling-point';
import { HarvestLandRepositoryProvider } from '../../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../../providers/harvest-land-factory/harvest-land-factory';
import { HarvestLand } from '../../Models/HarvestLand';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  user;
  harvestLands: HarvestLand[] = [];
  sellingPoints;
  reviews;

  constructor(public navCtrl: NavController, public navParams: NavParams, public harvestLandRepository: HarvestLandRepositoryProvider, public harvestLandFactory:HarvestLandFactoryProvider) {
    //load seller info
    this.user = this.navParams.get('seller');
    //load harvest Lands

    this.harvestLandRepository.getHarvestLandsFromUser(this.user.userID).toPromise().then(
      res => {
        this.harvestLands = this.harvestLandFactory.createHarvestLandsFromJSON(res);
      },
      err =>{
        console.log(err);
      }
    )


    //load selling points
      
    //load reviews
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  getHarvestInfo(harvestLand){
    this.navCtrl.push(HarvestPage, {harvestLand : harvestLand});
  }

  goToSellingPoint(sellingPoint){
    this.navCtrl.push(SellingPointPage, {sellingPoint : sellingPoint})

  }

  allowReview(){
    return (localStorage.getItem('loggedInID') != this.user.userID)
  }
}
