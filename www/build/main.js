webpackJsonp([15],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_repository_product_repository__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_factory_product_factory__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_selling_point_repository_selling_point_repository__ = __webpack_require__(48);
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
 * Generated class for the AssignProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignProductsPage = (function () {
    function AssignProductsPage(navCtrl, navParams, productsRepository, productsFactory, sellingPointRepository) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsRepository = productsRepository;
        this.productsFactory = productsFactory;
        this.sellingPointRepository = sellingPointRepository;
        this.sellingP = this.navParams.get('sellingPoint');
        productsRepository.getProductsFrom(localStorage.getItem('loggedInID')).toPromise().then(function (res) {
            _this.myproducts = productsFactory.createProductsFromJSON(res);
        }, function (err) {
            console.log(err);
        });
    }
    AssignProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignProductsPage');
    };
    AssignProductsPage.prototype.updateSellingPointProducts = function ($event, i) {
        if (this.sellingP.products == undefined) {
            this.sellingP.products = [];
        }
        if ($event.checked) {
            this.sellingP.products.push(this.myproducts[i]);
        }
        this.sellingPointRepository.updateSellingPoint(this.sellingP);
    };
    AssignProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assign-products',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\assign-products\assign-products.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Assign Products</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <button ion-item *ngFor="let product of myproducts" (click)="openProductPage({product : product})">\n      ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n      {{product.name}} \n      {{product.pricePerUnit}}\n  </button> -->\n\n<ion-content padding>\n\n  <ion-list *ngFor = "let product of myproducts; let i = index">\n      <ion-item >\n        <ion-label> {{product.name}} </ion-label>\n        <ion-checkbox (ionChange) = "updateSellingPointProducts($event, i)"></ion-checkbox>\n      </ion-item>\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\assign-products\assign-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_selling_point_repository_selling_point_repository__["a" /* SellingPointRepositoryProvider */]])
    ], AssignProductsPage);
    return AssignProductsPage;
}());

//# sourceMappingURL=assign-products.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_product_update_product__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_factory_product_factory__ = __webpack_require__(36);
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
 * Generated class for the MyProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProductsPage = (function () {
    function MyProductsPage(navCtrl, navParams, productRepository, productFactory) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productRepository = productRepository;
        this.productFactory = productFactory;
        this.productRepository.getProductsFrom(localStorage.getItem('loggedInID')).toPromise().then(function (res) {
            _this.myproducts = _this.productFactory.createProductsFromJSON(res);
        }, function (err) {
            console.log("Error Ocurred");
        });
    }
    MyProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProductsPage');
    };
    MyProductsPage.prototype.updateProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__update_product_update_product__["a" /* UpdateProductPage */], { producto: product });
    };
    MyProductsPage.prototype.deleteProduct = function (product) {
        this.productRepository.deleteProduct(product);
    };
    MyProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-products',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\my-products\my-products.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Products</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <button ion-item *ngFor="let product of myproducts" (click)="openProductPage({product : product})">\n      ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n      {{product.name}} \n      {{product.pricePerUnit}}\n  </button> -->\n\n<ion-content padding>\n\n  <ion-list>\n    <form *ngFor="let product of myproducts">\n      <ion-item>\n        <ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{product.name}} </ion-label>\n        <ion-label>${{product.pricePerUnit}} </ion-label>\n        <ion-label>per {{product.pricingOption }} </ion-label>\n        \n\n      </ion-item>\n      <button ion-button (click)="updateProduct(product)">Update Info</button>\n      <button ion-button (click)="deleteProduct(product)">Delete product from my list</button>\n    </form>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\my-products\my-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */]])
    ], MyProductsPage);
    return MyProductsPage;
}());

//# sourceMappingURL=my-products.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_factory_product_factory__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__ = __webpack_require__(35);
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
 * Generated class for the UpdateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateProductPage = (function () {
    function UpdateProductPage(navCtrl, navParams, productFactory, productRepository) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productFactory = productFactory;
        this.productRepository = productRepository;
        this.product = this.navParams.get('producto');
    }
    UpdateProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateProductPage');
    };
    UpdateProductPage.prototype.updateProduct = function (name, type, pictureURI, harvestLand, pricingOption, pricePerUnit) {
        var newProduct = this.productFactory.createProduct(name, pictureURI, harvestLand, pricingOption, pricePerUnit, type, localStorage.getItem('loggedInID'), this.product._id);
        this.productRepository.updateProduct(newProduct);
    };
    UpdateProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-product',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\update-product\update-product.html"*/'<!--\n  Generated template for the PostNewProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Update</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding="true" class="has-header">\n  <form (ngSubmit)="updateProduct(productName.value, productType.value, pictureURI.value, harvestLandID.value, pricingOption.value, pricePerUnit.value)">\n    <ion-item>\n      <ion-label>Product Name</ion-label>\n      <ion-input type="text" [(ngModel)]="product.name" name = "product_name" #productName></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Product Type</ion-label>\n      <ion-select [(ngModel)]="product.productType" name = "product_type" #productType>\n        <ion-option value="f">Fruit</ion-option>\n        <ion-option value="v">Vegetable</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Picture URI</ion-label>\n      <ion-input type="text" [(ngModel)]="product.pictureURI" name = "product_URI" #pictureURI required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Harvest Land</ion-label>\n      <ion-select [(ngModel)]="product.harvestLandID" name = "product_harvest" #harvestLandID>\n          <ion-option value="hL1">HarvestLand1</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pricing Option</ion-label>\n      <ion-select [(ngModel)]="product.pricingOption" name = "product_pricing"#pricingOption>\n        <ion-option value="q">By Quantity</ion-option>\n        <ion-option value="p">By Pounds</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Price by Unit</ion-label>\n      <ion-input type="number" [(ngModel)]="product.pricePerUnit" name = "product_ppu" #pricePerUnit></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Update Product</button>\n  </form>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\update-product\update-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */]])
    ], UpdateProductPage);
    return UpdateProductPage;
}());

