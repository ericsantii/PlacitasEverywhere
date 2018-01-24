webpackJsonp([10],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartItems = [
            {
                productName: 'Aguacate',
                price: '$100.00',
                pictureURI: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg',
                pricingOption: 'q',
                harvestLandID: '543453',
                sellerID: 'Pepito',
                productID: 'product1',
                numOfItems: 2
            },
            {
                productName: 'Guineo',
                price: '$50.00',
                pictureURI: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg',
                pricingOption: 'q',
                harvestLandID: '453453',
                sellerID: 'Pepito',
                productID: 'product2',
                numOfItems: 2
            },
            {
                productName: 'Parcha',
                price: '$75.00',
                pictureURI: 'https://qph.ec.quoracdn.net/main-qimg-fa2ddc3dd7569564b3f77eeca059e045-c',
                pricingOption: 'q',
                harvestLandID: '453453',
                sellerID: 'Pepito',
                productID: 'product3',
                numOfItems: 2
            },
            {
                productName: 'China',
                price: '$25.00',
                pictureURI: 'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg',
                pricingOption: 'p',
                harvestLandID: '453453',
                sellerID: 'Pepitoo',
                productID: 'product4',
                numOfItems: 2
            }
        ];
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.deleteItemFromCart = function () {
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Cart</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <form *ngFor="let cartItem of cartItems">\n            <ion-item>\n                <ion-img style="width: 80px; height: 60px;" src={{cartItem.pictureURI}}></ion-img>\n              </ion-item>\n              <ion-item>\n                  <ion-label>{{cartItem.productName}} </ion-label>\n                  \n              </ion-item>\n              <ion-item>\n                  <ion-label>{{cartItem.price}}</ion-label>\n                  \n              </ion-item>\n              <ion-item>\n                  <ion-label>Quantity: </ion-label>\n                  <ion-input [(ngModel)]="quantity" name="quantity" type="number" placeholder="{{cartItem.numOfItems}}"></ion-input>\n              </ion-item>\n            <button ion-button (click)="updateQuantity(item)">Update Quantity</button>\n            <button ion-button (click)="deleteItem(item)">Delete Item from Cart</button>\n        </form>\n      \n      </ion-list>\n      <button ion-button (click)="checkOut(cartItems)">Checkout</button>\n      \n</ion-content>\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNewProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_factory_product_factory__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PostNewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostNewProductPage = (function () {
    function PostNewProductPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    PostNewProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostNewProductPage');
    };
    PostNewProductPage.prototype.postProduct = function (name, pictureURI, harvestLandID, sellingPointID, pricingOption, pricePerUnit) {
        this.product = {
            name: name,
            pictureURI: pictureURI,
            harvestLandID: harvestLandID,
            sellingPointID: sellingPointID,
            pricingOption: pricingOption,
            pricePerUnit: pricePerUnit,
        };
    };
    PostNewProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-new-product',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\post-new-product\post-new-product.html"*/'<!--\n\n  Generated template for the PostNewProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Post New Product</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="has-header">\n\n  <form (ngSubmit)="postProduct(productName, productType, pictureURI, harvestLandID, pricingOption, pricePerUnit)">\n\n    <ion-item>\n\n      <ion-label>Product Name</ion-label>\n\n      <ion-input type="text" #productName></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Product Type</ion-label>\n\n      <ion-select #productType>\n\n        <ion-option value="f">Fruit</ion-option>\n\n        <ion-option value="v">Vegetable</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Picture URI</ion-label>\n\n      <ion-input type="url" #pictureURI></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Harvest Land</ion-label>\n\n      <ion-select #harvestLandID>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pricing Option</ion-label>\n\n      <ion-select #pricingOption>\n\n        <ion-option value="q">By Quantity</ion-option>\n\n        <ion-option value="p">By Pounds</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Price by Unit</ion-label>\n\n      <ion-input type="number" #pricePerUnit></ion-input>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>Post Product</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\post-new-product\post-new-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */]])
    ], PostNewProductPage);
    return PostNewProductPage;
}());

//# sourceMappingURL=post-new-product.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellingPointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SellingPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellingPointPage = (function () {
    function SellingPointPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sellingPoint = this.navParams.get('sellingPoint');
    }
    SellingPointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellingPointPage');
    };
    SellingPointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selling-point',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\selling-point\selling-point.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{sellingPoint.name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    \n    <ion-img style="width: 200px; height: 100px;" src={{sellingPoint.pictureURI}}></ion-img>\n    <h1 style="color:#000000;">{{sellingPoint.name}}</h1>\n    \n    \n</ion-content>\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\selling-point\selling-point.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SellingPointPage);
    return SellingPointPage;
}());

