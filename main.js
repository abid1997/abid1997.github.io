(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" \n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"/\">Home</a></li>\n        <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink=\"/servers\">Servers</a></li>\n        <li role=\"presentation\" routerLinkActive=\"active\"><a [routerLink]=\"['/users']\">Users</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <br>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Error 404</title>\n</head>\n<body>\n  <div>\n  <h1>4</h1>\n  <h1>0</h1>\n  <h1>4</h1>\n</div>\n<div>\n  <h3 style=\"margin-left: 260px\">Oops!Page not found.</h3>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Welcome to Server Manager 4.0</h4>\n<p>Manage your Servers and Users.</p>\n<button class=\"btn btn-success\" (click)=\"onloadServers()\">Load Servers</button>\n<button class=\"btn btn-default\" (click)=\"onLogin()\">Login</button>\n<button class=\"btn btn-default\" (click)=\"onLogout()\">Logout</button>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/edit-server/edit-server.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/edit-server/edit-server.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"!allowEdit\">You're not allowed to edit!</h4>\n<div *ngIf=\"allowEdit\">\n    <div class=\"form-group\">\n        <label for=\"name\">Server Name</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          class=\"form-control\"\n          [(ngModel)]=\"serverName\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"status\">Server Status</label>\n        <select\n          id=\"status\"\n          class=\"form-control\"\n          [(ngModel)]=\"serverStatus\">\n          <option value=\"online\">Online</option>\n          <option value=\"offline\">Offline</option>\n        </select>\n      </div>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"onUpdateServer()\">Update Server\n      </button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/server/server.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/server/server.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>{{ server.name }}</h5>\n<p>Server status is {{ server.status }}</p>\n<button class=\"btn btn-primary\" (click)=\"onEditServer()\">Edit Server</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/servers.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/servers.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"list-group\">\n      <a\n        [routerLink]=\"['/servers',server.id]\"\n        [queryParams]=\"{allowEdit: server.id === 3 ? '1' : '0'}\"\n        fragment=\"loading\"\n        class=\"list-group-item\"\n        *ngFor=\"let server of servers\">\n        {{ server.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n    <!-- <a routerLink=\"/servers\">Reload Page</a>\n    <app-edit-server></app-edit-server>\n    <hr>\n    <app-server></app-server> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>User with ID {{ user.id }} loaded.</p>\n<p>User name is {{ user.name }}</p>\n<hr>\n<a [routerLink]=\"['/users',10,'Anna']\">Load Anna(10).</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"list-group\">\n      <a\n        [routerLink]=\"['/users',user.id,user.name]\"\n        class=\"list-group-item\"\n        *ngFor=\"let user of users\">\n        {{ user.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

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

module.exports = ".container {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _servers_edit_server_edit_server_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servers/edit-server/edit-server.component */ "./src/app/servers/edit-server/edit-server.component.ts");
/* harmony import */ var _servers_server_server_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servers/server/server.component */ "./src/app/servers/server/server.component.ts");
/* harmony import */ var _servers_servers_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servers/servers.service */ "./src/app/servers/servers.service.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], children: [
            { path: ':id/:name', component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"] },
        ] },
    { path: 'servers',
        //canActivate: [AuthGaurd],
        canActivateChild: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGaurd"]],
        component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"],
        children: [
            { path: ':id', component: _servers_server_server_component__WEBPACK_IMPORTED_MODULE_10__["ServerComponent"] },
            { path: ':id/edit', component: _servers_edit_server_edit_server_component__WEBPACK_IMPORTED_MODULE_9__["EditServerComponent"] },
        ] },
    { path: 'not-found', component: _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"] },
    { path: '**', redirectTo: '/not-found' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"],
                _users_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _servers_edit_server_edit_server_component__WEBPACK_IMPORTED_MODULE_9__["EditServerComponent"],
                _servers_server_server_component__WEBPACK_IMPORTED_MODULE_10__["ServerComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [_servers_servers_service__WEBPACK_IMPORTED_MODULE_11__["ServersService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGaurd"], _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(authService, r) {
        this.authService = authService;
        this.r = r;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.r.navigate(['/']);
            }
        });
    };
    AuthGaurd.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin:20;\r\n    font-family:sans-serif;\r\n    color:red;\r\n    background:#f7f7f7;\r\n  }\r\n  div{\r\n      margin-top: 300px;\r\n  }\r\n  h1 {\r\n    font-size:11rem;\r\n    position:absolute;\r\n    -webkit-transform:translate(-50%,-50%);\r\n            transform:translate(-50%,-50%);\r\n    margin:0;\r\n  }\r\n  h1:nth-of-type(1){\r\n    -webkit-animation: range 4s infinite;\r\n            animation: range 4s infinite;\r\n  }\r\n  h1:nth-of-type(2){\r\n    left:50%;\r\n    top:50%;\r\n    -webkit-animation: size 4s infinite;\r\n            animation: size 4s infinite;\r\n  }\r\n  h1:nth-of-type(3){\r\n    -webkit-animation: range2 4s infinite;\r\n            animation: range2 4s infinite;\r\n  }\r\n  @-webkit-keyframes range {\r\n    0%  {left:42%;top:50%;font-size:11rem;}\r\n    25% {left:50%;top:40%;font-size:4.5rem;}\r\n    50% {left:58%;top:50%;font-size:11rem;}\r\n    75% {left:50%;top:60%;font-size:4.5rem;}\r\n    100%{left:42%;top:50%;font-size:11rem;}\r\n  }\r\n  @keyframes range {\r\n    0%  {left:42%;top:50%;font-size:11rem;}\r\n    25% {left:50%;top:40%;font-size:4.5rem;}\r\n    50% {left:58%;top:50%;font-size:11rem;}\r\n    75% {left:50%;top:60%;font-size:4.5rem;}\r\n    100%{left:42%;top:50%;font-size:11rem;}\r\n  }\r\n  @-webkit-keyframes range2 {\r\n    0%  {left:58%;top:50%;font-size:11rem;}\r\n    25% {left:50%;top:60%;font-size:4.5rem;}\r\n    50% {left:42%;top:50%;font-size:11rem;}\r\n    75% {left:50%;top:40%;font-size:4.5rem;}\r\n    100%{left:58%;top:50%;font-size:11rem;}\r\n  }\r\n  @keyframes range2 {\r\n    0%  {left:58%;top:50%;font-size:11rem;}\r\n    25% {left:50%;top:60%;font-size:4.5rem;}\r\n    50% {left:42%;top:50%;font-size:11rem;}\r\n    75% {left:50%;top:40%;font-size:4.5rem;}\r\n    100%{left:58%;top:50%;font-size:11rem;}\r\n  }\r\n  @-webkit-keyframes size {\r\n    0%  {font-size:11rem;}\r\n    25% {font-size:26rem;}\r\n    50% {font-size:11rem;}\r\n    75% {font-size:26rem;}\r\n    100%{font-size:11rem;}\r\n  }\r\n  @keyframes size {\r\n    0%  {font-size:11rem;}\r\n    25% {font-size:26rem;}\r\n    50% {font-size:11rem;}\r\n    75% {font-size:26rem;}\r\n    100%{font-size:11rem;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsUUFBUTtFQUNWO0VBQ0E7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsT0FBTztJQUNQLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7RUFDeEM7RUFOQTtJQUNFLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7RUFDeEM7RUFDQTtJQUNFLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7RUFDeEM7RUFOQTtJQUNFLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7RUFDeEM7RUFDQTtJQUNFLEtBQUssZUFBZSxDQUFDO0lBQ3JCLEtBQUssZUFBZSxDQUFDO0lBQ3JCLEtBQUssZUFBZSxDQUFDO0lBQ3JCLEtBQUssZUFBZSxDQUFDO0lBQ3JCLEtBQUssZUFBZSxDQUFDO0VBQ3ZCO0VBTkE7SUFDRSxLQUFLLGVBQWUsQ0FBQztJQUNyQixLQUFLLGVBQWUsQ0FBQztJQUNyQixLQUFLLGVBQWUsQ0FBQztJQUNyQixLQUFLLGVBQWUsQ0FBQztJQUNyQixLQUFLLGVBQWUsQ0FBQztFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjoyMDtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiNmN2Y3Zjc7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgICAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZToxMXJlbTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgfVxyXG4gIGgxOm50aC1vZi10eXBlKDEpe1xyXG4gICAgYW5pbWF0aW9uOiByYW5nZSA0cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgaDE6bnRoLW9mLXR5cGUoMil7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBhbmltYXRpb246IHNpemUgNHMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIGgxOm50aC1vZi10eXBlKDMpe1xyXG4gICAgYW5pbWF0aW9uOiByYW5nZTIgNHMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcmFuZ2Uge1xyXG4gICAgMCUgIHtsZWZ0OjQyJTt0b3A6NTAlO2ZvbnQtc2l6ZToxMXJlbTt9XHJcbiAgICAyNSUge2xlZnQ6NTAlO3RvcDo0MCU7Zm9udC1zaXplOjQuNXJlbTt9XHJcbiAgICA1MCUge2xlZnQ6NTglO3RvcDo1MCU7Zm9udC1zaXplOjExcmVtO31cclxuICAgIDc1JSB7bGVmdDo1MCU7dG9wOjYwJTtmb250LXNpemU6NC41cmVtO31cclxuICAgIDEwMCV7bGVmdDo0MiU7dG9wOjUwJTtmb250LXNpemU6MTFyZW07fVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHJhbmdlMiB7XHJcbiAgICAwJSAge2xlZnQ6NTglO3RvcDo1MCU7Zm9udC1zaXplOjExcmVtO31cclxuICAgIDI1JSB7bGVmdDo1MCU7dG9wOjYwJTtmb250LXNpemU6NC41cmVtO31cclxuICAgIDUwJSB7bGVmdDo0MiU7dG9wOjUwJTtmb250LXNpemU6MTFyZW07fVxyXG4gICAgNzUlIHtsZWZ0OjUwJTt0b3A6NDAlO2ZvbnQtc2l6ZTo0LjVyZW07fVxyXG4gICAgMTAwJXtsZWZ0OjU4JTt0b3A6NTAlO2ZvbnQtc2l6ZToxMXJlbTt9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2l6ZSB7XHJcbiAgICAwJSAge2ZvbnQtc2l6ZToxMXJlbTt9XHJcbiAgICAyNSUge2ZvbnQtc2l6ZToyNnJlbTt9XHJcbiAgICA1MCUge2ZvbnQtc2l6ZToxMXJlbTt9XHJcbiAgICA3NSUge2ZvbnQtc2l6ZToyNnJlbTt9XHJcbiAgICAxMDAle2ZvbnQtc2l6ZToxMXJlbTt9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(r, authService) {
        this.r = r;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onloadServers = function () {
        //complex calculations
        this.r.navigate(['/servers']);
    };
    HomeComponent.prototype.onLogin = function () {
        this.authService.login();
        alert('Logged in');
    };
    HomeComponent.prototype.onLogout = function () {
        this.authService.logout();
        alert('Logged out');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/servers/edit-server/edit-server.component.css":
/*!***************************************************************!*\
  !*** ./src/app/servers/edit-server/edit-server.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvZWRpdC1zZXJ2ZXIvZWRpdC1zZXJ2ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/servers/edit-server/edit-server.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/servers/edit-server/edit-server.component.ts ***!
  \**************************************************************/
/*! exports provided: EditServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServerComponent", function() { return EditServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers.service */ "./src/app/servers/servers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditServerComponent = /** @class */ (function () {
    function EditServerComponent(serversService, ar) {
        this.serversService = serversService;
        this.ar = ar;
        this.serverName = '';
        this.serverStatus = '';
        this.allowEdit = false;
    }
    EditServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.ar.snapshot.queryParams);
        console.log(this.ar.snapshot.fragment);
        this.ar.queryParams.subscribe(function (qp) {
            _this.allowEdit = qp['allowEdit'] === '1' ? true : false;
        });
        this.server = this.serversService.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    };
    EditServerComponent.prototype.onUpdateServer = function () {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    };
    EditServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-server',
            template: __webpack_require__(/*! raw-loader!./edit-server.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/edit-server/edit-server.component.html"),
            styles: [__webpack_require__(/*! ./edit-server.component.css */ "./src/app/servers/edit-server/edit-server.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_service__WEBPACK_IMPORTED_MODULE_1__["ServersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditServerComponent);
    return EditServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/server/server.component.css":