//# sourceMappingURL=update-product.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_item_factory_cart_item_factory__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_item_repository_cart_item_repository__ = __webpack_require__(90);
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
    function CartPage(navCtrl, navParams, cartItemFactory, cartItemRepository) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartItemFactory = cartItemFactory;
        this.cartItemRepository = cartItemRepository;
        this.cartItems = [];
        cartItemRepository.getCartItemsByUserID(localStorage.getItem('loggedInID')).toPromise().then(function (res) {
            _this.cartItems = cartItemFactory.createCartItemFromJSON(res);
        }, function (err) {
            console.log(err);
        });
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.updateQuantity = function (item, quantity) {
        this.cartItemRepository.updateQuantity(item, quantity);
    };
    CartPage.prototype.deleteItem = function (cartItem) {
        this.cartItemRepository.deleteCartItem(cartItem);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Cart</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <form *ngFor="let cartItem of cartItems">\n            <ion-item>\n                <ion-img style="width: 80px; height: 60px;" src={{cartItem.product.pictureURI}}></ion-img>\n              </ion-item>\n              <ion-item>\n                  <ion-label>{{cartItem.product.name}} </ion-label>\n                  \n              </ion-item>\n              <ion-item>\n                  <ion-label>{{cartItem.product.pricePerUnit}}</ion-label>\n                  \n              </ion-item>\n              <ion-item>\n                  <ion-label>Quantity: </ion-label>\n                  <ion-input #quantity name="quantity" type="number" placeholder="{{cartItem.numOfItems}}"></ion-input>\n              </ion-item>\n            <button ion-button (click)="updateQuantity(cartItem, quantity.value)">Update Quantity</button>\n            <button ion-button (click)="deleteItem(cartItem)">Delete Item from Cart</button>\n        </form>\n      \n      </ion-list>\n      <button ion-button (click)="checkOut(cartItems)">Checkout</button>\n      \n</ion-content>\n'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cart_item_factory_cart_item_factory__["a" /* CartItemFactoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_cart_item_repository_cart_item_repository__["a" /* CartItemRepositoryProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySellingPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assign_products_assign_products__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_selling_point_repository_selling_point_repository__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_selling_point_factory_selling_point_factory__ = __webpack_require__(54);
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
 * Generated class for the MySellingPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MySellingPointsPage = (function () {
    function MySellingPointsPage(navCtrl, navParams, sellingPointRepository, sellingPointFactory) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sellingPointRepository = sellingPointRepository;
        this.sellingPointFactory = sellingPointFactory;
        sellingPointRepository.getSellingPointsFromUser(localStorage.getItem('loggedInID')).toPromise().then(function (res) {
            _this.mySellingPoints = sellingPointFactory.createSellingPointFromJSON(res);
        });
    }
    MySellingPointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MySellingPointsPage');
    };
    MySellingPointsPage.prototype.assignProducts = function (sellingPoint) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assign_products_assign_products__["a" /* AssignProductsPage */], { sellingPoint: sellingPoint });
    };
    MySellingPointsPage.prototype.deleteSellingPoint = function (sellingPoint) {
        this.sellingPointRepository.deleteSellingPoint(sellingPoint);
    };
    MySellingPointsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-selling-points',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\my-selling-points\my-selling-points.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Selling Points</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <button ion-item *ngFor="let product of myproducts" (click)="openProductPage({product : product})">\n      ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n      {{product.name}} \n      {{product.pricePerUnit}}\n  </button> -->\n\n<ion-content padding>\n\n  <ion-list>\n    <form *ngFor="let spoint of mySellingPoints">\n      <ion-item>\n        <ion-img style="width: 80px; height: 60px;" src={{spoint.pictureURI}}></ion-img>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{spoint.name}} </ion-label>\n\n      </ion-item>\n      <button ion-button (click)="assignProducts(spoint)">Assign Products to Selling Point</button>\n      <button ion-button (click)="deleteSellingPoint(spoint)">Delete Selling Point</button>\n    </form>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\my-selling-points\my-selling-points.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_selling_point_repository_selling_point_repository__["a" /* SellingPointRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_selling_point_factory_selling_point_factory__["a" /* SellingPointFactoryProvider */]])
    ], MySellingPointsPage);
    return MySellingPointsPage;
}());

//# sourceMappingURL=my-selling-points.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNewProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_factory_product_factory__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_harvest_land_repository_harvest_land_repository__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
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
 * Ionic pages and navigation.caca
 */
var PostNewProductPage = (function () {
    function PostNewProductPage(navCtrl, navParams, productFactory, productRepository, harvestLandRepository, harvestLandFactory) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productFactory = productFactory;
        this.productRepository = productRepository;
        this.harvestLandRepository = harvestLandRepository;
        this.harvestLandFactory = harvestLandFactory;
        this.userHarvestLands = [];
        this.harvestLandRepository.getHarvestLandsFromUser(localStorage.getItem('loggedInID')).toPromise().then(function (res) {
            _this.userHarvestLands = _this.harvestLandFactory.createHarvestLandsFromJSON(res);
            console.log('userharvestlands:', _this.userHarvestLands);
        }, function (err) {
            console.log(err);
        });
        console.log(this.userHarvestLands);
    }
    PostNewProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostNewProductPage');
    };
    PostNewProductPage.prototype.postProduct = function (name, productType, pictureURI, harvestLandID, pricingOption, pricePerUnit) {
        this.product = this.productFactory.createProduct(name, pictureURI, harvestLandID, pricingOption, pricePerUnit, productType, localStorage.getItem('loggedInID'), null);
        this.productRepository.postProduct(this.product);
    };
    PostNewProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-new-product',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\post-new-product\post-new-product.html"*/'<!--\n\n  Generated template for the PostNewProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Post New Product</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="has-header">\n\n  <form (ngSubmit)="postProduct(productName.value, productType.value, pictureURI.value, harvestLandID.value, pricingOption.value, pricePerUnit.value)">\n\n    <ion-item>\n\n      <ion-label>Product Name</ion-label>\n\n      <ion-input type="text" #productName></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Product Type</ion-label>\n\n      <ion-select #productType>\n\n        <ion-option value="f">Fruit</ion-option>\n\n        <ion-option value="v">Vegetable</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Picture URI</ion-label>\n\n      <ion-input type="url" #pictureURI></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Harvest Land</ion-label>\n\n      <ion-select #harvestLandID>\n\n          <ion-option *ngFor="let harvestLand of userHarvestLands" value = {{harvestLand.harvestLandID}}>{{harvestLand.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pricing Option</ion-label>\n\n      <ion-select #pricingOption>\n\n        <ion-option value="q">By Quantity</ion-option>\n\n        <ion-option value="p">By Pounds</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Price by Unit</ion-label>\n\n      <ion-input type="number" #pricePerUnit></ion-input>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>Post Product</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\post-new-product\post-new-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_harvest_land_repository_harvest_land_repository__["a" /* HarvestLandRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */]])
    ], PostNewProductPage);
    return PostNewProductPage;
}());

