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
var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:8080';
        this.getStudentNameUrl = '/sisbe/admin/students?';
        this.submitAttendanceUrl = '/sisbe/attendance?';
        this.getAttendanceUrl = '/sisbe/attendance?';
        this.getAssignmentListUrl = '/sisbe/assignments/student';
        this.downloadAssignmentUrl = '/sisbe/assignments/student/';
        this.headers = new http_1.Headers();
        //for now hardcoding to test etag
        this.ETag = "\"1601\"";
    }
    BackendService.prototype.getStudentNamesForAdmin = function (classNo, section, subject) {
        this.headers = this.createAuthorizationHeader();
        this.headers.append('If-None-Match', this.ETag);
        return this.http.get(this.serverUrl + this.getStudentNameUrl +
            "classNo=" + classNo + "&section=" + section + "&subject=" + subject, { headers: this.headers })
            .map(this.extractDataWithHeader)
            .publishReplay(1)
            .refCount;
    };
    BackendService.prototype.submitAttendance = function (attendanceObject, subject) {
        var headers = this.createAuthorizationHeader();
        return this.http.post(this.serverUrl + this.submitAttendanceUrl +
            "subjectName=" + subject, attendanceObject, { headers: headers }).map(this.extractData);
    };
    BackendService.prototype.getAttendance = function (subject) {
        var headers = this.createAuthorizationHeader();
        return this.http.get(this.serverUrl + this.getAttendanceUrl + "subjectName="
            + subject, { headers: headers }).map(this.extractData);
    };
    BackendService.prototype.getAssignmentForStudent = function () {
        var headers = this.createAuthorizationHeader();
        return this.http.get(this.serverUrl + this.getAssignmentListUrl, { headers: headers }).map(this.extractData);
    };
    BackendService.prototype.downloadAssignment = function (subject, assignmentName) {
        var headers = this.createAuthorizationHeader();
        return this.http.get(this.serverUrl + this.downloadAssignmentUrl + subject + "/"
            + assignmentName, { headers: headers, responseType: http_1.ResponseContentType.Blob })
            .map(this.extractBlob);
    };
    BackendService.prototype.extractData = function (data) {
        return data.json();
    };
    BackendService.prototype.extractDataWithHeader = function (data) {
        //this.ETag = data.headers.get('ETag');
        return data.json();
    };
    BackendService.prototype.extractBlob = function (data) {
        return data.blob();
    };
    BackendService.prototype.createAuthorizationHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic dG9tY2F0OnRvbWNhdA==');
        headers.append('userName', localStorage.getItem('authenticatedUser'));
        headers.append('customAuthorization', localStorage.getItem('token'));
        return headers;
    };
    BackendService.prototype.createAuthorizationHeaderForFileUpload = function () {
        var headers = [{ "name": "Authorization", "value": "Basic dG9tY2F0OnRvbWNhdA==" },
            { "name": "userName", "value": localStorage.getItem('authenticatedUser') },
            { "name": "customAuthorization", "value": localStorage.getItem('token') }
        ];
        return headers;
    };
    return BackendService;
}());
BackendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BackendService);
exports.BackendService = BackendService;
//# sourceMappingURL=Backend.Service.js.map