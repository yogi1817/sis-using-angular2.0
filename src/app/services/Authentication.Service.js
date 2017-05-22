"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:8080';
        this.loginUrl = '/sisbe/login/validateUser';
    }
    AuthenticationService.prototype.login = function (credentials) {
        var headers = this.createAuthorizationHeader(credentials.userName);
        return this.http.post(this.serverUrl + this.loginUrl, credentials, { headers: headers })
            .map(this.extractData);
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        localStorage.clear();
    };
    AuthenticationService.prototype.extractData = function (data) {
        var token = data.headers.get('jwt');
        var authenticatedUser = data.headers.get('authenticatedUser');
        var role = data.headers.get('role');
        if (token) {
            localStorage.setItem('token', 'Bearer ' + token);
            localStorage.setItem('authenticatedUser', authenticatedUser);
            localStorage.setItem('role', role);
        }
        return data.json();
    };
    AuthenticationService.prototype.createAuthorizationHeader = function (userName) {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic dG9tY2F0OnRvbWNhdA==');
        headers.append('userName', userName);
        return headers;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=Authentication.Service.js.map