//# sourceMappingURL=post-new-product.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHarvestLandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_harvest_land_repository_harvest_land_repository__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
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
 * Generated class for the NewHarvestLandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewHarvestLandPage = (function () {
    function NewHarvestLandPage(navCtrl, navParams, harvestLandRepository, harvestLandFactory) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.harvestLandRepository = harvestLandRepository;
        this.harvestLandFactory = harvestLandFactory;
    }
    NewHarvestLandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewHarvestLandPage');
    };
    NewHarvestLandPage.prototype.createHarvestLand = function (name, location, pictureURI, id) {
        var harvestLand = this.harvestLandFactory.createHarvestLand({ name: name, location: location, pictureURI: pictureURI, harvestLandID: id, sellerID: localStorage.getItem('loggedInID') });
        this.harvestLandRepository.addHarvestLand(harvestLand);
    };
    NewHarvestLandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-harvest-land',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\new-harvest-land\new-harvest-land.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Post New Harvest Land</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <form (ngSubmit)="createHarvestLand(name.value, location.value, pictureURI.value, id.value)" name="newHarvestLandForm">\n    <ion-item>\n      <ion-label>Harvest Land Name</ion-label>\n      <ion-input type="text" #name></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Harvest Land Location</ion-label>\n      <ion-input type="text" #location></ion-input>\n    </ion-item>\n    <ion-item>\n\n\n      <ion-label>Harvest Land Picture</ion-label>\n      <ion-input type="text" #pictureURI></ion-input>\n\n\n    </ion-item>\n    <ion-item>\n        <ion-label>Harvest Land ID</ion-label>\n        <ion-input type="text" #id></ion-input>\n    </ion-item>\n    \n    <button ion-button type="submit" block>Add Harvest Land</button>\n  </form>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\new-harvest-land\new-harvest-land.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_harvest_land_repository_harvest_land_repository__["a" /* HarvestLandRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */]])
    ], NewHarvestLandPage);
    return NewHarvestLandPage;
}());

//# sourceMappingURL=new-harvest-land.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSellingPointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_selling_point_factory_selling_point_factory__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_selling_point_repository_selling_point_repository__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_schedule_factory_schedule_factory__ = __webpack_require__(184);
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
 * Generated class for the SellingPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewSellingPointPage = (function () {
    function NewSellingPointPage(navCtrl, navParams, sellingPointFactory, sellingPointRepository, scheduleFactory) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sellingPointFactory = sellingPointFactory;
        this.sellingPointRepository = sellingPointRepository;
        this.scheduleFactory = scheduleFactory;
    }
    NewSellingPointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellingPointPage');
    };
    NewSellingPointPage.prototype.createSchedule = function (day, openh, closeh) {
        this.schedule = this.scheduleFactory.createSchedule(day, openh, closeh);
    };
    NewSellingPointPage.prototype.postSellingPoint = function (name, location, pictureURI) {
        this.sellingPoint = this.sellingPointFactory.createSellingPoint(name, location, localStorage.getItem('loggedInID'), {}, this.schedule, pictureURI, null);
        console.log(this.sellingPoint);
        this.sellingPointRepository.postSellingPoint(this.sellingPoint);
    };
    NewSellingPointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selling-point',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\post-new-selling-point\post-new-selling-point.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Post New Selling Point</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <form (ngSubmit)="createSchedule(day.value,openn.value,closee.value); postSellingPoint(sellingPointName.value,sellingPointLocation.value,pictureURI.value)"\n    name="newSellingPointForm">\n    <ion-item>\n      <ion-label>Selling Point Name</ion-label>\n      <ion-input type="text" #sellingPointName></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Selling Point Location</ion-label>\n      <ion-input type="location" #sellingPointLocation></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Opening Days</ion-label>\n      <ion-select [(ngModel)]="days" multiple="true" name="something" #day>\n        <ion-option value="L">Monday</ion-option>\n        <ion-option value="T">Tuesday</ion-option>\n        <ion-option value="M">Wednesay</ion-option>\n        <ion-option value="J">Thursday</ion-option>\n        <ion-option value="V">Friday</ion-option>\n        <ion-option value="S">Saturday</ion-option>\n        <ion-option value="D">Sunday</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>From</ion-label>\n      <ion-select [(ngModel)]="opening" name="something" #openn>\n        <ion-option value="8am">8:00am</ion-option>\n        <ion-option value="9am">9:00am</ion-option>\n        <ion-option value="10am">10:00am</ion-option>\n        <ion-option value="11am">11:00am</ion-option>\n        <ion-option value="12pm">12:00pm</ion-option>\n        <ion-option value="1pm">1:00pm</ion-option>\n        <ion-option value="2pm">2:00pm</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>To</ion-label>\n      <ion-select [(ngModel)]="closing" name="something" #closee>\n        <ion-option value="8am">8:00am</ion-option>\n        <ion-option value="9am">9:00am</ion-option>\n        <ion-option value="10am">10:00am</ion-option>\n        <ion-option value="11am">11:00am</ion-option>\n        <ion-option value="12pm">12:00pm</ion-option>\n        <ion-option value="1pm">1:00pm</ion-option>\n        <ion-option value="2pm">2:00pm</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Picture URI</ion-label>\n      <ion-input type="url" #pictureURI></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Add Selling Point</button>\n  </form>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\post-new-selling-point\post-new-selling-point.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_selling_point_factory_selling_point_factory__["a" /* SellingPointFactoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_selling_point_repository_selling_point_repository__["a" /* SellingPointRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_schedule_factory_schedule_factory__["a" /* ScheduleFactoryProvider */]])
    ], NewSellingPointPage);
    return NewSellingPointPage;
}());

