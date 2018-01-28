import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { PostNewProductPage } from '../pages/post-new-product/post-new-product';
import { SearchPage } from '../pages/search/search';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { SellingPointPage } from '../pages/selling-point/selling-point';
import { NewSellingPointPage } from '../pages/post-new-selling-point/post-new-selling-point';
import { NewHarvestLandPage } from '../pages/new-harvest-land/new-harvest-land';
import { MyProductsPage } from '../pages/my-products/my-products';
import { MySellingPointsPage } from '../pages/my-selling-points/my-selling-points';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign In', component: SignInPage },
      { title: 'Post New Product', component: PostNewProductPage },
      { title: 'Search', component: SearchPage },
      { title: 'Create New Selling Point', component: NewSellingPointPage },
      { title: 'New Harvest Land', component: NewHarvestLandPage },
      { title: 'Cart', component: CartPage },
      { title: 'My Products', component: MyProductsPage },
      { title: 'My Selling Points', component: MySellingPointsPage }
      

      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
