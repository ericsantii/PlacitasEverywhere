import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { PostNewProductPage } from '../pages/post-new-product/post-new-product';
import { SearchPage } from '../pages/search/search';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { UserPage } from '../pages/user/user';
import { SellingPointPage } from '../pages/selling-point/selling-point';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SellerPage } from '../pages/seller/seller';
import { HarvestPage } from '../pages/harvest/harvest';
import { UserFactoryProvider } from '../providers/user-factory/user-factory';
<<<<<<< HEAD
import { ProductFactoryProvider } from '../providers/product-factory/product-factory';
import { ProductRepositoryProvider } from '../providers/product-repository/product-repository';
=======
import { UserRepositoryProvider } from '../providers/user-repository/user-repository';
>>>>>>> c3443db2fca5c20121a761ce676ca24ad40e4cc4


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    PostNewProductPage,
    SearchPage,
    ProductPage,
    SellerPage,
    CartPage,
    UserPage,
    SellingPointPage,
    HarvestPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    PostNewProductPage,
    SearchPage,
    ProductPage,
    SellerPage,
    CartPage,
    UserPage,
    SellingPointPage,
    HarvestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    AccountsProvider,
    UserFactoryProvider,
    ProductFactoryProvider,
    ProductRepositoryProvider
=======
    UserFactoryProvider,
    UserRepositoryProvider
>>>>>>> c3443db2fca5c20121a761ce676ca24ad40e4cc4
  ]
})
export class AppModule {}