/*!*****************************************************!*\
  !*** ./src/app/servers/server/server.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/servers/server/server.component.ts":
/*!****************************************************!*\
  !*** ./src/app/servers/server/server.component.ts ***!
  \****************************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers.service */ "./src/app/servers/servers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerComponent = /** @class */ (function () {
    function ServerComponent(serversService, ar, r) {
        this.serversService = serversService;
        this.ar = ar;
        this.r = r;
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x;
        this.ar.params.subscribe(function (p) {
            x = +p['id'];
            _this.server = _this.serversService.getServer(x);
        });
    };
    ServerComponent.prototype.onEditServer = function () {
        this.r.navigate(['edit'], { relativeTo: this.ar, queryParamsHandling: 'preserve' });
    };
    ServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! raw-loader!./server.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.css */ "./src/app/servers/server/server.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_service__WEBPACK_IMPORTED_MODULE_1__["ServersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servers.service */ "./src/app/servers/servers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServersComponent = /** @class */ (function () {
    function ServersComponent(serversService) {
        this.serversService = serversService;
        this.servers = [];
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.servers = this.serversService.getServers();
    };
    ServersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servers',
            template: __webpack_require__(/*! raw-loader!./servers.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_service__WEBPACK_IMPORTED_MODULE_1__["ServersService"]])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.service.ts":
/*!********************************************!*\
  !*** ./src/app/servers/servers.service.ts ***!
  \********************************************/
/*! exports provided: ServersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersService", function() { return ServersService; });
var ServersService = /** @class */ (function () {
    function ServersService() {
        this.servers = [
            {
                id: 1,
                name: 'Productionserver',
                status: 'online'
            },
            {
                id: 2,
                name: 'Testserver',
                status: 'offline'
            },
            {
                id: 3,
                name: 'Devserver',
                status: 'offline'
            }
        ];
    }
    ServersService.prototype.getServers = function () {
        return this.servers;
    };
    ServersService.prototype.getServer = function (id) {
        var server = this.servers.find(function (s) {
            return s.id === id;
        });
        return server;
    };
    ServersService.prototype.updateServer = function (id, serverInfo) {
        var server = this.servers.find(function (s) {
            return s.id === id;
        });
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    };
    return ServersService;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(ar) {
        this.ar = ar;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            id: this.ar.snapshot.params['id'],
            name: this.ar.snapshot.params['name']
        };
        this.ar.params.subscribe(function (p) {
            _this.user.id = p['id'];
            _this.user.name = p['name'];
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.users = [
            {
                id: 1,
                name: 'Max'
            },
            {
                id: 2,
                name: 'Anna'
            },
            {
                id: 3,
                name: 'Chris'
            }
        ];
    }
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        })
    ], UsersComponent);
    return UsersComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\CSE\Angular\11.Changing Pages with Routing\routing-start\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map