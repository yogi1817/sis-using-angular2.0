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
var LoadAssignmentsComponent = (function () {
    function LoadAssignmentsComponent(backendService, cdr) {
        this.backendService = backendService;
        this.cdr = cdr;
        this.url = 'http://localhost:8080/sisbe/assignment';
        this.sections = [];
        this.loadSectionFlag = false;
        this.subjects = [];
        this.loadSubject = false;
        this.fileUploadFlag = false;
        this.loadCompletionDateFlag = false;
        this.failedUploadFlag = false;
    }
    LoadAssignmentsComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    LoadAssignmentsComponent.prototype.loadSection = function ($event) {
        var _this = this;
        this.sections = [" "];
        this.user.classDetails.forEach(function (element) {
            if (element.classNo == $event) {
                _this.loadSectionFlag = true;
                _this.sections.push(element.section);
            }
        });
        this.selectedClassNo = $event;
    };
    LoadAssignmentsComponent.prototype.loadSubjects = function ($event) {
        var _this = this;
        this.subjects = [" "];
        this.user.classDetails.forEach(function (element) {
            if (element.classNo == _this.selectedClassNo && element.section == $event) {
                _this.loadSubject = true;
                (_a = _this.subjects).push.apply(_a, element.subject);
            }
            var _a;
        });
        this.selectedSection = $event;
    };
    LoadAssignmentsComponent.prototype.loadCompletionDate = function ($event) {
        this.selectedSubject = $event;
        this.loadCompletionDateFlag = true;
    };
    LoadAssignmentsComponent.prototype.loadFileUploadOptions = function ($event) {
        var _this = this;
        this.completionDate = $event;
        this.fileUploadFlag = true;
        this.headers = this.backendService.createAuthorizationHeaderForFileUpload();
        this.uploader = new ng2_file_upload_1.FileUploader({
            headers: this.headers,
            url: this.url
        });
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log(status);
            _this.failureMessage = "There was some error in uploading doc, please contact admin";
            _this.failedUploadFlag = true;
            _this.cdr.detectChanges();
        };
        this.uploader.onBuildItemForm = function (item, form) {
            form.append("class", _this.selectedClassNo);
            form.append("section", _this.selectedSection);
            form.append("subject", _this.selectedSubject);
            form.append("completionDate", _this.completionDate);
        };
    };
    return LoadAssignmentsComponent;
}());
LoadAssignmentsComponent = __decorate([
    core_1.Component({
        selector: 'load-assignments',
        templateUrl: './loadAssignments.html',
        styleUrls: ['./loadAssignments.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Backend_Service_1.BackendService, core_1.ChangeDetectorRef])
], LoadAssignmentsComponent);
exports.LoadAssignmentsComponent = LoadAssignmentsComponent;
//# sourceMappingURL=loadAssignments.component.js.map