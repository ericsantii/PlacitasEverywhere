import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerService } from '../../providers/sellers-service-mock';

/**
 * Generated class for the SellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller',
  templateUrl: 'seller.html',
})
export class SellerPage {
    // names: string[];
    // id : number[];
    // email:string[];
    // pnumber:string[];
    // sellers: Array<{name: string, id: number, email: string,pnumber:string}>;
    seller: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SellerService) {
  //   this.names = ['Eric','Fernando','Jose','Alejandro','Mauricio','Edgardo','Pedro','Teresa','Juana','Juanka'];
  //   this.id=[0,1,2,3,4,5,6,7,8,9];
  //   this.email=['asdi@gmail.com','josefeliciano@gmail.com','hope@hotmail.com','inso@hotmail.com','picabatata@gmail.com','elnegritoojosclaro@gmail.com','noriel@gmail.com','100pre@hotmail.com','picheo@gmail.com','mcdonal@hotmail.com'];
  //   this.pnumber =['343-234-3434','234-342-4343','787-465-6753','787-565-4543','787-656-5635','343-543-4534','345-543-2345','454-532-3453','453-454-3234','342-342-1234'];
  // for(let i=0;i<10;i++){
  //   this.sellers.push({
  //     name:this.names[i],
  //     id:this.id[i],
  //     email:this.email[i],
  //     pnumber:this.pnumber[i]
  //   });
    this.seller = this.navParams.data;
    service.findById(this.seller.id).then(
      seller => this.seller = seller
    );
    


  }
  



}
