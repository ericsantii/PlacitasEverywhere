import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerPage } from '../seller/seller';
import { SellerService } from '../../providers/sellers-service-mock';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // selectedItem: any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  // produce: string[];
  sellers: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SellerService) {
      service.findAll().then(data => this.sellers = data);
    // // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');

    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];
    // this.produce = ['Mango','Coco','Aguacate','Limon','Toronja','Acerola','Quenepas','Yuca','Yautia','Calabaza'];
    // this.items = [];
    // for (let i = 0; i < 10; i++) {
    //   this.items.push({
    //     title: this.produce[i],
    //     note: 'Description',
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
    this.navCtrl.push(SellerPage, item);
  }
}
