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
var ng2_file_upload_1 = require("ng2-file-upload");
var ReadAssignmentsComponent = (function () {
    function ReadAssignmentsComponent(backendService, cdr) {
        this.backendService = backendService;
        this.cdr = cdr;
        this.url = 'http://localhost:8080/sisbe/assignments/student';
        this.failedUploadFlag = false;
        this.successMessageFlag = false;
        this.showUploadButton = false;
        this.hasBaseDropZoneOver = false;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
    }
    ReadAssignmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.backendService.getAssignmentForStudent().subscribe(function (classData) {
            _this.assignmentList = classData;
            _this.cdr.detectChanges();
        });
        this.headers = this.backendService.createAuthorizationHeaderForFileUpload();
        this.uploader = new ng2_file_upload_1.FileUploader({
            headers: this.headers,
            url: this.url
        });
    };
    ReadAssignmentsComponent.prototype.downloadAssignment = function (assignment) {
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
    ReadAssignmentsComponent.prototype.uploadAssignment = function (assignment) {
        var _this = this;
        this.showUploadButton = true;
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.failureMessage = "There was some error in uploading doc, please contact admin";
            _this.failedUploadFlag = true;
            _this.successMessageFlag = false;
            _this.cdr.detectChanges();
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.successMessage = "Files were uploaded successfully";
            _this.successMessageFlag = true;
            _this.failedUploadFlag = false;
            _this.cdr.detectChanges();
        };
        this.uploader.onBuildItemForm = function (item, form) {
            form.append("class", _this.user.classDetails[0].classNo);
            form.append("section", _this.user.classDetails[0].section);
            form.append("subject", assignment.subject);
        };
    };
    ReadAssignmentsComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
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