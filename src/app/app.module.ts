import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { PostNewProductPage } from '../pages/post-new-product/post-new-product';
import { SearchPage } from '../pages/search/search';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { UserPage } from '../pages/user/user';
import { SellingPointPage } from '../pages/selling-point/selling-point';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SellerPage } from '../pages/seller/seller';
import { SellerService } from '../providers/sellers-service-mock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignInPage,
    SignUpPage,
    PostNewProductPage,
    SearchPage,
    ProductPage,
    SellerPage,
    CartPage,
    UserPage,
    SellingPointPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignInPage,
    SignUpPage,
    PostNewProductPage,
    SearchPage,
    ProductPage,
    SellerPage,
    CartPage,
    UserPage,
    SellingPointPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SellerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