//# sourceMappingURL=selling-point.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.products = [
            {
                productName: 'Aguacate',
                price: '$100.00',
                pictureURI: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg',
                pricingOption: 'q',
                harvestLandID: '543453',
                sellerID: 'Pepito'
            },
            {
                productName: 'Guineo',
                price: '$50.00',
                pictureURI: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg',
                pricingOption: 'q',
                harvestLandID: '453453',
                sellerID: 'Pepito'
            },
            {
                productName: 'Parcha',
                price: '$75.00',
                pictureURI: 'https://qph.ec.quoracdn.net/main-qimg-fa2ddc3dd7569564b3f77eeca059e045-c',
                pricingOption: 'q',
                harvestLandID: '453453',
                sellerID: 'Pepito'
            },
            {
                productName: 'China',
                price: '$25.00',
                pictureURI: 'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg',
                pricingOption: 'p',
                harvestLandID: '453453',
                sellerID: 'Pepitoo'
            }
        ];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.onCancel = function ($event) {
        //
    };
    SearchPage.prototype.onInput = function ($event) {
        //
    };
    SearchPage.prototype.openProductPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_product__["a" /* ProductPage */], item);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Search</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n  <ion-content padding="true" class="has-header">\n      <ion-searchbar\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n    <button ion-item *ngFor="let product of products" (click)="openProductPage({product : product})">\n        <ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n        {{product.productName}} \n        {{product.price}}\n    </button>\n    </ion-content>'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harvest_harvest__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPage = (function () {
    function ProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product = this.navParams.get('product');
        console.log(this.product);
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage.prototype.getHarvestInfo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__harvest_harvest__["a" /* HarvestPage */], {
            harvestLand: {
                name: 'My Posita',
                pictureURI: 'http://www.puertoricoexplore.com/uploads/small_finca.jpg',
            }
        });
    };
    ProductPage.prototype.addToCart = function (product) {
        //add to cart
    };
    ProductPage.prototype.goToSeller = function (sellerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */], {
            user: {
                firstName: 'Fernando',
                lastName: 'Ortiz',
                userID: 'Forzzark',
                pictureURI: 'sdsdfg'
            }
        });
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{product.productName}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-img style="width: 450px; height: 325px;" src={{product.pictureURI}}></ion-img>\n\n    <h1 style="color:#000000;">{{product.productName}}</h1>\n\n    <h4 style="color:#000000;">{{product.price}}</h4>\n\n    \n\n    <ion-item (click)="goToSeller({sellerID : \'Forzzark\'})">\n\n        <ion-label>Seller: {{product.sellerID}}</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="getHarvestInfo({})">\n\n        <ion-label>Harvest Land: {{product.harvestLandID}}</ion-label>\n\n    </ion-item>\n\n    <form (ngSubmit)="addToCart(product)">\n\n        <ion-item>\n\n            <ion-label> Qty:</ion-label>\n\n            <ion-input [(ngModel)]="quantity" name="quantity" type="number"></ion-input>\n\n        </ion-item>\n\n      <button ion-button type="submit" block>Add to Cart</button>\n\n    </form>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harvest_harvest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selling_point_selling_point__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = this.navParams.get('user');
        this.harvestLands = [
            {
                pictureURI: 'http://is4.mzstatic.com/image/thumb/Purple128/v4/55/a0/54/55a05489-286a-861d-0e6c-d2b68ef9cb89/source/1200x630bb.jpg',
                name: 'Mi tierra',
            },
            {
                pictureURI: 'http://is4.mzstatic.com/image/thumb/Purple128/v4/55/a0/54/55a05489-286a-861d-0e6c-d2b68ef9cb89/source/1200x630bb.jpg',
                name: 'Tu tierra',
            }
        ];
        this.sellingPoints = [
            {
                pictureURI: 'https://farm4.static.flickr.com/3784/19780434914_ffe4306723_b.jpg',
                name: 'Mi tienda',
            },
            {
                pictureURI: 'https://farm4.static.flickr.com/3784/19780434914_ffe4306723_b.jpg',
                name: 'Tu tienda',
            },
            this.reviews = [
                {
                    name: "Juan del Pueblo",
                    description: "Really liked your products, will recommend to a friend."
                },
                {
                    name: "Juana Dolores",
                    description: "Some of the Aguacates had worms in them."
                },
                {
                    name: "Yulliane Rios",
                    description: "Thanks for the service, I really enjoyed all of your products"
                }
            ]
        ];
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.getHarvestInfo = function (harvestLand) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__harvest_harvest__["a" /* HarvestPage */], { harvestLand: harvestLand });
    };
    UserPage.prototype.goToSellingPoint = function (sellingPoint) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selling_point_selling_point__["a" /* SellingPointPage */], { sellingPoint: sellingPoint });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title></ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n\n\n  <ion-content padding>\n\n    \n\n      <ion-img style="width: 450px; height: 325px;" src={{user.pictureURI}}></ion-img>\n\n      <h1 style="color:#000000;">{{user.firstName}} {{user.lastName}}</h1>\n\n      <h4 style="color:#000000;">UserID: {{user.userID}}</h4>\n\n      \n\n      \n\n      <h3 style="color:#000000;">Harvest Lands</h3>\n\n\n\n      <ion-list>\n\n          <ion-item *ngFor="let harvestLand of harvestLands" (click)="getHarvestInfo(harvestLand)">\n\n              <ion-label>{{harvestLand.name}}</ion-label>>\n\n          </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <h3 style="color:#000000;">Selling Points</h3>\n\n      <ion-list>\n\n          <ion-item *ngFor="let sellingPoint of sellingPoints" (click)="goToSellingPoint(sellingPoint)">\n\n              <ion-label>{{sellingPoint.name}}</ion-label>>\n\n          </ion-item>\n\n\n\n      </ion-list>\n\n      <ion-list>\n\n            <h3 style="color:#000000;">Reviews</h3>\n\n      </ion-list>\n\n            <ion-item *ngFor = "let review of reviews">\n\n                <ion-label>{{review.name}}</ion-label>\n\n                <ion-label>{{review.description}}</ion-label>\n\n            </ion-item>\n\n  </ion-content>'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = (function () {
    function SignInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.goToSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
        console.log('Sign Up Button Clicked.');
    };
    SignInPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-in\sign-in.html"*/'  <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  \n  <ion-content padding="true" class="has-header">\n    <h1 style="color:#000000;text-align:center;">Sign In</h1>\n    <form (ngSubmit)="signIn()">\n      <ion-item>\n        <ion-label> UserID</ion-label>\n        <ion-input [(ngModel)]="userID" name="userID" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label> Password</ion-label>\n          <ion-input [(ngModel)]="password" name="password" type="password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Sign In</button>\n    </form>\n    \n    <div>\n      <button ion-button (click)="goToSignUpPage()" block>Sign Up</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_factory_user_factory__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, userFactory, userRepository) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userFactory = userFactory;
        this.userRepository = userRepository;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signUp = function (userID, password, firstName, lastName, email, phone, pictureURI) {
        this.user = this.userFactory.createUser(firstName, lastName, userID, email, password, phone, pictureURI);
        this.userRepository.saveNewUser(this.user);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  \n  <ion-content padding="true" class="has-header">\n    <h1 style="color:#000000;text-align:center;">Sign Up</h1>\n    <form (ngSubmit)="signUp(userID.value, password.value, firstName.value, lastName.value, email.value, phone.value, pictureURI.value)">\n        <ion-item>\n          <ion-label>UserID</ion-label>\n          <ion-input type="text" #userID></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input type="password" #password></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>First Name</ion-label>\n            <ion-input type="text" #firstName></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Last Name</ion-label>\n            <ion-input type="text" #lastName></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Email</ion-label>\n            <ion-input type="email" #email></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Phone Number</ion-label>\n            <ion-input type="text" #phone></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>pictureURI</ion-label>\n          <ion-input type="url" #pictureURI></ion-input>\n      </ion-item>\n        <button ion-button type="submit" block>Sign Up</button>\n      </form>\n      \n    \n  </ion-content>'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_factory_user_factory__["a" /* UserFactoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		293,
		9
	],
	"../pages/harvest/harvest.module": [
		292,
		8
	],
	"../pages/post-new-product/post-new-product.module": [
		294,
		7
	],
	"../pages/product/product.module": [
		301,
		6
	],
	"../pages/search/search.module": [
		297,
		5
	],
	"../pages/seller/seller.module": [
		296,
		4
	],
	"../pages/selling-point/selling-point.module": [
		295,
		3
	],
	"../pages/sign-in/sign-in.module": [
		298,
		2
	],
	"../pages/sign-up/sign-up.module": [
		299,
		1
	],
	"../pages/user/user.module": [
		300,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProductFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductFactoryProvider = (function () {
    function ProductFactoryProvider(http) {
        this.http = http;
        console.log('Hello ProductFactoryProvider Provider');
    }
    ProductFactoryProvider.prototype.createProduct = function (name, pictureURI, harvestLandID, sellingPointID, pricingOption, pricePerUnit, sellerID) {
        this.product = {
            name: name,
            pictureURI: pictureURI,
            harvestLandID: harvestLandID,
            sellingPointID: sellingPointID,
            pricingOption: pricingOption,
            pricePerUnit: pricePerUnit
        };
    };
    ProductFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductFactoryProvider);
    return ProductFactoryProvider;
}());

