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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul>li\r\n{\r\n  display: inline-block;\r\n\r\n}\r\nul{\r\n  margin:0px;\r\n  padding: 0px;\r\n}\r\nul>li>a\r\n{\r\n  margin-right: 20px;\r\n}\r\n.active {\r\n  color: #af00db;\r\n  text-decoration: underline;\r\n  }\r\na{\r\n    color: rgb(86, 105, 168);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n\n<a routerLink=\"\">\n<img src=\"../assets/img/movie-tube-brand-logo.svg\" alt=\"logo\" height=\"60\" width=\"120\">\n</a>\n<ul>\n  <li><a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Movie</a></li>\n  <li><a routerLink=\"/live\" routerLinkActive=\"active\">Live</a></li>\n  <li><a routerLink=\"/movie-request\" routerLinkActive=\"active\">Movie Request</a></li>\n  <li><a routerLink=\"/feature-request\" routerLinkActive=\"active\">Feature Request</a></li>\n  <li><a routerLink=\"/report\" routerLinkActive=\"active\">Reports</a></li>\n</ul>\n<hr>\n<router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movie-tube-web';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/movie/movie.component */ "./src/app/component/movie/movie.component.ts");
/* harmony import */ var _component_live_live_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/live/live.component */ "./src/app/component/live/live.component.ts");
/* harmony import */ var _component_movie_request_movie_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/movie-request/movie-request.component */ "./src/app/component/movie-request/movie-request.component.ts");
/* harmony import */ var _component_feature_request_feature_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/feature-request/feature-request.component */ "./src/app/component/feature-request/feature-request.component.ts");
/* harmony import */ var _component_report_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/report/report.component */ "./src/app/component/report/report.component.ts");
/* harmony import */ var _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/notfound/notfound.component */ "./src/app/component/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"],
                _component_live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"],
                _component_movie_request_movie_request_component__WEBPACK_IMPORTED_MODULE_6__["MovieRequestComponent"],
                _component_feature_request_feature_request_component__WEBPACK_IMPORTED_MODULE_7__["FeatureRequestComponent"],
                _component_report_report_component__WEBPACK_IMPORTED_MODULE_8__["ReportComponent"],
                _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
                    { path: 'live', component: _component_live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"] },
                    { path: 'movie-request', component: _component_movie_request_movie_request_component__WEBPACK_IMPORTED_MODULE_6__["MovieRequestComponent"] },
                    { path: 'feature-request', component: _component_feature_request_feature_request_component__WEBPACK_IMPORTED_MODULE_7__["FeatureRequestComponent"] },
                    { path: 'report', component: _component_report_report_component__WEBPACK_IMPORTED_MODULE_8__["ReportComponent"] },
                    { path: 'feature-request', component: _component_feature_request_feature_request_component__WEBPACK_IMPORTED_MODULE_7__["FeatureRequestComponent"] },
                    { path: '**', component: _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/feature-request/feature-request.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/feature-request/feature-request.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/feature-request/feature-request.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/feature-request/feature-request.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feature-request works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/feature-request/feature-request.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/feature-request/feature-request.component.ts ***!
  \************************************************************************/
/*! exports provided: FeatureRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureRequestComponent", function() { return FeatureRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureRequestComponent = /** @class */ (function () {
    function FeatureRequestComponent() {
    }
    FeatureRequestComponent.prototype.ngOnInit = function () {
    };
    FeatureRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-request',
            template: __webpack_require__(/*! ./feature-request.component.html */ "./src/app/component/feature-request/feature-request.component.html"),
            styles: [__webpack_require__(/*! ./feature-request.component.css */ "./src/app/component/feature-request/feature-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureRequestComponent);
    return FeatureRequestComponent;
}());



/***/ }),

/***/ "./src/app/component/live/live.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/live/live.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/live/live.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/live/live.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  live works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/live/live.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/live/live.component.ts ***!
  \**************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveComponent = /** @class */ (function () {
    function LiveComponent() {
    }
    LiveComponent.prototype.ngOnInit = function () {
    };
    LiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/component/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.css */ "./src/app/component/live/live.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/component/movie-request/movie-request.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/movie-request/movie-request.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/movie-request/movie-request.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/movie-request/movie-request.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  movie-request works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/movie-request/movie-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/movie-request/movie-request.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRequestComponent", function() { return MovieRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieRequestComponent = /** @class */ (function () {
    function MovieRequestComponent() {
    }
    MovieRequestComponent.prototype.ngOnInit = function () {
    };
    MovieRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-request',
            template: __webpack_require__(/*! ./movie-request.component.html */ "./src/app/component/movie-request/movie-request.component.html"),
            styles: [__webpack_require__(/*! ./movie-request.component.css */ "./src/app/component/movie-request/movie-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieRequestComponent);
    return MovieRequestComponent;
}());



/***/ }),

/***/ "./src/app/component/movie/movie.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/movie/movie.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/movie/movie.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/movie/movie.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  movie works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/movie/movie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/movie/movie.component.ts ***!
  \****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/component/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/component/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/component/notfound/notfound.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/notfound/notfound.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/notfound/notfound.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.ts ***!
  \**********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/component/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/component/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/component/report/report.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/report/report.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/report/report.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/report/report.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  report works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/report/report.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/report/report.component.ts ***!
  \******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/component/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/component/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
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

module.exports = __webpack_require__(/*! E:\AngularProjects\movie-tube-web\movie-tube-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map