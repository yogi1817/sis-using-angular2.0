import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Attendance } from './../login/pojo/Attendance';
import 'rxjs/add/operator/map';
 
@Injectable()
export class BackendService {
    private serverUrl = 'http://localhost:8080';
    private getStudentNameUrl = '/sisbe/admin/students?';
    private submitAttendanceUrl = '/sisbe/attendance?';
    private getAttendanceUrl = '/sisbe/attendance?';
    private getAssignmentListUrl = '/sisbe/assignments/student';
    private downloadAssignmentUrl = '/sisbe/assignments/student/';
    private headers = new Headers();
    //for now hardcoding to test etag
    ETag: string = "\"1601\"";

    constructor(private http: Http) {
    }

    getStudentNamesForAdmin(classNo: number, section: string, subject: string){
        this.headers = this.createAuthorizationHeader();
        this.headers.append('If-None-Match', this.ETag);
        return this.http.get(this.serverUrl+this.getStudentNameUrl+
                        "classNo="+classNo+"&section="+section+"&subject="+subject, 
                        {headers: this.headers})
                        .map(this.extractDataWithHeader)
                        .publishReplay(1)
                        .refCount;
    }

    submitAttendance(attendanceObject: Array<Attendance>, subject: string){
        let headers = this.createAuthorizationHeader();
        return this.http.post(this.serverUrl+this.submitAttendanceUrl+
                    "subjectName="+subject, 
                    attendanceObject, {headers: headers}).map(this.extractData);
    }

    getAttendance(subject: string){
        let headers = this.createAuthorizationHeader();
        return this.http.get(this.serverUrl+this.getAttendanceUrl+"subjectName="
                    +subject, 
                    {headers: headers}).map(this.extractData);
    }

    getAssignmentForStudent(){
        let headers = this.createAuthorizationHeader();
        return this.http.get(this.serverUrl+this.getAssignmentListUrl, 
                    {headers: headers}).map(this.extractData);
    }

    downloadAssignment(subject: string, assignmentName: string){
        let headers = this.createAuthorizationHeader();
        return this.http.get(this.serverUrl+this.downloadAssignmentUrl+subject+"/"
                    +assignmentName,
                    {headers: headers, responseType: ResponseContentType.Blob})
                    .map(this.extractBlob);
    }

    private extractData(data: Response) {
            return data.json();
    }

    private extractDataWithHeader(data: Response) {
        //this.ETag = data.headers.get('ETag');
        return data.json();
    }

     private extractBlob(data: Response) {
            return data.blob();
    }

    createAuthorizationHeader():  Headers{
        var headers = new Headers();
        headers.append('Authorization', 'Basic dG9tY2F0OnRvbWNhdA==');
        headers.append('userName', localStorage.getItem('authenticatedUser'));
        headers.append('customAuthorization', localStorage.getItem('token'));
        return headers;
    }

    createAuthorizationHeaderForFileUpload(){
        var headers = [{"name": "Authorization", "value": "Basic dG9tY2F0OnRvbWNhdA=="},
                        {"name": "userName","value": localStorage.getItem('authenticatedUser')},
                        {"name": "customAuthorization","value": localStorage.getItem('token')}
                        ];
        return headers;
    }
}