//# sourceMappingURL=product-factory.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the UserFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserFactoryProvider = (function () {
    function UserFactoryProvider() {
    }
    UserFactoryProvider.prototype.createUser = function (firstName, lastName, userID, email, password, phone, pictureURI) {
        this.user = {
            firstName: firstName,
            lastName: lastName,
            userID: userID,
            email: email,
            password: password,
            phone: phone,
            pictureURI: pictureURI
        };
        return this.user;
    };
    UserFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserFactoryProvider);
    return UserFactoryProvider;
}());

//# sourceMappingURL=user-factory.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserRepositoryProvider = (function () {
    function UserRepositoryProvider(http) {
        this.http = http;
        console.log('Hello UserRepositoryProvider Provider');
        this.url = 'http://localhost:3005/api/user';
    }
    UserRepositoryProvider.prototype.saveNewUser = function (user) {
        console.log(JSON.stringify(user));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url, JSON.stringify(user), options).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error");
        });
    };
    UserRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserRepositoryProvider);
    return UserRepositoryProvider;
}());

//# sourceMappingURL=user-repository.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellerPage = (function () {
    function SellerPage(navCtrl, navParams) {
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seller',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\seller\seller.html"*/'<!--\n\n  Generated template for the SellerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Seller</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class = "seller">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h2>{{seller.name}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\seller\seller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SellerPage);
    return SellerPage;
}());

