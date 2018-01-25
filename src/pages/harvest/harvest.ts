import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarvestLandRepositoryProvider } from '../../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLand } from '../../Models/HarvestLand';
import { HarvestLandFactoryProvider } from '../../providers/harvest-land-factory/harvest-land-factory';

/**
 * Generated class for the HarvestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-harvest',
  templateUrl: 'harvest.html',
})
export class HarvestPage {
    harvestLand: HarvestLand = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public harvestLandRepository:HarvestLandRepositoryProvider, public harvestLandFactory:HarvestLandFactoryProvider) {
    
    this.harvestLand = this.navParams.get('harvestLand');
    

    

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HarvestPage');
  }

}
