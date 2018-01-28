import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellingPoint } from '../../Models/SellingPoint';

/*
  Generated class for the SellingPointFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SellingPointFactoryProvider {
  sellingPoint:SellingPoint;


  constructor(public http: HttpClient) {
    console.log('Hello SellingPointFactoryProvider Provider');
  }

createSellingPoint(name,location,sellerID,products,schedule,pictureURI){
    this.sellingPoint = {
      name:name,
      location:location,
      sellerID:sellerID,
      products:products,
      schedule:schedule,
      pictureURI:pictureURI
    }
    return this.sellingPoint;
}

createSellingPointFromJSON(sellingPoints){

  var arrayOfSellingPoints:SellingPoint[] = [];
    for(var sellingPoint of sellingPoints){
      arrayOfSellingPoints.push(this.createSellingPoint(sellingPoint.name, sellingPoint.location, sellingPoint.sellerID, sellingPoint.products, sellingPoint.schedule,sellingPoint.pictureURI));
    }
    return arrayOfSellingPoints;

}

}
