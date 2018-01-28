import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarvestLandRepositoryProvider } from '../../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../../providers/harvest-land-factory/harvest-land-factory';

/**
 * Generated class for the NewHarvestLandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-harvest-land',
  templateUrl: 'new-harvest-land.html',
})
export class NewHarvestLandPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public harvestLandRepository:HarvestLandRepositoryProvider, public harvestLandFactory:HarvestLandFactoryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHarvestLandPage');
  }

  createHarvestLand(name, location, pictureURI, id){
    var harvestLand = this.harvestLandFactory.createHarvestLand({name: name, location:location, pictureURI:pictureURI, harvestLandID: id, sellerID: localStorage.getItem('loggedInID')})

    this.harvestLandRepository.addHarvestLand(harvestLand)
  }

}
