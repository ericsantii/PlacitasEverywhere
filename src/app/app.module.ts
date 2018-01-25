import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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
import { UserRepositoryProvider } from '../providers/user-repository/user-repository';
import { ProductFactoryProvider } from '../providers/product-factory/product-factory';
import { ProductRepositoryProvider } from '../providers/product-repository/product-repository';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { HarvestLandRepositoryProvider } from '../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../providers/harvest-land-factory/harvest-land-factory';


@NgModule({
  declarations: [
    MyApp,
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
    UserRepositoryProvider,
    UserFactoryProvider,
    ProductFactoryProvider,
    ProductRepositoryProvider,
    AuthenticationServiceProvider,
    HarvestLandRepositoryProvider,
    HarvestLandFactoryProvider,  
  ]
})
export class AppModule {}
