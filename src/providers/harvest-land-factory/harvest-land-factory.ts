import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HarvestLand } from '../../Models/HarvestLand'
/*
  Generated class for the HarvestLandFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HarvestLandFactoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HarvestLandFactoryProvider Provider');
  }

  createHarvestLand(harvestLandJSON){
    var harvestLand:HarvestLand = {
      name: harvestLandJSON.name,
	    pictureURI:harvestLandJSON.pictureURI,
	    harvestLandID:harvestLandJSON.harvestLandID,
	    location:harvestLandJSON.location,
	    sellerID:harvestLandJSON.sellerID

    }
    return harvestLand;
  }

  createHarvestLandsFromJSON(harvestLands){
    var arrayOfHarvestLands:HarvestLand[] = [];
    for(var harvestLand of harvestLands){
      arrayOfHarvestLands.push(this.createHarvestLand(harvestLand));
    }
    return arrayOfHarvestLands;
  }

}
