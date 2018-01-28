import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HarvestLandFactoryProvider } from '../harvest-land-factory/harvest-land-factory';
import { HarvestLand } from '../../Models/HarvestLand';

/*
  Generated class for the HarvestLandRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HarvestLandRepositoryProvider {
  url:string;
  constructor(public http: Http, public harvestLandFactory: HarvestLandFactoryProvider) {
    this.url = 'http://24.48.230.114:3005';
    console.log('Hello HarvestLandRepositoryProvider Provider');
  }

  getHarvestLand(harvestLandID){
    
    return this.http.get(this.url + '/api/harvestLand/id/' + harvestLandID)
    .map((res) => res.json())
  
  }
  getHarvestLandsFromUser(userID){
    
    return this.http.get(this.url + '/api/harvestLands/seller/' + userID)
    .map((res) => res.json())
  
  }

  addHarvestLand(harvestLand:HarvestLand){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req= this.http.post(this.url + '/api/harvestLands', JSON.stringify(harvestLand), options)
    .map((res)=>res.json())
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error");
      });
  }

}