//# sourceMappingURL=post-new-selling-point.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harvest_harvest__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_harvest_land_repository_harvest_land_repository__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_factory_user_factory__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_cart_item_factory_cart_item_factory__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cart_item_repository_cart_item_repository__ = __webpack_require__(90);
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
    function ProductPage(navCtrl, navParams, harvestLandRepository, harvestLandFactory, userRepository, userFactory, cartItemFactory, cartItemRepository) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.harvestLandRepository = harvestLandRepository;
        this.harvestLandFactory = harvestLandFactory;
        this.userRepository = userRepository;
        this.userFactory = userFactory;
        this.cartItemFactory = cartItemFactory;
        this.cartItemRepository = cartItemRepository;
        this.byQuantity = false;
        this.byWeight = false;
        this.product = this.navParams.get('product');
        if (this.product.pricingOption == 'q') {
            this.byQuantity = true;
        }
        else {
            this.byWeight = true;
        }
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage.prototype.getHarvestInfo = function (product) {
        var _this = this;
        this.harvestLandRepository.getHarvestLand(this.product.harvestLandID).toPromise().then(function (res) {
            var harvestLand = _this.harvestLandFactory.createHarvestLand(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__harvest_harvest__["a" /* HarvestPage */], { harvestLand: harvestLand });
        }, function (err) {
            console.log(err);
        });
    };
    ProductPage.prototype.addToCart = function (quantity) {
        var cartItem = this.cartItemFactory.createCartItem(this.product, quantity, localStorage.getItem('loggedInID'));
        this.cartItemRepository.addProductToCart(cartItem);
    };
    ProductPage.prototype.goToSeller = function (product) {
        var _this = this;
        this.userRepository.getUser(product.sellerID).toPromise().then(function (res) {
            var seller = _this.userFactory.createUser(res.firstName, res.lastName, res.userID, res.email, res.password, res.phone, res.pictureURI);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */], { seller: seller });
        }, function (err) {
            console.log(err);
        });
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{product.productName}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-img style="width: 450px; height: 325px;" src={{product.pictureURI}}></ion-img>\n\n    <h1 style="color:#000000;">{{product.name}}</h1>\n\n    <h4 style="color:#000000;">${{product.pricePerUnit}} </h4>\n\n    <h4 style="color:#000000;" *ngIf ="byQuantity; else pricePerPound">each </h4>\n\n    \n\n    <ng-template #pricePerPound>\n\n        <h4 style="color:#000000;">per Pound </h4>\n\n    </ng-template>\n\n    <ion-item (click)="getHarvestInfo(product)">\n\n        <ion-label>Harvest Land: {{product.harvestLandID}}</ion-label>\n\n    </ion-item>\n\n    <button ion-item (click)="goToSeller(product)">\n\n        <ion-label>Seller: {{product.sellerID}}</ion-label>\n\n    </button>\n\n    \n\n    <form (ngSubmit)="addToCart(quantity.value)">\n\n        <ion-item>\n\n            <ion-label> Qty:</ion-label>\n\n            <ion-input #quantity name="quantity" type="number"></ion-input>\n\n        </ion-item>\n\n      <button ion-button type="submit" block>Add to Cart</button>\n\n    </form>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_harvest_land_repository_harvest_land_repository__["a" /* HarvestLandRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_factory_user_factory__["a" /* UserFactoryProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_cart_item_factory_cart_item_factory__["a" /* CartItemFactoryProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_cart_item_repository_cart_item_repository__["a" /* CartItemRepositoryProvider */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harvest_harvest__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selling_point_selling_point__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_harvest_land_repository_harvest_land_repository__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_review_repository_review_repository__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_review_factory_review_factory__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_selling_point_repository_selling_point_repository__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_selling_point_factory_selling_point_factory__ = __webpack_require__(54);
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
    function UserPage(navCtrl, navParams, harvestLandRepository, harvestLandFactory, reviewsRepository, reviewsFactory, sellingPointRepository, sellingPointFactory) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.harvestLandRepository = harvestLandRepository;
        this.harvestLandFactory = harvestLandFactory;
        this.reviewsRepository = reviewsRepository;
        this.reviewsFactory = reviewsFactory;
        this.sellingPointRepository = sellingPointRepository;
        this.sellingPointFactory = sellingPointFactory;
        this.harvestLands = [];
        this.sellingPoints = [];
        this.reviews = [];
        //load seller info
        this.user = this.navParams.get('seller');
        //load harvest Lands
        this.harvestLandRepository.getHarvestLandsFromUser(this.user.userID).toPromise().then(function (res) {
            _this.harvestLands = _this.harvestLandFactory.createHarvestLandsFromJSON(res);
        }, function (err) {
            console.log(err);
        });
        //load selling points
        this.sellingPointRepository.getSellingPointsFromUser(this.user.userID).toPromise().then(function (res) {
            _this.sellingPoints = _this.sellingPointFactory.createSellingPointFromJSON(res);
        }, function (err) {
            console.log(err);
        });
        //load reviews
        this.reviewsRepository.getReviewsFor(this.user.userID).toPromise().then(function (res) {
            _this.reviews = _this.reviewsFactory.createReviewsFromJSON(res);
            console.log('thisreviews', _this.reviews);
        }, function (err) {
            console.log(err);
        });
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
    UserPage.prototype.allowReview = function () {
        return (localStorage.getItem('loggedInID') != this.user.userID);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-img style="width: 450px; height: 325px;" src={{user.pictureURI}}></ion-img>\n\n    <h1 style="color:#000000;">{{user.firstName}} {{user.lastName}}</h1>\n\n    <h4 style="color:#000000;">UserID: {{user.userID}}</h4>\n\n\n\n\n\n    <h3 style="color:#000000;">Harvest Lands</h3>\n\n\n\n    <ion-list>\n\n        <button ion-item *ngFor="let harvestLand of harvestLands" (click)="getHarvestInfo(harvestLand)">\n\n            <ion-img style="width: 80px; height: 60px;" src={{harvestLand.pictureURI}}></ion-img>\n\n            {{harvestLand.name}}\n\n            {{harvestLand.location}}\n\n        </button>\n\n\n\n    </ion-list>\n\n\n\n    <h3 style="color:#000000;">Selling Points</h3>\n\n\n\n    <ion-list>\n\n        <button ion-item *ngFor="let sellingpoint of sellingPoints" (click)="goToSellingPoint(sellingpoint)">\n\n            <ion-img style="width: 80px; height: 60px;" src={{sellingpoint.pictureURI}}></ion-img>\n\n            {{sellingpoint.name}} \n\n            {{sellingpoint.location}}\n\n        </button>\n\n    </ion-list>\n\n    <ion-list>\n\n        <h3 style="color:#000000;">Reviews</h3>\n\n    </ion-list>\n\n    <ion-item *ngFor="let review of reviews">\n\n        <b>{{review.title}}...............{{review.rating}} stars</b>\n\n        <p>{{review.description}}</p>\n\n\n\n    </ion-item>\n\n    <review-form *ngIf="allowReview()" [parentsUser]="this"></review-form>\n\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_harvest_land_repository_harvest_land_repository__["a" /* HarvestLandRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_review_repository_review_repository__["a" /* ReviewRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_review_factory_review_factory__["a" /* ReviewFactoryProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_selling_point_repository_selling_point_repository__["a" /* SellingPointRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_selling_point_factory_selling_point_factory__["a" /* SellingPointFactoryProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellingPointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product__ = __webpack_require__(124);
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
    SellingPointPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_product__["a" /* ProductPage */], product);
    };
    SellingPointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selling-point',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\selling-point\selling-point.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{sellingPoint.name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    \n    <ion-img style="width: 200px; height: 100px;" src={{sellingPoint.pictureURI}}></ion-img>\n    <h1 style="color:#000000;">{{sellingPoint.name}}</h1>\n    <h4 style="color:#000000;">Location: {{sellingPoint.location}}</h4>\n    <h4 style="color:#000000;">Products:</h4>\n    <button ion-item *ngFor="let product of this.sellingPoint.products" (click)="openProductPage({product : product})">\n        <ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n        {{product.name}} \n        {{product.pricePerUnit}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\selling-point\selling-point.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], SellingPointPage);
    return SellingPointPage;
    var _a, _b;
}());

