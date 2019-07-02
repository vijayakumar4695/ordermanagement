(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Audi';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _audi_audi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audi/audi.component */ "./src/app/audi/audi.component.ts");
/* harmony import */ var _createorder_createorder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createorder/createorder.component */ "./src/app/createorder/createorder.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _vieworderid_vieworderid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vieworderid/vieworderid.component */ "./src/app/vieworderid/vieworderid.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "./src/app/invoice-list/invoice-list.component.ts");
/* harmony import */ var _invoiceview_invoiceview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./invoiceview/invoiceview.component */ "./src/app/invoiceview/invoiceview.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _audi_audi_component__WEBPACK_IMPORTED_MODULE_9__["AudiComponent"],
                _createorder_createorder_component__WEBPACK_IMPORTED_MODULE_10__["CreateorderComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _vieworderid_vieworderid_component__WEBPACK_IMPORTED_MODULE_13__["VieworderidComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_15__["UpdateComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"],
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_18__["CreateComponent"],
                _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceListComponent"],
                _invoiceview_invoiceview_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: "", pathMatch: "full", redirectTo: 'Audi/login' },
                    { path: 'Audi', component: _audi_audi_component__WEBPACK_IMPORTED_MODULE_9__["AudiComponent"],
                        children: [
                            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
                            { path: 'createorder', component: _createorder_createorder_component__WEBPACK_IMPORTED_MODULE_10__["CreateorderComponent"] },
                            { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"],
                                children: [
                                    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] },
                                    { path: 'vieworderid/:id', component: _vieworderid_vieworderid_component__WEBPACK_IMPORTED_MODULE_13__["VieworderidComponent"] },
                                    { path: 'update/:id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_15__["UpdateComponent"] }
                                ] },
                            { path: 'invoice', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceComponent"],
                                children: [
                                    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_18__["CreateComponent"] },
                                    { path: 'invoicelist', component: _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceListComponent"] },
                                    { path: 'invoiceview/:id', component: _invoiceview_invoiceview_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceviewComponent"] },
                                ] }
                        ] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audi/audi.component.css":
/*!*****************************************!*\
  !*** ./src/app/audi/audi.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body{\r\n    background-image:url(\"src/assets/img/Audi-Logo-Wallpaper-HD-background.jpg\");\r\n    background-repeat:no-repeat;\r\n    background-size: cover;\r\n}\r\nh1{\r\n    color:rgb(223, 22, 72);\r\n    font-weight:800;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaS9hdWRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUciLCJmaWxlIjoic3JjL2FwcC9hdWRpL2F1ZGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcInNyYy9hc3NldHMvaW1nL0F1ZGktTG9nby1XYWxscGFwZXItSEQtYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6cmdiKDIyMywgMjIsIDcyKTtcclxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/audi/audi.component.html":
/*!******************************************!*\
  !*** ./src/app/audi/audi.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <body>\n<div class=\"container-fluid\">\n <div class=\"row\">   \n<div class=\"col-lg-12 col-md-12 col-sm-12 text-white text-center\">\n    <h1>AUDI</h1>\n</div>\n</div>\n</div>\n</body> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/audi/audi.component.ts":
/*!****************************************!*\
  !*** ./src/app/audi/audi.component.ts ***!
  \****************************************/
/*! exports provided: AudiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiComponent", function() { return AudiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudiComponent = /** @class */ (function () {
    function AudiComponent() {
    }
    AudiComponent.prototype.ngOnInit = function () {
    };
    AudiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audi',
            template: __webpack_require__(/*! ./audi.component.html */ "./src/app/audi/audi.component.html"),
            styles: [__webpack_require__(/*! ./audi.component.css */ "./src/app/audi/audi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudiComponent);
    return AudiComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=date] {\r\n    text-align:right;\r\n  }\r\n  input[type=date]::after {\r\n    text-align:left;\r\n  }\r\n  input[type=\"date\"]:before {\r\n    color: lightgrey;\r\n  }\r\n  input[type=\"date\"]:focus:after {\r\n    text-align: left;\r\n  }\r\n  input[type=date]:after {\r\n    color: black;\r\n    \r\n  }\r\n  input[type=text]{\r\n    color:black;\r\n  }\r\n  #blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  .navbar>ul>li>a{\r\n    color:white;\r\n    cursor: pointer;\r\n  }\r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  h3{\r\n    font-weight: 900;\r\n  }\r\n  \r\n  \r\n \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBR0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTs7RUFFZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1kYXRlXSB7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPWRhdGVdOjphZnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzOmFmdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9ZGF0ZV06YWZ0ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiAgI2Jsb2Nrb3JkZXJ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICB9XHJcbiAgLm5hdmJhcj51bD5saT5he1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5uYXZiYXItaW52ZXJzZSB1bCBsaSBhOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1pbnZlcnNlIHVsIGxpIGF7XHJcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\"><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKORDER</h6></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n\n<ul class=\"nav navbar-nav\">\n<li>\n<a routerLink=\"/Audi/order/list\">Order</a>\n</li>\n <li>\n<a routerLink=\"/Audi/createorder\">Invoices</a>\n</li>\n<li>\n<a routerLink=\"/Audi/invoice/crate\">NW</a>\n</li>\n  <li class=\"dropdown\">\n    <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <div class=\"profile-photo-small\">\n       <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n      </div>\n     <div class=\"ripple-container\" ></div></a>\n    \n    <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li><a routerLink=\"/Audi/login\">Sign out</a></li>\n     </ul>\n     </li>\n    </ul>\n\n     \n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\"> \n    <h3>Create Invoice</h3>\n  <br><br><br><br>\n  <form  autocomplete=\"off\" name=\"createinvoice\" #createinvoice=\"ngForm\">\n  <div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group label-floating  is-empty\">\n     <label class=\"control-label\">OrderId</label>\n      <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"orderid\" #orderid=\"ngModel\" ngModel required>\n      <span class=\"material-input\"></span></div>\n </div>\n\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n   <div class=\"form-group label-floating is-empty\">\n    <label class=\"control-label\">Invoice Date</label>\n   <input type=\"date\" autocomplete=\"off\" class=\"form-control\" name=\"invoicedate\" #invoicedate=\"ngModel\" ngModel required>\n   <span class=\"material-input\"></span></div>\n</div>\n\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group label-floating is-empty\">\n    <label class=\"control-label\">Amount</label>\n    <input type=\"text\"  class=\"form-control\"  name=\"amount\" #amount=\"ngModel\" ngModel required>\n    <span class=\"material-input\"></span></div>\n  </div>\n  \n  <div class=\"col-lg-4 col-md-4 col-sm-3 mt-5\">\n      <div class=\"form-group label-floating is-empty\">\n      <label class=\"control-label\">Invoice end date</label>\n      <input type=\"date\" autocomplete=\"off\"  class=\"form-control\"  name=\"enddate\" #enddate=\"ngModel\" ngModel required>\n      <span class=\"material-input\"></span></div>\n    </div>\n  <div class=\"col-md-4 col-md-offset-8\">\n    <br>\n    <br>\n   <button type=\"submit\" class=\"btn btn-success\" (click)='createInvoice(createinvoice.value)'>Create</button>\n   <button class=\"btn btn-danger\" routerLink=\"/Audi/invoice/invoicelist\">back</button>\n  </div>\n </div>\n </form>\n </div>\n"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(service, routing) {
        this.service = service;
        this.routing = routing;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createInvoice = function (value) {
        var _this = this;
        this.service.createinvoice(value).subscribe(function (res) {
            console.log(res);
            //  swal.fire({
            //    type:'success',
            //    text: res['status'],
            //  })
            _this.routing.navigate(['/Audi/invoice/invoicelist']);
        });
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/createorder/createorder.component.css":
/*!*******************************************************!*\
  !*** ./src/app/createorder/createorder.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput[type=date] {\r\n    text-align:right;\r\n  }\r\n  input[type=date]::after {\r\n    text-align:left;\r\n  }\r\n  input[type=\"date\"]:before {\r\n    color: lightgrey;\r\n  }\r\n  input[type=\"date\"]:focus:after {\r\n    text-align: left;\r\n  }\r\n  input[type=date]:after {\r\n    color: black;\r\n    \r\n  }\r\n  input[type=text]{\r\n    color:black;\r\n  }\r\n  #blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  .navbar-nav>ul>li>a:hover{\r\n    color:white;\r\n    cursor: pointer;\r\n  }\r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  h3{\r\n    font-weight: 900;\r\n  }\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlb3JkZXIvY3JlYXRlb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFHQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZOztFQUVkO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVvcmRlci9jcmVhdGVvcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1kYXRlXTo6YWZ0ZXIge1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1czphZnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPWRhdGVdOmFmdGVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gICNibG9ja29yZGVye1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2PnVsPmxpPmE6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm5hdmJhci1pbnZlcnNlIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLWludmVyc2UgdWwgbGkgYXtcclxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcbiBcclxuIl19 */"

/***/ }),

/***/ "./src/app/createorder/createorder.component.html":
/*!********************************************************!*\
  !*** ./src/app/createorder/createorder.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\"><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKORDER</h6></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n\n<ul class=\"nav navbar-nav\" >\n<li>\n<a routerLink=\"/Audi/order/list\">Order</a>\n</li>\n <li>\n<a routerLink=\"/Audi/invoice/invoicelist\">Invoices</a>\n</li>\n<li>\n<a routerLink=\"/Audi/createorder\">NW</a>\n</li>\n  <li class=\"dropdown\">\n    <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <div class=\"profile-photo-small\">\n       <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n      </div>\n     <div class=\"ripple-container\" ></div></a>\n    \n    <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li id=\"sign\"><a routerLink=\"/Audi/login\">Sign out</a></li>\n     </ul>\n     </li>\n    </ul>\n\n     \n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\">\n   <h3>CreateOrder</h3> \n  <br><br><br><br>\n  <form  autocomplete=\"off\" name=\"create\" #create=\"ngForm\">\n  <div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group label-floating  is-empty\">\n     <label class=\"control-label\">Product Name</label>\n      <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"productname\" #productname=\"ngModel\" ngModel required>\n      <span class=\"material-input\"></span></div>\n </div>\n\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n   <div class=\"form-group label-floating is-empty\">\n    <label class=\"control-label\">Quantity</label>\n   <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"quantity\" #quantity=\"ngModel\" ngModel required>\n   <span class=\"material-input\"></span></div>\n</div>\n\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group label-floating is-empty\">\n    <label class=\"control-label\">Order Date</label>\n    <input type=\"date\"  class=\"form-control\"  name=\"orderdate\" #orederdate=\"ngModel\" ngModel required>\n    <span class=\"material-input\"></span></div>\n  </div>\n </div>\n\n <div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group is-empty vendor\">\n       <select type=\"text\"   class=\"form-control\" name=\"option\" #option=\"ngModel\" ngModel required>\n        <option value=\"\" disabled selected>Vendor</option>\n         <option value=\"MRF\">MRF</option>\n          <option value=\"BridgeStone\">BridgeStone</option>\n        </select>\n      <span class=\"material-input\"></span></div>\n  </div>\n  \n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n     \n  <div class=\"form-group label-floating is-empty\">\n  <label class=\"control-label\">Expected Delivery Date</label>\n   <input type=\"date\"  class=\"form-control \" name=\"ExpectedDeliveryDate\" #ExpectedDeliveryDate=\"ngModel\"  ngModel required>\n  <span class=\"material-input\"></span></div>\n  </div>\n  \n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n      <div class=\"form-group label-floating is-empty\">\n      <label class=\"control-label\">Price</label>\n      <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"price\" #price=\"ngModel\" ngModel required>\n     <span class=\"material-input\"></span></div>\n     </div>\n    </div>\n   <div class=\"col-md-4 col-md-offset-8\">\n     <br>\n     <br>\n    <button type=\"submit\" class=\"btn btn-success\" (click)='createOrder(create.value)'>Create </button>\n    <button class=\"btn btn-danger\" (click)=\"list()\">Cancel</button>\n   </div>\n  </form>\n  </div>\n<ngx-spinner\n        bdColor=\"rgba(51,51,51,0.8)\"\n        size=\"medium\"\n        color=\"#fff\"\n        type=\"ball-scale-multiple\">\n       <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n \n\n     \n\n"

/***/ }),

/***/ "./src/app/createorder/createorder.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createorder/createorder.component.ts ***!
  \******************************************************/
/*! exports provided: CreateorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateorderComponent", function() { return CreateorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var CreateorderComponent = /** @class */ (function () {
    function CreateorderComponent(dataservice, routing, spinner) {
        this.dataservice = dataservice;
        this.routing = routing;
        this.spinner = spinner;
    }
    CreateorderComponent.prototype.ngOnInit = function () {
    };
    CreateorderComponent.prototype.createOrder = function (value) {
        var _this = this;
        this.spinner.show();
        this.dataservice.createOdr(value).subscribe(function (res) {
            _this.spinner.hide();
            // swal.fire({
            //   type:'success',
            //   text: res['status'],
            // })
            _this.routing.navigate(['/Audi/order/list']);
            console.log(res);
        });
        //   this.spinner.show(); 
        //   setTimeout(() => { 
        // this.dataservice.createOdr(value).then(res=>{
        //   this.join=res;
        //   swal.fire({
        //     title: 'Order created',
        //     text: "You will be create the order successfully!",
        //     type: 'success',
        //     confirmButtonColor: '#3085d6',
        //     confirmButtonText: 'ok'
        //   });
        //   this.routing.navigate(['Audi/list']);
        // })
        // this.spinner.hide();
        // }, 1000);
    };
    CreateorderComponent.prototype.list = function () {
        this.spinner.show();
        this.routing.navigate(['/Audi/order/list']);
        this.spinner.hide();
    };
    CreateorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createorder',
            template: __webpack_require__(/*! ./createorder.component.html */ "./src/app/createorder/createorder.component.html"),
            styles: [__webpack_require__(/*! ./createorder.component.css */ "./src/app/createorder/createorder.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], CreateorderComponent);
    return CreateorderComponent;
}());



/***/ }),

/***/ "./src/app/dataservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/dataservice.service.ts ***!
  \****************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataserviceService = /** @class */ (function () {
    function DataserviceService(http) {
        this.http = http;
    }
    DataserviceService.prototype.signup = function (v) {
        var _this = this;
        return this.http.post('https://ordermanagements.herokuapp.com/user/signup', v)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.check = data; }));
    };
    DataserviceService.prototype.login = function (value) {
        var _this = this;
        return this.http.post('https://ordermanagements.herokuapp.com/user/login', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.check = data; }));
    };
    //   getData(){
    //     var obj={
    //       "status":'success'
    //       }
    //     return obj 
    //     // return this.http.get('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/ordermanagement')
    //     // .pipe(map(data=>this.check=data))
    //  } 
    DataserviceService.prototype.createOdr = function (value) {
        var _this = this;
        return this.http.post('https://ordermanagements.herokuapp.com/orders/create', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.check = data; }));
    };
    DataserviceService.prototype.getOrder = function () {
        var _this = this;
        return this.http.get('https://ordermanagements.herokuapp.com/orders/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.check = data; }));
    };
    DataserviceService.prototype.delOrder = function (value) {
        var _this = this;
        return this.http.post('https://ordermanagements.herokuapp.com/orders/remove', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.getData1 = data; }));
    };
    DataserviceService.prototype.updated = function (value) {
        return this.http.post('https://ordermanagements.herokuapp.com/orders/update', value);
    };
    DataserviceService.prototype.createinvoice = function (value) {
        var _this = this;
        return this.http.post('https://5d03744cd1471e00149bace0.mockapi.io/api/v1/invoicedetails', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.check = data; }));
    };
    DataserviceService.prototype.getInvoice = function () {
        var _this = this;
        return this.http.get('https://5d03744cd1471e00149bace0.mockapi.io/api/v1/invoicedetails')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.check = data; }));
    };
    DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataserviceService);
    return DataserviceService;
}());



