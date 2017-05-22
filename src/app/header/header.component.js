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
var HeaderComponent = (function () {
    function HeaderComponent(cdr) {
        this.cdr = cdr;
        this.tabName = 'home';
    }
    HeaderComponent.prototype.toggleTab = function (tabName) {
        this.tabName = tabName;
    };
    HeaderComponent.prototype.hideLoginTab = function () {
        if (localStorage.getItem('authenticatedUser') == null) {
            return false;
        }
        //Below code is written to set current page as welcome page and not login page
        if (this.tabName != 'welcomeAdmin'
            && (this.tabName == 'loginForm' || this.tabName == 'welcomeAdmin')) {
            if (localStorage.getItem('role') == 'admin') {
                this.toggleTab('welcomeAdmin');
                this.cdr.detectChanges();
            }
            else if (localStorage.getItem('role') == 'student') {
                this.toggleTab('welcomeStudent');
                this.cdr.detectChanges();
            }
        }
        return true;
    };
    HeaderComponent.prototype.hideAdminTab = function () {
        if (localStorage.getItem('role') == 'admin') {
            return false;
        }
        return true;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'my-header',
        templateUrl: './header.html',
        styleUrls: ['./header.css', './../../css/style.css', './../../css/bootstrap.min.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map