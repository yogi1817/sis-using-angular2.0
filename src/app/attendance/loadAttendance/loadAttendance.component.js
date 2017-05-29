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
var LoadAttendanceComponent = (function () {
    function LoadAttendanceComponent(backendService, cdr) {
        this.backendService = backendService;
        this.cdr = cdr;
        this.sections = [];
        this.hideSection = true;
        this.subjects = [];
        this.hideSubject = true;
        this.hideStudentRow = true;
        this.hideAttendanceSubmittedMessage = true;
        this.week = [];
        this.todaysDate = new Date();
        this.attendanceMatrix = [];
    }
    LoadAttendanceComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    LoadAttendanceComponent.prototype.loadSection = function ($event) {
        var _this = this;
        this.sections = [" "];
        this.user.classDetails.forEach(function (element) {
            if (element.classNo == $event) {
                _this.hideSection = false;
                _this.sections.push(element.section);
            }
        });
        this.selectedClassNo = $event;
    };
    LoadAttendanceComponent.prototype.loadSubjects = function ($event) {
        var _this = this;
        this.subjects = [" "];
        this.user.classDetails.forEach(function (element) {
            if (element.classNo == _this.selectedClassNo && element.section == $event) {
                _this.hideSubject = false;
                (_a = _this.subjects).push.apply(_a, element.subject);
            }
            var _a;
        });
        this.selectedSection = $event;
    };
    LoadAttendanceComponent.prototype.loadStudents = function ($event) {
        var _this = this;
        this.selectedSubject = $event;
        this.backendService.getStudentNamesForAdmin(this.selectedClassNo, this.selectedSection, $event).subscribe(function (classData) {
            _this.students = classData;
            _this.hideStudentRow = false;
            _this.cdr.detectChanges();
        });
    };
    LoadAttendanceComponent.prototype.submitAttendance = function (attendanceMatrix) {
        if (attendanceMatrix == null) {
            this.attendenceSubmittedMessage = "Please choose at least one checkbox";
        }
        else {
            this.backendService.submitAttendance(this.attendanceMatrix, this.selectedSubject)
                .subscribe(function (userData) {
                console.log(userData);
            });
            this.attendenceSubmittedMessage = "Your attendance for this week is submitted";
        }
        this.hideAttendanceSubmittedMessage = false;
    };
    LoadAttendanceComponent.prototype.getMonday = function () {
        var todaysDateCopy = new Date();
        var day = this.todaysDate.getDay(), 
        //diff = this.todaysDate.getDate() - day + (day == 0 ? -6:1); // if sunday is cunsidered as last week then use -6
        diff = this.todaysDate.getDate() - day + 1;
        return new Date(todaysDateCopy.setDate(diff));
    };
    LoadAttendanceComponent.prototype.getDaysAfterDate = function (date, noOfDays) {
        return date.setDate(date.getDate() + noOfDays);
    };
    LoadAttendanceComponent.prototype.toggleSelection = function (dayOfWeek, rollNo) {
        var attendance = new Attendance_1.Attendance(rollNo, dayOfWeek, null, null, null);
        this.attendanceMatrix.push(attendance);
    };
    return LoadAttendanceComponent;
}());
LoadAttendanceComponent = __decorate([
    core_1.Component({
        selector: 'load-attendance',
        templateUrl: './loadAttendance.html',
        styleUrls: ['./loadAttendance.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Backend_Service_1.BackendService, core_1.ChangeDetectorRef])
], LoadAttendanceComponent);
exports.LoadAttendanceComponent = LoadAttendanceComponent;
//# sourceMappingURL=loadAttendance.component.js.map