//# sourceMappingURL=selling-point.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_factory_product_factory__ = __webpack_require__(36);
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
    function SearchPage(navCtrl, navParams, productRepository, productFactory) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productRepository = productRepository;
        this.productFactory = productFactory;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.onCancel = function ($event) {
        //
    };
    SearchPage.prototype.onInput = function (input) {
        var _this = this;
        if (input != '') {
            this.productRepository.searchProductsMatching(input).subscribe(function (res) {
                _this.products = _this.productFactory.createProductsFromJSON(res);
            }, function (err) {
                console.log("Error Ocurred");
            });
        }
    };
    SearchPage.prototype.openProductPage = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_product__["a" /* ProductPage */], item);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Search</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n  <ion-content padding="true" class="has-header">\n      <ion-searchbar\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput(input.value)"\n      (ionCancel)="onCancel($event)" #input>\n    </ion-searchbar>\n    <button ion-item *ngFor="let product of products" (click)="openProductPage({product : product})">\n        <ion-img style="width: 80px; height: 60px;" src={{product.pictureURI}}></ion-img>\n        {{product.name}} \n        {{product.pricePerUnit}}\n    </button>\n    </ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(185);
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
    function SignInPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userID = localStorage.getItem('loggedInID');
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.goToSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
        console.log('Sign Up Button Clicked.');
    };
    SignInPage.prototype.signIn = function (userID, password) {
        this.authService.authenticateUser(userID, password);
    };
    SignInPage.prototype.notSignedIn = function () {
        return localStorage.getItem('loggedInID') == null;
    };
    SignInPage.prototype.signOut = function () {
        localStorage.clear();
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-in\sign-in.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding="true" class="has-header">\n  <div *ngIf = "notSignedIn(); else showsignedinuser">\n    <h1 style="color:#000000;text-align:center;">Sign In</h1>\n    <form (ngSubmit)="signIn(userID.value, password.value)">\n      <ion-item>\n        <ion-label> UserID</ion-label>\n        <ion-input #userID type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> Password</ion-label>\n        <ion-input #password type="password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Sign In</button>\n    </form>\n  </div>\n\n  <ng-template #showsignedinuser>\n    <div>\n        <ion-item>\n            <ion-label> Signed In User: {{userID}}</ion-label>\n            \n          </ion-item>\n        <button ion-button (click)="signOut()" block>Sign Out</button>\n    </div>\n\n\n  </ng-template>\n  <div>\n    <button ion-button (click)="goToSignUpPage()" block>Sign Up</button>\n  </div>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_factory_user_factory__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__ = __webpack_require__(93);
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
            selector: 'page-sign-up',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  \n  <ion-content padding="true" class="has-header">\n    <h1 style="color:#000000;text-align:center;">Sign Up</h1>\n    <form (ngSubmit)="signUp(userID.value, password.value, firstName.value, lastName.value, email.value, phone.value, pictureURI.value)">\n        <ion-item>\n          <ion-label>UserID</ion-label>\n          <ion-input type="text" #userID></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input type="password" #password></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>First Name</ion-label>\n            <ion-input type="text" #firstName></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Last Name</ion-label>\n            <ion-input type="text" #lastName></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Email</ion-label>\n            <ion-input type="email" #email></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Phone Number</ion-label>\n            <ion-input type="text" #phone></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>pictureURI</ion-label>\n          <ion-input type="url" #pictureURI></ion-input>\n      </ion-item>\n        <button ion-button type="submit" block>Sign Up</button>\n      </form>\n      \n    \n  </ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_factory_user_factory__["a" /* UserFactoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 142:
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
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assign-products/assign-products.module": [
		308,
		14
	],
	"../pages/cart/cart.module": [
		311,
		13
	],
	"../pages/harvest/harvest.module": [
		310,
		12
	],
	"../pages/my-products/my-products.module": [
		309,
		11
	],
	"../pages/my-selling-points/my-selling-points.module": [
		312,
		10
	],
	"../pages/new-harvest-land/new-harvest-land.module": [
		314,
		9
	],
	"../pages/post-new-product/post-new-product.module": [
		313,
		8
	],
	"../pages/post-new-selling-point/post-new-selling-point.module": [
		315,
		7
	],
	"../pages/product/product.module": [
		316,
		6
	],
	"../pages/search/search.module": [
		317,
		5
	],
	"../pages/selling-point/selling-point.module": [
		318,
		4
	],
	"../pages/sign-in/sign-in.module": [
		319,
		3
	],
	"../pages/sign-up/sign-up.module": [
		321,
		2
	],
	"../pages/update-product/update-product.module": [
		320,
		1
	],
	"../pages/user/user.module": [
		322,
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
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
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
  Generated class for the ScheduleFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ScheduleFactoryProvider = (function () {
    function ScheduleFactoryProvider(http) {
        this.http = http;
        console.log('Hello ScheduleFactoryProvider Provider');
    }
    ScheduleFactoryProvider.prototype.createSchedule = function (day, openh, closeh) {
        this.schedule = {
            days: day,
            openh: openh,
            closeh: closeh,
        };
        return this.schedule;
    };
    ScheduleFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ScheduleFactoryProvider);
    return ScheduleFactoryProvider;
}());

