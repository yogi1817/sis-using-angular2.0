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
var Authentication_Service_1 = require("./../services/Authentication.Service");
var LoginFormComponent = (function () {
    function LoginFormComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.credentials = {};
        this.submitted = false;
        this.loginResult = new core_1.EventEmitter();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginResult.emit(null);
        this.authenticationService.logout();
    };
    LoginFormComponent.prototype.login = function (credentials, e) {
        var _this = this;
        this.authenticationService.login(credentials).subscribe(function (userData) {
            _this.user = userData;
            if (_this.user != null) {
                localStorage.setItem('user', JSON.stringify(_this.user));
                _this.loginResult.emit(_this.user);
            }
        });
        console.log("User Data returned " + this.user);
    };
    LoginFormComponent.prototype.showFormControls = function (form) {
        return form && form.controls['username'].value && form.controls['password'].value;
    };
    return LoginFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginFormComponent.prototype, "loginResult", void 0);
LoginFormComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        templateUrl: './loginForm.html',
        styleUrls: ['./loginForm.css', './../../css/style.css', './../../css/bootstrap.min.css']
    }),
    __metadata("design:paramtypes", [Authentication_Service_1.AuthenticationService])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=loginForm.component.js.map