/***/ }),

/***/ "./src/app/invoice-list/invoice-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/invoice-list/invoice-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#one {\r\n    padding: 4px; \r\n    color:red;\r\n    font-weight: bold;\r\n    position: relative;\r\n  }\r\n  \r\n  #one:hover:after {\r\n    content: attr(data-tooltip);\r\n    position: absolute;\r\n    background:black;\r\n    color:white;\r\n    padding: 4px;\r\n    border-radius:10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  \r\n  .navbar-nav>ul>li>a:hover{\r\n    color:white;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .table{\r\n    align-content: center; \r\n     width:80%;\r\n     margin:0px;\r\n  }\r\n  \r\n  .table>th>td {\r\n    max-width: 50%;;\r\n  }\r\n  \r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  \r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  \r\n  .blinking{\r\n    -webkit-animation:blinkingText 8s infinite;\r\n            animation:blinkingText 8s infinite;\r\n    font-weight:600;\r\n}\r\n  \r\n  @-webkit-keyframes blinkingText{\r\n    0%{     color: red;    }\r\n    49%{    color: transparent; }\r\n    50%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n  \r\n  @keyframes blinkingText{\r\n    0%{     color: red;    }\r\n    49%{    color: transparent; }\r\n    50%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n  \r\n  h3{\r\n  font-weight: 900;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS1saXN0L2ludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxxQkFBcUI7S0FDcEIsU0FBUztLQUNULFVBQVU7RUFDYjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBQ0E7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0VBQ0E7SUFDSSxRQUFRLFVBQVUsS0FBSztJQUN2QixRQUFRLGtCQUFrQixFQUFFO0lBQzVCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxpQkFBaUIsR0FBRztJQUM1QixRQUFRLFdBQVcsS0FBSztBQUM1Qjs7RUFOQTtJQUNJLFFBQVEsVUFBVSxLQUFLO0lBQ3ZCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsV0FBVyxLQUFLO0FBQzVCOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS1saXN0L2ludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29uZSB7XHJcbiAgICBwYWRkaW5nOiA0cHg7IFxyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNvbmU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjYmxvY2tvcmRlcntcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdj51bD5saT5hOmhvdmVye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC50YWJsZXtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICAgd2lkdGg6ODAlO1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgfVxyXG4gIC50YWJsZT50aD50ZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTs7XHJcbiAgfVxyXG4gIC5uYXZiYXItaW52ZXJzZSB1bCBsaSBhOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1pbnZlcnNlIHVsIGxpIGF7XHJcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmxpbmtpbmd7XHJcbiAgICBhbmltYXRpb246YmxpbmtpbmdUZXh0IDhzIGluZmluaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0e1xyXG4gICAgMCV7ICAgICBjb2xvcjogcmVkOyAgICB9XHJcbiAgICA0OSV7ICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG4gICAgNTAleyAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cclxuICAgIDk5JXsgICAgY29sb3I6dHJhbnNwYXJlbnQ7ICB9XHJcbiAgICAxMDAleyAgIGNvbG9yOiAjMDAwOyAgICB9XHJcbn1cclxuaDN7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/invoice-list/invoice-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/invoice-list/invoice-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\"><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKOREDER</h6></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n     <a routerLink=\"/Audi/order/list\">Order</a>\n       </li>\n    <li>\n    <a routerLink=\"/Audi/invoice/invoicelist\">Invoices</a>\n       </li>\n   <li>\n   <a routerLink=\"/Audi/invoice/invoicelist\">NW</a>\n      </li>\n   <li class=\"dropdown\">\n    <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <div class=\"profile-photo-small\">\n        <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n    </div>\n    <div class=\"ripple-container\"></div></a>\n    <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li><a routerLink=\"/Audi/login\">Sign out</a></li>\n    </ul>\n    </li>\n    </ul>\n     \n\n     </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  <div class=\"container\">\n    <h3>Invoice List</h3>\n    <br><br>\n    <div class=\"text-right\">\n     <button class=\"btn btn-dark btn-round \" routerLink=\"/Audi/invoice/create\">Create invoice</button></div>\n      <br>\n      <div class=\"col-lg-2\"></div>\n     <div class=\"table-responsive\">\n       \n      <table class=\"table\">\n        <thead>\n                <tr>\n                  <th>Invoice Id</th>\n                  <th>OrderID</th>\n                  <th>Invoice Date</th>\n                  <th>Amount</th>\n                  <th>Invoice End Date</th>\n                </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of bind;let i=index\">\n                <td id=\"one\" data-tooltip=\"click to view invoice\" routerLink='/Audi/invoice/invoiceview/{{list.id}}' title=\"\">{{i+1}}</td>\n                <td routerLink=\"/Audi/order/list\">{{list.orderid}}</td>\n                <td>{{list.invoicedate}}</td>\n                <td>{{list.amount}}</td>\n                <td>{{list.enddate}}</td>\n            </tr>\n          </tbody> \n        </table>\n         </div>\n         <br>\n         <br>\n         <br>\n         <div class=\"row\">\n         <div class=\"col-lg-12 text-center\">\n          <p class=\"blinking\"><i class=\"fas fa-hand-point-right\"></i> Note:  * If You have To view the invoice details..must you have to click the invoice Id.</p>\n        </div>\n        </div>\n         </div>\n"