//# sourceMappingURL=seller.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_post_new_product_post_new_product__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_product_product__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_selling_point_selling_point__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_seller_seller__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_harvest_harvest__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_factory_user_factory__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_product_factory_product_factory__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_product_repository_product_repository__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_user_repository_user_repository__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_post_new_product_post_new_product__["a" /* PostNewProductPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_seller_seller__["a" /* SellerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_selling_point_selling_point__["a" /* SellingPointPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_harvest_harvest__["a" /* HarvestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/harvest/harvest.module#HarvestPageModule', name: 'HarvestPage', segment: 'harvest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-new-product/post-new-product.module#PostNewProductPageModule', name: 'PostNewProductPage', segment: 'post-new-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selling-point/selling-point.module#SellingPointPageModule', name: 'SellingPointPage', segment: 'selling-point', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller/seller.module#SellerPageModule', name: 'SellerPage', segment: 'seller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_post_new_product_post_new_product__["a" /* PostNewProductPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_seller_seller__["a" /* SellerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_selling_point_selling_point__["a" /* SellingPointPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_harvest_harvest__["a" /* HarvestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_user_factory_user_factory__["a" /* UserFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_factory_user_factory__["a" /* UserFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_post_new_product_post_new_product__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Sign In', component: __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__["a" /* SignInPage */] },
            { title: 'Post New Product', component: __WEBPACK_IMPORTED_MODULE_6__pages_post_new_product_post_new_product__["a" /* PostNewProductPage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */] },
            { title: 'Cart', component: __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@angular/compiler/src/util\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProductRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductRepositoryProvider = (function () {
    function ProductRepositoryProvider(http) {
        this.http = http;
        console.log('Hello ProductRepositoryProvider Provider');
        this.url = 'http://localhost:3005/api/products';
    }
    ProductRepositoryProvider.prototype.postP = function (product) {
        console.log("AtCreateAccount");
        var req = this.http.post(this.url, Object(__WEBPACK_IMPORTED_MODULE_2__angular_compiler_src_util__["stringify"])(product)).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error Ocurred");
        });
    };
    ProductRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductRepositoryProvider);
    return ProductRepositoryProvider;
}());

//# sourceMappingURL=product-repository.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HarvestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HarvestPage = (function () {
    function HarvestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.harvest = this.navParams.get('harvestLand');
    }
    HarvestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HarvestPage');
    };
    HarvestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-harvest',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\harvest\harvest.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{harvest.name}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-img style="width: 200px; height: 100px;" src={{harvest.pictureURI}}></ion-img>\n\n    <h1 style="color:#000000;">{{harvest.name}}</h1>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\harvest\harvest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HarvestPage);
    return HarvestPage;
}());

//# sourceMappingURL=harvest.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Placitas Everywhere</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Placitas Everywhere</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map