//# sourceMappingURL=schedule-factory.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_factory_user_factory__ = __webpack_require__(55);
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
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationServiceProvider = (function () {
    function AuthenticationServiceProvider(http, userFactory) {
        this.http = http;
        this.userFactory = userFactory;
        console.log('Hello AuthenticationServiceProvider Provider');
        this.url = 'http://24.48.230.114:3005';
    }
    AuthenticationServiceProvider.prototype.authenticateUser = function (userID, password) {
        var user;
        return this.http.get(this.url + '/api/user/id/' + userID)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.password == password) {
                localStorage.setItem('loggedInID', userID);
            }
            else {
                //Password Incorrect
            }
        }, function (err) {
            //User Doesnt exist
            console.log(err);
        });
    };
    AuthenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_factory_user_factory__["a" /* UserFactoryProvider */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sign_up_sign_up__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_post_new_product_post_new_product__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_product__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_selling_point_selling_point__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_post_new_selling_point_post_new_selling_point__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_harvest_harvest__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_factory_user_factory__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_repository_user_repository__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_product_factory_product_factory__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_product_repository_product_repository__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_authentication_service_authentication_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_harvest_land_repository_harvest_land_repository__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_review_factory_review_factory__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_review_repository_review_repository__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_review_form_review_form__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_selling_point_factory_selling_point_factory__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_selling_point_repository_selling_point_repository__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_schedule_factory_schedule_factory__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_cart_item_factory_cart_item_factory__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_cart_item_repository_cart_item_repository__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_new_harvest_land_new_harvest_land__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_my_products_my_products__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_update_product_update_product__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_assign_products_assign_products__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_my_selling_points_my_selling_points__ = __webpack_require__(120);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_post_new_product_post_new_product__["a" /* PostNewProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_selling_point_selling_point__["a" /* SellingPointPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_harvest_harvest__["a" /* HarvestPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_review_form_review_form__["a" /* ReviewFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_post_new_selling_point_post_new_selling_point__["a" /* NewSellingPointPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_new_harvest_land_new_harvest_land__["a" /* NewHarvestLandPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_my_products_my_products__["a" /* MyProductsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_update_product_update_product__["a" /* UpdateProductPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_assign_products_assign_products__["a" /* AssignProductsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_my_selling_points_my_selling_points__["a" /* MySellingPointsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/assign-products/assign-products.module#AssignProductsPageModule', name: 'AssignProductsPage', segment: 'assign-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-products/my-products.module#MyProductsPageModule', name: 'MyProductsPage', segment: 'my-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/harvest/harvest.module#HarvestPageModule', name: 'HarvestPage', segment: 'harvest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-selling-points/my-selling-points.module#MySellingPointsPageModule', name: 'MySellingPointsPage', segment: 'my-selling-points', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-new-product/post-new-product.module#PostNewProductPageModule', name: 'PostNewProductPage', segment: 'post-new-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-harvest-land/new-harvest-land.module#NewHarvestLandPageModule', name: 'NewHarvestLandPage', segment: 'new-harvest-land', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-new-selling-point/post-new-selling-point.module#SellingPointPageModule', name: 'NewSellingPointPage', segment: 'post-new-selling-point', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selling-point/selling-point.module#SellingPointPageModule', name: 'SellingPointPage', segment: 'selling-point', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-product/update-product.module#UpdateProductPageModule', name: 'UpdateProductPage', segment: 'update-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_post_new_product_post_new_product__["a" /* PostNewProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_selling_point_selling_point__["a" /* SellingPointPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_harvest_harvest__["a" /* HarvestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_post_new_selling_point_post_new_selling_point__["a" /* NewSellingPointPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_new_harvest_land_new_harvest_land__["a" /* NewHarvestLandPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_my_products_my_products__["a" /* MyProductsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_update_product_update_product__["a" /* UpdateProductPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_assign_products_assign_products__["a" /* AssignProductsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_my_selling_points_my_selling_points__["a" /* MySellingPointsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_user_factory_user_factory__["a" /* UserFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_product_factory_product_factory__["a" /* ProductFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_product_repository_product_repository__["a" /* ProductRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_harvest_land_repository_harvest_land_repository__["a" /* HarvestLandRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_review_factory_review_factory__["a" /* ReviewFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_review_repository_review_repository__["a" /* ReviewRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_selling_point_factory_selling_point_factory__["a" /* SellingPointFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_selling_point_repository_selling_point_repository__["a" /* SellingPointRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_schedule_factory_schedule_factory__["a" /* ScheduleFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_cart_item_factory_cart_item_factory__["a" /* CartItemFactoryProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_cart_item_repository_cart_item_repository__["a" /* CartItemRepositoryProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_27__components_review_form_review_form__["a" /* ReviewFormComponent */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_post_new_product_post_new_product__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_post_new_selling_point_post_new_selling_point__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_harvest_land_new_harvest_land__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_products_my_products__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_selling_points_my_selling_points__ = __webpack_require__(120);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign In', component: __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */] },
            { title: 'Post New Product', component: __WEBPACK_IMPORTED_MODULE_5__pages_post_new_product_post_new_product__["a" /* PostNewProductPage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */] },
            { title: 'Create New Selling Point', component: __WEBPACK_IMPORTED_MODULE_8__pages_post_new_selling_point_post_new_selling_point__["a" /* NewSellingPointPage */] },
            { title: 'New Harvest Land', component: __WEBPACK_IMPORTED_MODULE_9__pages_new_harvest_land_new_harvest_land__["a" /* NewHarvestLandPage */] },
            { title: 'Cart', component: __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */] },
            { title: 'My Products', component: __WEBPACK_IMPORTED_MODULE_10__pages_my_products_my_products__["a" /* MyProductsPage */] },
            { title: 'My Selling Points', component: __WEBPACK_IMPORTED_MODULE_11__pages_my_selling_points_my_selling_points__["a" /* MySellingPointsPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_review_factory_review_factory__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_review_repository_review_repository__ = __webpack_require__(91);
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
 * Generated class for the ReviewFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ReviewFormComponent = (function () {
    function ReviewFormComponent(reviewFactory, reviewRepository) {
        this.reviewFactory = reviewFactory;
        this.reviewRepository = reviewRepository;
        console.log('Hello ReviewFormComponent Component');
        this.text = 'Hello World';
    }
    ReviewFormComponent.prototype.postReview = function (title, rating, description) {
        var newReview = this.reviewFactory.createReview(title, rating, description, localStorage.getItem('loggedInID'), this.parentsUser.user.userID);
        this.reviewRepository.postReview(newReview);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ReviewFormComponent.prototype, "parentsUser", void 0);
    ReviewFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'review-form',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\components\review-form\review-form.html"*/'<!-- Generated template for the ReviewFormComponent component -->\n<ion-content padding="true" class="has-header">\n  <h3 style="color:#000000;">Post Review</h3>\n  <form (ngSubmit)="postReview(title.value, rating.value, description.value)">\n    <ion-item>\n      <ion-label>Review Title</ion-label>\n      <ion-input type="text" #title></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Review Rating</ion-label>\n      <ion-select #rating>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Review Description</ion-label>\n      <ion-input type="text" #description></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Post Review</button>\n  </form>\n</ion-content>'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\components\review-form\review-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_review_factory_review_factory__["a" /* ReviewFactoryProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_review_repository_review_repository__["a" /* ReviewRepositoryProvider */]])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());

