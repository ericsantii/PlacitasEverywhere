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
import { NewSellingPointPage } from '../pages/post-new-selling-point/post-new-selling-point';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HarvestPage } from '../pages/harvest/harvest';
import { UserFactoryProvider } from '../providers/user-factory/user-factory';
import { UserRepositoryProvider } from '../providers/user-repository/user-repository';
import { ProductFactoryProvider } from '../providers/product-factory/product-factory';
import { ProductRepositoryProvider } from '../providers/product-repository/product-repository';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { HarvestLandRepositoryProvider } from '../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../providers/harvest-land-factory/harvest-land-factory';
import { ReviewFactoryProvider } from '../providers/review-factory/review-factory';
import { ReviewRepositoryProvider } from '../providers/review-repository/review-repository';
import { ReviewFormComponent } from '../components/review-form/review-form';
import { SellingPointFactoryProvider } from '../providers/selling-point-factory/selling-point-factory';
import { SellingPointRepositoryProvider } from '../providers/selling-point-repository/selling-point-repository';
import { ScheduleFactoryProvider } from '../providers/schedule-factory/schedule-factory';
import { CartItemFactoryProvider } from '../providers/cart-item-factory/cart-item-factory';
import { CartItemRepositoryProvider } from '../providers/cart-item-repository/cart-item-repository';
import { NewHarvestLandPage } from '../pages/new-harvest-land/new-harvest-land';



@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    SignUpPage,
    PostNewProductPage,
    SearchPage,
    ProductPage,
    CartPage,
    UserPage,
    SellingPointPage,
    HarvestPage,
    ReviewFormComponent,
    NewSellingPointPage,
    NewHarvestLandPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    SignUpPage,
    PostNewProductPage,
    SearchPage,
    ProductPage,
    CartPage,
    UserPage,
    SellingPointPage,
    HarvestPage,
    NewSellingPointPage,
    NewHarvestLandPage
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
    ReviewFactoryProvider,
    ReviewRepositoryProvider,
    SellingPointFactoryProvider,
    SellingPointRepositoryProvider,
    ScheduleFactoryProvider,
    CartItemFactoryProvider,
    CartItemRepositoryProvider
  ],
  exports: [
    ReviewFormComponent
  ],
  }
)
export class AppModule {}
