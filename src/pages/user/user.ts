import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HarvestPage } from '../harvest/harvest';

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
  harvestLands;
  sellingPoints;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.harvestLands = [
      {
        pictureURI : 'http://is4.mzstatic.com/image/thumb/Purple128/v4/55/a0/54/55a05489-286a-861d-0e6c-d2b68ef9cb89/source/1200x630bb.jpg',
        name: 'Mi tierra',

      },
      {
        pictureURI : 'http://is4.mzstatic.com/image/thumb/Purple128/v4/55/a0/54/55a05489-286a-861d-0e6c-d2b68ef9cb89/source/1200x630bb.jpg',
        name: 'Tu tierra',

      }
    ];
    this.sellingPoints = [
      {
        pictureURI : 'https://farm4.static.flickr.com/3784/19780434914_ffe4306723_b.jpg',
        name: 'Mi tienda',

      },
      {
        pictureURI : 'https://farm4.static.flickr.com/3784/19780434914_ffe4306723_b.jpg',
        name: 'Tu tienda',

      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  getHarvestInfo(harvestLand){
    this.navCtrl.push(HarvestPage, {harvestLand : harvestLand});
  }

}
