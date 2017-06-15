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
var Backend_Service_1 = require("./../../services/Backend.Service");
var Attendance_1 = require("./../../login/pojo/Attendance");
var ReadAttendanceComponent = (function () {
    function ReadAttendanceComponent(backendService, cdr) {
        this.backendService = backendService;
        this.cdr = cdr;
        this.showPieChart = false;
        this.attendanceList = [];
        this.pieChartData = [];
        this.showMonth = false;
        this.showAttendanceFlag = false;
    }
    ReadAttendanceComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    ReadAttendanceComponent.prototype.getAttendance = function ($event) {
        var _this = this;
        var blankMonth = new Attendance_1.Attendance(null, null, null, "", null);
        this.backendService.getAttendance($event)
            .subscribe(function (userData) {
            _this.showMonth = true;
            _this.attendanceList = [];
            _this.attendanceList.push(blankMonth);
            (_a = _this.attendanceList).push.apply(_a, userData);
            _this.cdr.detectChanges();
            var _a;
        });
    };
    ReadAttendanceComponent.prototype.drawPieForMonth = function ($event) {
        this.selectedMonth = $event;
        this.pieChartData = [];
        for (var _i = 0, _a = this.attendanceList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.monthName == $event) {
                this.pieChartData.push(100 - entry.percentageAbsent);
                this.pieChartData.push(entry.percentageAbsent);
            }
        }
        this.attendenceReceivedMessage = "Your attendance pie for the selected month is below";
        this.showPieChart = true;
        this.showAttendanceFlag = false;
    };
    ReadAttendanceComponent.prototype.showAttendance = function () {
        this.showAttendanceFlag = true;
        for (var _i = 0, _a = this.attendanceList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.monthName == this.selectedMonth) {
                this.absentDates = entry.datesAbsent;
            }
        }
    };
    return ReadAttendanceComponent;
}());
ReadAttendanceComponent = __decorate([
    core_1.Component({
        selector: 'read-attendance',
        templateUrl: './readAttendance.html',
        styleUrls: ['./readAttendance.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Backend_Service_1.BackendService, core_1.ChangeDetectorRef])
], ReadAttendanceComponent);
exports.ReadAttendanceComponent = ReadAttendanceComponent;
//# sourceMappingURL=readAttendance.component.js.map