//# sourceMappingURL=review-form.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestLandFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
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
  Generated class for the HarvestLandFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HarvestLandFactoryProvider = (function () {
    function HarvestLandFactoryProvider(http) {
        this.http = http;
        console.log('Hello HarvestLandFactoryProvider Provider');
    }
    HarvestLandFactoryProvider.prototype.createHarvestLand = function (harvestLandJSON) {
        var harvestLand = {
            name: harvestLandJSON.name,
            pictureURI: harvestLandJSON.pictureURI,
            harvestLandID: harvestLandJSON.harvestLandID,
            location: harvestLandJSON.location,
            sellerID: harvestLandJSON.sellerID
        };
        return harvestLand;
    };
    HarvestLandFactoryProvider.prototype.createHarvestLandsFromJSON = function (harvestLands) {
        var arrayOfHarvestLands = [];
        for (var _i = 0, harvestLands_1 = harvestLands; _i < harvestLands_1.length; _i++) {
            var harvestLand = harvestLands_1[_i];
            arrayOfHarvestLands.push(this.createHarvestLand(harvestLand));
        }
        return arrayOfHarvestLands;
    };
    HarvestLandFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HarvestLandFactoryProvider);
    return HarvestLandFactoryProvider;
}());

//# sourceMappingURL=harvest-land-factory.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.url = 'http://24.48.230.114:3005';
    }
    ProductRepositoryProvider.prototype.postProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log(product);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url + '/api/products', JSON.stringify(product), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error Ocurred");
        });
    };
    ProductRepositoryProvider.prototype.searchProductsMatching = function (input) {
        return this.http.get(this.url + '/api/product/name/' + input)
            .map(function (res) { return res.json(); });
    };
    ProductRepositoryProvider.prototype.getProductsFrom = function (userID) {
        return this.http.get(this.url + '/api/product/seller/' + userID)
            .map(function (res) { return res.json(); });
    };
    ProductRepositoryProvider.prototype.updateProduct = function (newProduct) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log(newProduct);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.put(this.url + '/api/product/id/' + newProduct._id, JSON.stringify(newProduct), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error Ocurred");
        });
    };
    ProductRepositoryProvider.prototype.deleteProduct = function (product) {
        return this.http.delete(this.url + '/api/product/' + product._id)
            .map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
        });
    };
    ProductRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductRepositoryProvider);
    return ProductRepositoryProvider;
}());

//# sourceMappingURL=product-repository.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
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
    ProductFactoryProvider.prototype.createProduct = function (name, pictureURI, harvestLandID, pricingOption, pricePerUnit, productType, sellerID, id) {
        this.product = {
            name: name,
            pictureURI: pictureURI,
            harvestLandID: harvestLandID,
            pricingOption: pricingOption,
            pricePerUnit: pricePerUnit,
            productType: productType,
            sellerID: sellerID,
            _id: id
        };
        return this.product;
    };
    ProductFactoryProvider.prototype.createProductFromDB = function (name, pictureURI, harvestLandID, pricingOption, pricePerUnit, productType, sellerID, id) {
        this.product = {
            name: name,
            pictureURI: pictureURI,
            harvestLandID: harvestLandID,
            pricingOption: pricingOption,
            pricePerUnit: pricePerUnit,
            productType: productType,
            sellerID: sellerID,
            _id: id
        };
        return this.product;
    };
    ProductFactoryProvider.prototype.createProductsFromJSON = function (products) {
        var arrayOfProducts = [];
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            arrayOfProducts.push(this.createProductFromDB(product.name, product.pictureURI, product.harvestLandID, product.pricingOption, product.pricePerUnit, product.productType, product.sellerID, product._id));
        }
        return arrayOfProducts;
    };
    ProductFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductFactoryProvider);
    return ProductFactoryProvider;
}());

//# sourceMappingURL=product-factory.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestLandRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
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
  Generated class for the HarvestLandRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HarvestLandRepositoryProvider = (function () {
    function HarvestLandRepositoryProvider(http, harvestLandFactory) {
        this.http = http;
        this.harvestLandFactory = harvestLandFactory;
        this.url = 'http://24.48.230.114:3005';
        console.log('Hello HarvestLandRepositoryProvider Provider');
    }
    HarvestLandRepositoryProvider.prototype.getHarvestLand = function (harvestLandID) {
        return this.http.get(this.url + '/api/harvestLand/id/' + harvestLandID)
            .map(function (res) { return res.json(); });
    };
    HarvestLandRepositoryProvider.prototype.getHarvestLandsFromUser = function (userID) {
        return this.http.get(this.url + '/api/harvestLands/seller/' + userID)
            .map(function (res) { return res.json(); });
    };
    HarvestLandRepositoryProvider.prototype.addHarvestLand = function (harvestLand) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url + '/api/harvestLands', JSON.stringify(harvestLand), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error");
        });
    };
    HarvestLandRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */]])
    ], HarvestLandRepositoryProvider);
    return HarvestLandRepositoryProvider;
}());

//# sourceMappingURL=harvest-land-repository.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellingPointRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
/*
  Generated class for the SellingPointRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SellingPointRepositoryProvider = (function () {
    function SellingPointRepositoryProvider(http) {
        this.http = http;
        console.log('Hello SellingPointRepositoryProvider Provider');
        this.url = 'http://24.48.230.114:3005';
    }
    SellingPointRepositoryProvider.prototype.postSellingPoint = function (sellingPoint) {
        console.log('fromrepo', JSON.stringify(sellingPoint));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url + '/api/sellingPoints', JSON.stringify(sellingPoint), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    SellingPointRepositoryProvider.prototype.getSellingPointsFromUser = function (userID) {
        return this.http.get(this.url + '/api/sellingPoints/seller/' + userID)
            .map(function (res) { return res.json(); });
    };
    SellingPointRepositoryProvider.prototype.deleteSellingPoint = function (sellingPoint) {
        console.log('deleting');
        return this.http.delete(this.url + '/api/sellingPoint/' + sellingPoint._id)
            .map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    SellingPointRepositoryProvider.prototype.updateSellingPoint = function (sellingP) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + '/api/sellingPoint/' + sellingP._id, JSON.stringify(sellingP), options)
            .map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    SellingPointRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SellingPointRepositoryProvider);
    return SellingPointRepositoryProvider;
}());

//# sourceMappingURL=selling-point-repository.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellingPointFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
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
  Generated class for the SellingPointFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SellingPointFactoryProvider = (function () {
    function SellingPointFactoryProvider(http) {
        this.http = http;
        console.log('Hello SellingPointFactoryProvider Provider');
    }
    SellingPointFactoryProvider.prototype.createSellingPoint = function (name, location, sellerID, products, schedule, pictureURI, id) {
        this.sellingPoint = {
            name: name,
            location: location,
            sellerID: sellerID,
            products: products,
            schedule: schedule,
            pictureURI: pictureURI,
            _id: id
        };
        return this.sellingPoint;
    };
    SellingPointFactoryProvider.prototype.createSellingPointFromJSON = function (sellingPoints) {
        var arrayOfSellingPoints = [];
        for (var _i = 0, sellingPoints_1 = sellingPoints; _i < sellingPoints_1.length; _i++) {
            var sellingPoint = sellingPoints_1[_i];
            arrayOfSellingPoints.push(this.createSellingPoint(sellingPoint.name, sellingPoint.location, sellingPoint.sellerID, sellingPoint.products, sellingPoint.schedule, sellingPoint.pictureURI, sellingPoint._id));
        }
        return arrayOfSellingPoints;
    };
    SellingPointFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SellingPointFactoryProvider);
    return SellingPointFactoryProvider;
}());

//# sourceMappingURL=selling-point-factory.js.map

/***/ }),

