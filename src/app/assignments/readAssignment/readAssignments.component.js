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
var ReadAssignmentsComponent = (function () {
    function ReadAssignmentsComponent(backendService, cdr) {
        this.backendService = backendService;
        this.cdr = cdr;
    }
    ReadAssignmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.backendService.getAssignmentForStudent().subscribe(function (classData) {
            _this.assignmentList = classData;
            _this.cdr.detectChanges();
        });
    };
    ReadAssignmentsComponent.prototype.downloadAssignment = function (assignment) {
        console.log(assignment);
        var a = document.createElement("a");
        document.body.appendChild(a);
        this.backendService.downloadAssignment(assignment.subject, assignment.assignmentName)
            .subscribe(function (classData) {
            var fileURL = URL.createObjectURL(classData);
            a.href = fileURL;
            a.download = assignment.assignmentName;
            a.click();
            window.URL.revokeObjectURL(fileURL);
        });
    };
    ReadAssignmentsComponent.prototype.uploadAssignment = function () {
        console.log("test");
    };
    return ReadAssignmentsComponent;
}());
ReadAssignmentsComponent = __decorate([
    core_1.Component({
        selector: 'read-assignments',
        templateUrl: './readAssignments.html',
        styleUrls: ['./readAssignments.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Backend_Service_1.BackendService, core_1.ChangeDetectorRef])
], ReadAssignmentsComponent);
exports.ReadAssignmentsComponent = ReadAssignmentsComponent;
//# sourceMappingURL=readAssignments.component.js.map