/***/ }),

/***/ "./src/app/invoice-list/invoice-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/invoice-list/invoice-list.component.ts ***!
  \********************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(dataservice, routing) {
        this.dataservice = dataservice;
        this.routing = routing;
    }
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.get();
    };
    InvoiceListComponent.prototype.get = function () {
        var _this = this;
        // this.dataservice.getInvoice().subscribe(res=>{
        //   this.bind=res['data'];
        //   console.log(this.bind)
        //   console.log(res)
        // })
        this.dataservice.getInvoice().subscribe(function (res) {
            _this.bind = res;
            console.log(_this.bind);
            console.log(res);
        });
    };
    InvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-list',
            template: __webpack_require__(/*! ./invoice-list.component.html */ "./src/app/invoice-list/invoice-list.component.html"),
            styles: [__webpack_require__(/*! ./invoice-list.component.css */ "./src/app/invoice-list/invoice-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/*!***********************************************!*\
  !*** ./src/app/invoice/invoice.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/invoice/invoice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/invoiceview/invoiceview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/invoiceview/invoiceview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  .navbar-nav>ul>li>a:hover{\r\n    color:white;\r\n    cursor: pointer;\r\n  }\r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  .navbar-inverse{\r\n    position: fixed;\r\n    z-index: 1330;\r\n  }\r\n  h3{\r\n    font-weight: 900;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXZpZXcvaW52b2ljZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNldmlldy9pbnZvaWNldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jsb2Nrb3JkZXJ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICB9XHJcbiAgLm5hdmJhci1uYXY+dWw+bGk+YTpob3ZlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubmF2YmFyLWludmVyc2UgdWwgbGkgYTpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItaW52ZXJzZSB1bCBsaSBhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1pbnZlcnNle1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTMzMDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/invoiceview/invoiceview.component.html":
/*!********************************************************!*\
  !*** ./src/app/invoiceview/invoiceview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\" ><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKORDER</h6></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n       <li>\n        <a routerLink=\"/Audi/order/list\">Order</a>\n      </li>\n      <li>\n         <a routerLink=\"/Audi/invoice/invoicelist\">Invoices</a>\n     </li>\n     <li>\n        <a routerLink=\"/Audi/invoice/invoiceview\">NW</a>\n    </li>\n    <li class=\"dropdown\">\n      <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n       <div class=\"profile-photo-small\">\n     <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n     </div>\n    <div class=\"ripple-container\"></div></a>\n    <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li><a routerLink=\"/Audi/login\">Sign out</a></li>\n       </ul>\n       </li>\n       </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<br><br><br><br>\n<div class=\"features-5\"> \n  <div class=\"container\">\n    <h3>Invoice View</h3>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"info\">\n          <div class=\"icon\">\n          <i class=\"material-icons\">code</i>\n          </div>\n          <h4 class=\"info-title\">Invoice ID</h4>\n          <p>{{result.InvoiceId}}</p>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n      <div class=\"info\">\n      <div class=\"icon\">\n        <i class=\"material-icons\">code</i>\n      </div>\n      <h4 class=\"info-title\">Order Id</h4>\n      <p>{{result.OrderID}}</p>\n      </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n      <div class=\"info\">\n      <div class=\"icon\">\n        <i class=\"far fa-calendar\"></i>\n      </div>\n      <h4 class=\"info-title\">Invoice Date</h4>\n      <p>{{result.InvoiceDate}} </p>\n      </div>\n      </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-sm-4\">\n    <div class=\"info\">\n    <div class=\"icon\">\n    <i class=\"material-icons\">attach_money</i>\n    </div>\n    <h4 class=\"info-title\">Amount</h4>\n    <p>{{result.Amount}}</p>\n    </div>\n    </div>\n    <div class=\"col-sm-4\">\n        <div class=\"info\">\n        <div class=\"icon\">\n            <i class=\"far fa-calendar\"></i>\n        </div>\n        <h4 class=\"info-title\">Invoice End Date</h4>\n        <p>{{result.EndDate}}</p>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-lg-9\"></div>\n  <div class=\"col-lg-2 text-center\">\n  <button class=\"btn btn-rose btn-round\" routerLink=\"/Audi/invoice/invoicelist\">Back</button>\n</div>\n</div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/invoiceview/invoiceview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/invoiceview/invoiceview.component.ts ***!
  \******************************************************/
/*! exports provided: InvoiceviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceviewComponent", function() { return InvoiceviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InvoiceviewComponent = /** @class */ (function () {
    function InvoiceviewComponent(routing, service, route) {
        this.routing = routing;
        this.service = service;
        this.route = route;
        this.result = {
            OrderID: '',
            InvoiceId: '',
            InvoiceDate: '',
            Amount: '',
            EndDate: ''
        };
    }
    InvoiceviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routing.snapshot.params['id'];
        console.log(this.id);
        this.service.getInvoice().subscribe(function (res) {
            _this.bind = res;
            console.log(_this.bind);
            for (var i = 0; i < _this.bind.length; i++) {
                if (_this.id === _this.bind[i].id) {
                    _this.result.OrderID = _this.bind[i].orderid;
                    _this.result.InvoiceId = _this.bind[i].id;
                    _this.result.InvoiceDate = _this.bind[i].invoicedate;
                    _this.result.Amount = _this.bind[i].amount;
                    _this.result.EndDate = _this.bind[i].enddate;
                }
            }
        });
    };
    InvoiceviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoiceview',
            template: __webpack_require__(/*! ./invoiceview.component.html */ "./src/app/invoiceview/invoiceview.component.html"),
            styles: [__webpack_require__(/*! ./invoiceview.component.css */ "./src/app/invoiceview/invoiceview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InvoiceviewComponent);
    return InvoiceviewComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#one {\r\n    padding: 4px; \r\n    color:red;\r\n    font-weight: bold;\r\n    position: relative;\r\n  }\r\n  \r\n  #one:hover:after {\r\n    content: attr(data-tooltip);\r\n    position: absolute;\r\n    background:black;\r\n    color:white;\r\n    padding: 4px;\r\n    border-radius:10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .material-icons{\r\n     font-size:17px;\r\n  }\r\n  \r\n  #blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  \r\n  .text-left{\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  \r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  \r\n  .blinking{\r\n    -webkit-animation:blinkingText 8s infinite;\r\n            animation:blinkingText 8s infinite;\r\n    font-weight: 600;\r\n}\r\n  \r\n  @-webkit-keyframes blinkingText{\r\n    0%{     color: red;    }\r\n    49%{    color: transparent; }\r\n    50%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n  \r\n  @keyframes blinkingText{\r\n    0%{     color: red;    }\r\n    49%{    color: transparent; }\r\n    50%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n  \r\n  h3{\r\n  font-weight: 900;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBQ0E7S0FDRyxjQUFjO0VBQ2pCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDOztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDOztFQUNBO0lBQ0UsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0VBQ0E7SUFDSSxRQUFRLFVBQVUsS0FBSztJQUN2QixRQUFRLGtCQUFrQixFQUFFO0lBQzVCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxpQkFBaUIsR0FBRztJQUM1QixRQUFRLFdBQVcsS0FBSztBQUM1Qjs7RUFOQTtJQUNJLFFBQVEsVUFBVSxLQUFLO0lBQ3ZCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsV0FBVyxLQUFLO0FBQzVCOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb25lIHtcclxuICAgIHBhZGRpbmc6IDRweDsgXHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgI29uZTpob3ZlcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdG9vbHRpcCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICBmb250LXNpemU6MTdweDtcclxuICB9XHJcbiAgI2Jsb2Nrb3JkZXJ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICB9XHJcbiAgLnRleHQtbGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWludmVyc2UgdWwgbGkgYTpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItaW52ZXJzZSB1bCBsaSBhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJsaW5raW5ne1xyXG4gICAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCA4cyBpbmZpbml0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuQGtleWZyYW1lcyBibGlua2luZ1RleHR7XHJcbiAgICAwJXsgICAgIGNvbG9yOiByZWQ7ICAgIH1cclxuICAgIDQ5JXsgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcbiAgICA1MCV7ICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG4gICAgOTkleyAgICBjb2xvcjp0cmFuc3BhcmVudDsgIH1cclxuICAgIDEwMCV7ICAgY29sb3I6ICMwMDA7ICAgIH1cclxufVxyXG5oM3tcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\"><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKOREDER</h6></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n     <a routerLink=\"/Audi/order/list\">Order</a>\n       </li>\n    <li>\n    <a routerLink=\"/Audi/invoice/invoicelist\">Invoices</a>\n       </li>\n   <li>\n   <a routerLink=\"/Audi/order/list\">NW</a>\n      </li>\n   <li class=\"dropdown\">\n    <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <div class=\"profile-photo-small\">\n        <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n    </div>\n    <div class=\"ripple-container\"></div></a>\n        <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li id=\"sign\"><a routerLink=\"/Audi/login\">Sign out</a></li>\n    </ul>\n    </li>\n    </ul>\n     \n\n     </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n<div class=\"container\">\n  <h3>Order List</h3>\n  <br>\n  <div class=\"text-right\">\n   <button class=\"btn btn-dark  btn-round \"(click)=\"ctchange(value)\">Createorder</button></div>\n    <br>\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead>\n              <tr>\n                <th>OrderID</th>\n                <th>Product Name</th>\n                <th>Quantity</th>\n                <th>Order Date</th>\n                <th>Vendor</th>\n                <th>Price</th>\n                <th>Total</th>\n                <th class=\"text-left\">&nbsp;&nbsp;&nbsp;&nbsp;Delete&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit</th>\n            </tr>\n        </thead>\n              <tbody>\n                <tr *ngFor=\"let list of bind;let i=index\">\n                    <td id=\"one\" data-tooltip=\"click to view order\" routerLink='/Audi/order/vieworderid/{{list.id}}' title=\"\">{{i+1}}</td>\n                    <td>{{list.productname}}</td>\n                    <td>{{list.quantity}}</td>\n                    <td>{{list.orderdate}}</td>\n                    <td>{{list.option}}</td>\n                    <td>{{list.price}}</td>\n                    <td>{{list.quantity*list.price}}</td>\n                    <td><button class=\"btn btn-sm btn-danger\"><i class=\"material-icons\" (click)=\"del(list.id)\">close</i></button>\n                    <button  type=\"button\" rel=\"tooltip\" class=\"btn btn-sm btn-success\" data-original-title=\"\" title=\"\" routerLink=\"/Audi/order/update/{{list.id}}\"><i class=\"material-icons\">edit</i></button></td>\n                </tr>\n              </tbody> \n           </table>\n             </div>\n             <div class=\"row\">\n              <div class=\"col-lg-12 text-center\">\n               <p class=\"blinking\"> Note:  * If You have To view the Order details..must you have to click the Order Id.</p>\n             </div>\n             </div>\n             </div>\n       <ngx-spinner\n        bdColor=\"rgba(51,51,51,0.8)\"\n        size=\"medium\"\n        color=\"#fff\"\n        type=\"ball-scale-multiple\">\n       <p style=\"font-size: 20px; color: white\">Loading...</p>\n      </ngx-spinner>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(dataservice, routing, spinner) {
        this.dataservice = dataservice;
        this.routing = routing;
        this.spinner = spinner;
        this.isSubmittingForm = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ListComponent.prototype.get = function () {
        var _this = this;
        this.dataservice.getOrder().subscribe(function (res) {
            _this.bind = res['data'];
            console.log(_this.bind);
            console.log(res);
        });
        //   this.spinner.show(); 
        //   setTimeout(() => { 
        //   this.dataservice.getOrder().subscribe(res=>{
        //     this.bind=res['data'];
        //     console.log(this.bind)
        //   })
        //   this.spinner.hide();
        // }, 1000);
    };
    //  del(value){
    //   this.spinner.show(); 
    //    this.dataservice.delOrder(value).subscribe(res=>{
    //     swal.fire({
    //       title: 'Are you sure?',
    //       text: "You won't be able to revert this!",
    //       type: 'warning',
    //       confirmButtonColor: '#3085d6',
    //       confirmButtonText: 'Yes, delete it!'
    //     }); 
    //      let data=res; 
    //     this.get();
    //     this.spinner.hide();
    //    })
    //    this.erase=value
    //  }
    ListComponent.prototype.del = function (value) {
        var _this = this;
        this.spinner.show();
        this.dataservice.delOrder(value).subscribe(function (res) {
            _this.spinner.hide();
            _this.data = res['data'];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'success',
                text: res['status']
            });
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No,Keep it!'
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
                    _this.isSubmittingForm = true;
                    _this.dataservice.delOrder(value).subscribe(function (res) {
                        _this.isSubmittingForm = false;
                        _this.ngOnInit();
                    });
                }
            });
        });
    };
    ListComponent.prototype.ctchange = function () {
        this.spinner.show();
        this.routing.navigate(['/Audi/createorder']);
        this.spinner.hide();
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg{\r\n    color:red;\r\n}\r\n#account{\r\n    color:black;\r\n    font-weight:500;\r\n}\r\ninput[type=\"email\"]{\r\n    color:black;\r\n}\r\ninput[type=\"password\"]{\r\n    color:black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtc2d7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuI2FjY291bnR7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImVtYWlsXCJde1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div  class=\"page-header header-filter\" style=\"background-color:#FFFFFF;\">\n  <br>\n    <div class=\"container\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"card card-signup\">\n            <h2 class=\"card-title text-center\">Order Management</h2>\n               <div class=\"row\">\n                  <div  id=\"small\"class=\"col-md-5 col-md-offset-1\">\n                    <div class=\"info info-horizontal\">\n                      <div class=\"icon icon-rose\">\n                        <i class=\"material-icons\">timeline</i>\n                      </div>\n                      <div class=\"description\">\n                        <h4 class=\"info-title\">Intro of Audi</h4>\n                        <p class=\"description\">\n                          a German automobile manufacturer that designs, engineers, produces, markets.\n                        </p>\n                      </div>\n                        </div>\n    \n                    <div class=\"info info-horizontal\">\n                      <div class=\"icon icon-primary\">\n                        <i class=\"material-icons\">code</i>\n                      </div>\n                      <div class=\"description\">\n                        <h4 class=\"info-title\">Member</h4>\n                        <p class=\"description\">\n                          Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany.\n                        </p>\n                      </div>\n                    </div>\n    \n                    <div class=\"info info-horizontal\">\n                      <div class=\"icon icon-info\">\n                        <i class=\"material-icons\">group</i>\n                      </div>\n                      <div class=\"description\">\n                        <h4 class=\"info-title\">Built Audience</h4>\n                        <p class=\"description\">\n                          There is also a Fully Customizable CMS Admin Dashboard for this product.\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-5\">\n              <div class=\"social text-center\">\n                <img class=\"audiimag\"src=\"assets/img/29748-2-audi-logo-with-transparent-background.png\">\n               </div>   \n    \n              <form   autocomplete=\"off\" class=\"form\" name=\"login\" #login=\"ngForm\" (ngSubmit)=\"onSignIn(login.value)\">\n                <div class=\"card-content\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                     <i class=\"material-icons\">email</i>\n                    </span>\n                    <div class=\"form-group is-empty\"><input type=\"email\"  autocomplete=\"off\" name=\"Email\" #Email=\"ngModel\"  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" ngModel required class=\"form-control\" placeholder=\"Email...\"><span class=\"material-input\"></span></div>\n                    <div *ngIf=\"Email.errors && (Email.touched|| Email.dirty)\" class=\"alert text-light\">\n                      <div id=\"msg\" [hidden]=\"!Email.errors.required\">\n                            Email required\n                      </div>\n                        <div id=\"msg\" [hidden]=\"!Email.errors.pattern\">\n                                  Please enter valid email\n                         </div>                                                      \n                     </div>\n                  </div>\n    \n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                    <div class=\"form-group is-empty\"><input type=\"password\"  autocomplete=\"off\" name=\"Password\" #Password=\"ngModel\" minlength=\"8\" ngModel required  placeholder=\"Password...\"  class=\"form-control\"><span class=\"material-input\"></span></div>\n                    <div *ngIf=\"Password.errors && (Password.touched|| Password.dirty)\" class=\"alert text-light\">\n                        <div id=\"msg\" [hidden]=\"!Password.errors.required\">\n                            Password requried\n                        </div>\n                    </div>\n                  </div>\n    \n                  <!-- If you want to add a checkbox to this form, uncomment this code -->\n    \n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\" name=\"optionsCheckboxes\"  ngModel required><span class=\"checkbox-material\"></span>\n                      I agree to the terms and conditions.\n                    </label>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                 <button type=\"submit\"  class=\"btn btn-info btn-round\"  [disabled]=\"!login.form.valid \">Sign in</button>\n                 <br><br>\n                 <a routerLink=\"/Audi/signup\"><p id=\"account\">Don't have an account? Login now!</p></a>\n                </div>\n              </form>\n              </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      </body>\n        <ngx-spinner\n        bdColor=\"rgba(51,51,51,0.8)\"\n        size=\"medium\"\n        color=\"#fff\"\n        type=\"ball-scale-multiple\">\n       <p style=\"font-size: 20px; color: white\">Loading...</p>\n      </ngx-spinner>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataservice, routing, spinner) {
        this.dataservice = dataservice;
        this.routing = routing;
        this.spinner = spinner;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.dataservice.login().subscribe(res=>{
        //   this.bind=res;
        //   console.log(res)
        // })
    };
    LoginComponent.prototype.onSignIn = function (value) {
        var _this = this;
        this.spinner.show();
        this.dataservice.login(value).subscribe(function (res) {
            _this.bind = res;
            // for(let i=0;i<this.bind.length;i++){
            //  if(value.email===this.bind[i].Email){
            //  if(value.password===this.bind[i].Password){
            // this.spinner.hide()
            // swal.fire({
            //   type:'success',
            //   text: res['status'],
            // })
            console.log(res);
            _this.routing.navigate(['/Audi/order/list']);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());

//      }
//     }
//     )}
//  }
//     this.spinner.show(); 
//     setTimeout(() => { 
//     for(let i=0;i<this.bind.length;i++){
//       if(value.Email===this.bind[i].Email){
//         if(value.Password===this.bind[i].Password){
//           swal.fire({
//             title: 'Login Successfull!',
//             type: 'success',
//             confirmButtonColor: '#3085d6',
//             confirmButtonText: 'ok'
//           }); 
//           this.routing.navigate(['/Audi/createorder']);
//         }
//         else{
//           swal.fire({
//             title: 'passward mismatch!',
//             text: "please type correct password",
//             type: 'warning',
//             confirmButtonColor: '#3085d6',
//             confirmButtonText: 'ok'
//           }); 
//         }  
//     }
//   }
//   this.spinner.hide();
// }, 1000);
// }
// }


/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg{\r\n    color:red;\r\n}\r\n#account{\r\n    color:black;\r\n    font-weight: 500;\r\n}\r\ninput[type=\"text\"]{\r\n    color:black;\r\n}\r\ninput[type=\"email\"]{\r\n    color:black;\r\n}\r\ninput[type=\"password\"]{\r\n    color:black;\r\n}\r\nbody{\r\n    overflow-y: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXNne1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbiNhY2NvdW50e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuaW5wdXRbdHlwZT1cImVtYWlsXCJde1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYm9keXtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div  class=\"page-header header-filter\" style=\"background-color:#FFFFFF;\">\n<div class=\"container\">\n  <br>\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"card card-signup\">\n                  <h2 class=\"card-title text-center\">Order Management</h2>\n                  <div class=\"row\">\n                      <div id=\"small\" class=\"col-md-5 col-md-offset-1\">\n                <div class=\"info info-horizontal\">\n                  <div class=\"icon icon-rose\">\n                    <i class=\"material-icons\">timeline</i>\n                  </div>\n                  <div class=\"description\">\n                    <h4 class=\"info-title\">Intro of Audi</h4>\n                    <p class=\"description\">\n                      a German automobile manufacturer that designs, engineers, produces, markets.\n                    </p>\n                  </div>\n                    </div>\n\n                <div class=\"info info-horizontal\">\n                  <div class=\"icon icon-primary\">\n                    <i class=\"material-icons\">code</i>\n                  </div>\n                  <div class=\"description\">\n                    <h4 class=\"info-title\">Member</h4>\n                    <p class=\"description\">\n                      Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany.\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"info info-horizontal\">\n                  <div class=\"icon icon-info\">\n                    <i class=\"material-icons\">group</i>\n                  </div>\n                  <div class=\"description\">\n                    <h4 class=\"info-title\">Built Audience</h4>\n                    <p class=\"description\">\n                      There is also a Fully Customizable CMS Admin Dashboard for this product.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n          <div class=\"social text-center\">\n            <img class=\"audiimag\"src=\"assets/img/29748-2-audi-logo-with-transparent-background.png\">\n           </div>   \n\n          <form  class=\"form\"  autocomplete=\"off\" name=\"signUp\" #signUp=\"ngForm\" (ngSubmit)=\"onSignUp(signUp.value)\">\n            <div class=\"card-content\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">face</i>\n                </span>\n                <div class=\"form-group is-empty\"><input type=\"text\"  autocomplete=\"off\" name=\"fname\" #fname=\"ngModel\" ngModel required  class=\"form-control\" placeholder=\"First Name...\" ><span class=\"material-input\" ></span></div>\n                <div *ngIf=\"fname.errors && (fname.touched|| fname.dirty)\" class=\"alert text-light\">\n                  <div id=\"msg\" [hidden]=\"!fname.errors.required\">\n                      Name requried\n                  </div>\n              </div>\n              </div>\n\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">email</i>\n                </span>\n                <div class=\"form-group is-empty\"><input type=\"email\"  autocomplete=\"off\" name=\"Email\" #Email=\"ngModel\"  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" ngModel required class=\"form-control\" placeholder=\"Email...\"><span class=\"material-input\"></span></div>\n                <div *ngIf=\"Email.errors && (Email.touched|| Email.dirty)\" class=\"alert text-light\">\n                    <div id=\"msg\" [hidden]=\"!Email.errors.required\">\n                        Email required\n                    </div>\n                          <div id=\"msg\" [hidden]=\"!Email.errors.pattern\">\n                              Please enter valid email\n                         </div>                                                      \n                 </div>\n              </div>\n\n\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">lock_outline</i>\n                </span>\n                <div class=\"form-group is-empty\"><input type=\"password\"  autocomplete=\"off\" name=\"Password\" #Password=\"ngModel\" minlength=\"8\" ngModel required  placeholder=\"Password...\"  class=\"form-control\"><span class=\"material-input\"></span></div>\n                <div *ngIf=\"Password.errors && (Password.touched|| Password.dirty)\" class=\"alert text-light\">\n                    <div id=\"msg\" [hidden]=\"!Password.errors.required\">\n                        Password requried\n                    </div>\n                          <div id=\"msg\" [hidden]=\"!Password.errors.minlength\">\n                             Please enter minimum 8 character\n                          </div>\n                </div>\n              </div>\n\n              <!-- If you want to add a checkbox to this form, uncomment this code -->\n\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" name=\"optionsCheckboxes\"  ngModel required><span class=\"checkbox-material\"></span>\n                  I agree to the terms and conditions.\n                </label>\n              </div>\n            </div>\n            <div class=\"text-center\">\n             <button type=\"submit\"  class=\"btn btn-info btn-round\"  [disabled]=\"!signUp.form.valid \">Sign up</button>\n             <a routerLink=\"/Audi/login\"><p id=\"account\">Already have an account?</p></a>\n            </div>\n          </form>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </body>\n    <ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n  \n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(dataservice, routing, spinner) {
        this.dataservice = dataservice;
        this.routing = routing;
        this.spinner = spinner;
        this.user = {};
        this.userId = {
            uid: ''
        };
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        this.error = { name: '', message: '' };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (value) {
        var _this = this;
        this.spinner.show();
        this.dataservice.signup(value).subscribe(function (res) {
            _this.spinner.hide();
            // swal.fire({
            //   type:'success',
            //   text: res['status'],
            // })
            _this.routing.navigate(['/Audi/login']);
            console.log(res);
        });
        // this.spinner.show();
        // console.log(value)
        // let data ={
        //   fname:"",
        //   email:"",
        //   password:"",
        // }
        // this.message = 'Success';
        // alert(this.message);
        // this.routing.navigate(['/login'])
        // setTimeout(() => {
        //   this.dataservice.regData(value).then(res=>{
        //     this.data1=res;
        //     swal.fire({
        //       title:'Account create successfully!',
        //       type:'success',
        //       confirmButtonColor: '#3085d6',
        //       confirmButtonText: 'ok'
        //     }); 
        //     this.routing.navigate(['/login']);
        //     console.log(res)
        //   })
        //   this.spinner.hide();
        // }, 1000);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=date] {\r\n    text-align:right;\r\n  }\r\n  input[type=date]::after {\r\n    text-align:left;\r\n  }\r\n  input[type=\"date\"]:before {\r\n    color: lightgrey;\r\n  }\r\n  input[type=\"date\"]:focus:after {\r\n    text-align: left;\r\n  }\r\n  input[type=date]:after {\r\n    color: black;\r\n    \r\n  }\r\n  input[type=text]{\r\n    color:black;\r\n  }\r\n  #blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  h3{\r\n    font-weight: 900;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBR0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTs7RUFFZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPWRhdGVdIHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9ZGF0ZV06OmFmdGVyIHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiBcclxuICBcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpiZWZvcmUge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6YWZ0ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1kYXRlXTphZnRlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICB9XHJcbiAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICAjYmxvY2tvcmRlcntcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWludmVyc2UgdWwgbGkgYTpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItaW52ZXJzZSB1bCBsaSBhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\"><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKORDER</h6></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n\n<ul class=\"nav navbar-nav\" >\n<li>\n<a routerLink=\"/Audi/order/list\">Order</a>\n</li>\n <li>\n<a routerLink=\"/Audi/invoice/invoicelist\">Invoices</a>\n</li>\n<li>\n  <a routerLink=\"/Audi/order/update\">NW</a>\n  </li>\n  <li class=\"dropdown\">\n    <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n        <div class=\"profile-photo-small\">\n         <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n</div>\n    <div class=\"ripple-container\" ></div></a>\n    \n    <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li><a routerLink=\"/Audi/login\">Sign out</a></li>\n    </ul>\n  </li>\n</ul>\n\n     \n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\">\n    <h3>CreateOrder</h3>\n  <br><br><br><br><br>\n  <form  autocomplete=\"off\" name=\"create\" #create=\"ngForm\">\n  <div class=\"row\">\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n        <div class=\"form-group\">\n           <label class=\"control-label\">Product Name</label>\n          <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"productname\" [(ngModel)]='bindData.productname' required>\n        <span class=\"material-input\"></span></div>\n      </div>\n\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n   <div class=\"form-group\">\n    <label class=\"control-label\">Quantity</label>\n   <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"quantity\"  [(ngModel)]='bindData.quantity' required>\n   <span class=\"material-input\"></span></div>\n</div>\n\n<div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group\">\n    <label class=\"control-label\">Order Date</label>\n    <input type=\"date\" autocomplete=\"off\" class=\"form-control\" name=\"orderdate\" [(ngModel)]='bindData.orderdate' required>\n    <span class=\"material-input\"></span></div>\n  </div>\n </div>\n\n <div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n          <div class=\"form-group\">\n              <label class=\"control-label\">vendor</label>\n            <select type=\"text\"   class=\"form-control\" name=\"option\"  [(ngModel)]='bindData.option' required>\n              <option value=\"\" disabled selected>Vendor</option>\n              <option value=\"MRF\">MRF</option>\n              <option value=\"BridgeStone\">BridgeStone</option>\n              </select>\n              <span class=\"material-input\"></span></div>\n  </div>\n  \n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n  <div class=\"form-group\">\n  <label class=\"control-label\">Expected Delivery Date</label>\n   <input type=\"date\" autocomplete=\"off\" class=\"form-control\" name=\"ExpectedDeliveryDate\" [(ngModel)]='bindData.ExpectedDeliveryDate' required>\n  <span class=\"material-input\"></span></div>\n  </div>\n  \n  <div class=\"col-lg-4 col-md-4 col-sm-3\">\n    <div class=\"form-group\">\n      <label class=\"control-label\">Price</label>\n      <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"price\" [(ngModel)]='bindData.price' required>\n     <span class=\"material-input\"></span></div>\n     </div>\n    </div>\n   <div class=\"col-md-4 col-md-offset-8\">\n     <br>\n     <br>\n    <button type=\"submit\" class=\"btn btn-success\" (click)='update(value)'>update </button>\n    <button class=\"btn btn-danger\" routerLink=\"/Audi/order/list\">Cancel</button>\n</div>\n</form>\n</div>\n<ngx-spinner\n        bdColor=\"rgba(51,51,51,0.8)\"\n        size=\"medium\"\n        color=\"#fff\"\n        type=\"ball-scale-multiple\">\n       <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(routing, service, route, spinner) {
        this.routing = routing;
        this.service = service;
        this.route = route;
        this.spinner = spinner;
        this.bindData = {
            OrderID: '',
            productname: '',
            quantity: '',
            orderdate: '',
            option: '',
            price: '',
            ExpectedDeliveryDate: '',
        };
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routing.snapshot.params['id'];
        console.log(this.id);
        this.service.getOrder().subscribe(function (res) {
            _this.bind = res['data'];
            console.log(_this.bind);
            for (var i = 0; i < _this.bind.length; i++) {
                if (_this.id === _this.bind[i].id) {
                    _this.bindData.OrderID = _this.bind[i].id;
                    _this.bindData.productname = _this.bind[i].productname;
                    _this.bindData.quantity = _this.bind[i].quantity;
                    _this.bindData.option = _this.bind[i].option;
                    _this.bindData.orderdate = _this.bind[i].orderdate;
                    _this.bindData.price = _this.bind[i].price;
                    _this.bindData.ExpectedDeliveryDate = _this.bind[i].ExpectedDeliveryDate;
                }
            }
        });
    };
    UpdateComponent.prototype.update = function () {
        var _this = this;
        this.spinner.show();
        this.service.updated(this.bindData).subscribe(function (res) {
            _this.edit = res;
            _this.spinner.hide();
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'success',
                text: res['status']
            });
            if (res['status'] = 'Updated successfully') {
                _this.route.navigate(['/Audi/order/list']);
            }
            else {
                _this.route.navigate(['/Audi/order/update']);
            }
        });
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/vieworderid/vieworderid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/vieworderid/vieworderid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blockorder{\r\n    font-size:18px;\r\n    font-weight: 600;\r\n    margin-top:0px;\r\n  }\r\n  .navbar-inverse ul li a:hover{\r\n    border-bottom:3px solid black !important;\r\n  }\r\n  .navbar-inverse ul li a{\r\n    border-bottom:3px solid white !important;\r\n  }\r\n  .navbar-inverse{\r\n    position: fixed;\r\n    z-index: 1330;\r\n  }\r\n  h3{\r\n    font-weight: 900;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld29yZGVyaWQvdmlld29yZGVyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdvcmRlcmlkL3ZpZXdvcmRlcmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmxvY2tvcmRlcntcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWludmVyc2UgdWwgbGkgYTpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItaW52ZXJzZSB1bCBsaSBhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1pbnZlcnNle1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTMzMDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/vieworderid/vieworderid.component.html":
/*!********************************************************!*\
  !*** ./src/app/vieworderid/vieworderid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/Audi/login\"><h6 id=\"blockorder\" ><img id=\"block\" src=\"assets/img/audi-filled.png\">BLOCKORDER</h6></a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n         <li>\n          <a routerLink=\"/Audi/order/list\">Order</a>\n        </li>\n        <li>\n           <a routerLink=\"/Audi/invoice/invoicelist\">Invoices</a>\n       </li>\n       <li>\n          <a routerLink=\"/Audi/order/vieworderid\">NW</a>\n      </li>\n      <li class=\"dropdown\">\n        <a href=\"#pablo\" class=\"profile-photo dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n         <div class=\"profile-photo-small\">\n       <img src=\"assets/img/logo.png\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n       </div>\n      <div class=\"ripple-container\"></div></a>\n      <ul class=\"dropdown-menu\">\n          <li class=\"divider\"></li>\n          <li><a routerLink=\"/Audi/login\">Sign out</a></li>\n         </ul>\n         </li>\n         </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n\n\n  <br><br><br><br>\n  <div class=\"features-5\">\n    \n\t\t<div class=\"container\">\n        <h3>VieworderId</h3>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<i class=\"material-icons\">code</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"info-title\">OrderID</h4>\n\t\t\t\t\t\t<p>{{result.OrderID}} </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t<div class=\"icon\">\n\t\t\t\t<i class=\"fab fa-product-hunt\"></i>\n\t\t\t\t</div>\n\t\t\t\t<h4 class=\"info-title\">Product Name</h4>\n\t\t\t\t<p>{{result.productname}}</p>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t<div class=\"icon\">\n                <i class=\"fas fa-shopping-cart\"></i>\n\t\t\t\t</div>\n\t\t\t\t<h4 class=\"info-title\">Quantity</h4>\n\t\t\t\t<p>{{result.quantity}} </p>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t   </div>\n\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"info\">\n\t\t\t<div class=\"icon\">\n            <i class=\"fab fa-supple fa-xl\"></i>\n\t\t\t</div>\n\t\t\t<h4 class=\"info-title\">Vendor</h4>\n\t\t\t<p>{{result.option}}</p>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"icon\">\n             <i class=\"far fa-calendar\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"info-title\">Order Date</h4>\n\t\t\t\t\t\t<p>{{result.orderdate}} </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<i class=\"material-icons\">attach_money</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"info-title\">Price</h4>\n\t\t\t\t\t\t<p>{{result.price}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n              </div>\n      <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"info\">\n              <div class=\"icon\">\n                <i class=\"far fa-calendar\"></i>\n              </div>\n              <h4 class=\"info-title\">Expected Delivery Date</h4>\n              <p>{{result.ExpectedDeliveryDate}}</p>\n            </div>\n          </div>\n          <br>\n          <br>\n        <div class=\"col-lg-6\"></div>\n        <div class=\"col-lg-2 text-center\">\n          <button class=\"btn btn-rose btn-round\" (click)=\"back()\">Back</button>\n          </div>\n        </div>\n    </div>\n    <ngx-spinner\n    bdColor=\"rgba(51,51,51,0.8)\"\n    size=\"medium\"\n    color=\"#fff\"\n    type=\"ball-scale-multiple\">\n   <p style=\"font-size: 20px; color: white\">Loading...</p>\n  </ngx-spinner>\n  \n    \n\t\n"

/***/ }),

/***/ "./src/app/vieworderid/vieworderid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/vieworderid/vieworderid.component.ts ***!
  \******************************************************/
/*! exports provided: VieworderidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieworderidComponent", function() { return VieworderidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var VieworderidComponent = /** @class */ (function () {
    function VieworderidComponent(routing, service, spinner, route) {
        this.routing = routing;
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this.result = {
            OrderID: '',
            productname: '',
            quantity: '',
            orderdate: '',
            option: '',
            price: '',
            ExpectedDeliveryDate: '',
        };
    }
    VieworderidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routing.snapshot.params['id'];
        console.log(this.id);
        this.service.getOrder().subscribe(function (res) {
            _this.bind = res['data'];
            console.log(_this.bind);
            //  Swal.fire({
            //   type:'success',
            //   text:res['status']
            // })
            // this.service.getOrder().subscribe(res=>{
            //   this.bind=res;
            for (var i = 0; i < _this.bind.length; i++) {
                if (_this.id === _this.bind[i].id) {
                    _this.result.OrderID = _this.bind[i].id;
                    _this.result.productname = _this.bind[i].productname;
                    _this.result.quantity = _this.bind[i].quantity;
                    _this.result.option = _this.bind[i].option;
                    _this.result.orderdate = _this.bind[i].orderdate;
                    _this.result.price = _this.bind[i].price;
                    _this.result.ExpectedDeliveryDate = _this.bind[i].ExpectedDeliveryDate;
                }
            }
        });
    };
    VieworderidComponent.prototype.back = function () {
        this.spinner.show();
        this.route.navigate(['/Audi/order/list']);
        this.spinner.hide();
    };
    VieworderidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vieworderid',
            template: __webpack_require__(/*! ./vieworderid.component.html */ "./src/app/vieworderid/vieworderid.component.html"),
            styles: [__webpack_require__(/*! ./vieworderid.component.css */ "./src/app/vieworderid/vieworderid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VieworderidComponent);
    return VieworderidComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ordermanagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map