/***/ 55:
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_harvest_land_repository_harvest_land_repository__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_harvest_land_factory_harvest_land_factory__ = __webpack_require__(32);
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
    function HarvestPage(navCtrl, navParams, harvestLandRepository, harvestLandFactory) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.harvestLandRepository = harvestLandRepository;
        this.harvestLandFactory = harvestLandFactory;
        this.harvestLand = null;
        this.harvestLand = this.navParams.get('harvestLand');
    }
    HarvestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HarvestPage');
    };
    HarvestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-harvest',template:/*ion-inline-start:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\harvest\harvest.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{harvestLand.name}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-img style="width: 200px; height: 100px;" src={{harvestLand.pictureURI}}></ion-img>\n\n    <h1 style="color:#000000;">{{harvestLand.name}}</h1>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"d:\Fernando Documents\Documents\GitHub\PlacitasEverywhere-Client\src\pages\harvest\harvest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_harvest_land_repository_harvest_land_repository__["a" /* HarvestLandRepositoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_harvest_land_factory_harvest_land_factory__["a" /* HarvestLandFactoryProvider */]])
    ], HarvestPage);
    return HarvestPage;
}());

//# sourceMappingURL=harvest.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
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
  Generated class for the CartItemFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CartItemFactoryProvider = (function () {
    function CartItemFactoryProvider(http) {
        this.http = http;
        console.log('Hello CartItemFactoryProvider Provider');
    }
    CartItemFactoryProvider.prototype.createCartItem = function (product, quantity, buyerID) {
        this.cartItem = {
            buyerID: buyerID,
            product: product,
            numOfItems: quantity,
            _id: null
        };
        return this.cartItem;
    };
    CartItemFactoryProvider.prototype.createCartItemWithAttributes = function (buyerID, product, quantity, _id) {
        var cartItem = {
            buyerID: buyerID,
            product: product,
            numOfItems: quantity,
            _id: _id
        };
        return cartItem;
    };
    CartItemFactoryProvider.prototype.createCartItemFromJSON = function (cartItems) {
        var arrayOfCartItems = [];
        for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
            var cartItem = cartItems_1[_i];
            arrayOfCartItems.push(this.createCartItemWithAttributes(cartItem.buyerID, cartItem.product, cartItem.numOfItems, cartItem._id));
        }
        return arrayOfCartItems;
    };
    CartItemFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CartItemFactoryProvider);
    return CartItemFactoryProvider;
}());

//# sourceMappingURL=cart-item-factory.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
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
  Generated class for the CartItemRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CartItemRepositoryProvider = (function () {
    function CartItemRepositoryProvider(http) {
        this.http = http;
        console.log('Hello CartItemRepositoryProvider Provider');
        this.url = 'http://24.48.230.114:3005';
    }
    CartItemRepositoryProvider.prototype.addProductToCart = function (cartItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url + '/api/cartItem', JSON.stringify(cartItem), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CartItemRepositoryProvider.prototype.getCartItemsByUserID = function (userID) {
        return this.http.get(this.url + '/api/cartItem/buyerID/' + userID)
            .map(function (res) { return res.json(); });
    };
    CartItemRepositoryProvider.prototype.updateQuantity = function (cartItem, quantity) {
        cartItem.numOfItems = quantity;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.put(this.url + '/api/cartItem/' + cartItem._id, JSON.stringify(cartItem), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CartItemRepositoryProvider.prototype.deleteCartItem = function (cartItem) {
        console.log(cartItem);
        return this.http.delete(this.url + '/api/cartItem/' + cartItem._id)
            .map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CartItemRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CartItemRepositoryProvider);
    return CartItemRepositoryProvider;
}());

//# sourceMappingURL=cart-item-repository.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
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
  Generated class for the ReviewRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReviewRepositoryProvider = (function () {
    function ReviewRepositoryProvider(http) {
        this.http = http;
        console.log('Hello ReviewRepositoryProvider Provider');
        this.url = 'http://24.48.230.114:3005';
    }
    ReviewRepositoryProvider.prototype.postReview = function (review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url + '/api/reviews', JSON.stringify(review), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ReviewRepositoryProvider.prototype.getReviewsFor = function (userID) {
        return this.http.get(this.url + '/api/reviews/seller/' + userID)
            .map(function (res) { return res.json(); });
    };
    ReviewRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ReviewRepositoryProvider);
    return ReviewRepositoryProvider;
}());

//# sourceMappingURL=review-repository.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFactoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
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
  Generated class for the ReviewFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReviewFactoryProvider = (function () {
    function ReviewFactoryProvider(http) {
        this.http = http;
        console.log('Hello ReviewFactoryProvider Provider');
    }
    ReviewFactoryProvider.prototype.createReview = function (title, rating, description, posterID, sellerID) {
        var review = {
            title: title,
            rating: rating,
            description: description,
            posterID: posterID,
            sellerID: sellerID
        };
        return review;
    };
    ReviewFactoryProvider.prototype.createReviewsFromJSON = function (reviews) {
        var arrayOfReviews = [];
        for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
            var review = reviews_1[_i];
            arrayOfReviews.push(this.createReview(review.title, review.rating, review.description, review.posterID, review.sellerID));
        }
        return arrayOfReviews;
    };
    ReviewFactoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ReviewFactoryProvider);
    return ReviewFactoryProvider;
}());

//# sourceMappingURL=review-factory.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.url = 'http://24.48.230.114:3005/api/user';
    }
    UserRepositoryProvider.prototype.saveNewUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var req = this.http.post(this.url, JSON.stringify(user), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error");
        });
    };
    UserRepositoryProvider.prototype.getUser = function (userID) {
        return this.http.get(this.url + '/id/' + userID)
            .map(function (res) { return res.json(); });
    };
    UserRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserRepositoryProvider);
    return UserRepositoryProvider;
}());

//# sourceMappingURL=user-repository.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map