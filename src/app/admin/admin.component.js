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
var user_1 = require("./../login/pojo/user");
var AdminComponent = (function () {
    function AdminComponent() {
        this.tabName = 'loadAttendance';
    }
    AdminComponent.prototype.toggleTab = function (tabName) {
        this.tabName = tabName;
    };
    AdminComponent.prototype.getWelcomeMessage = function () {
        return "Welcome " + this.user.firstName + " , You are logged in as " + this.user.role;
    };
    return AdminComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], AdminComponent.prototype, "user", void 0);
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin-tab',
        templateUrl: './admin.html',
        styleUrls: ['./admin.css', './../../css/style.css', './../../css/bootstrap.min.css']
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map