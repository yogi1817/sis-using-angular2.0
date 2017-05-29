import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Attendance } from './../login/pojo/Attendance';
import 'rxjs/add/operator/map';
 
@Injectable()
export class BackendService {
    private serverUrl = 'http://localhost:8080';
    private getStudentNameUrl = '/sisbe/admin/students?';
    private submitAttendanceUrl = '/sisbe/attendance?';
    private getAttendanceUrl = '/sisbe/attendance?';

    constructor(private http: Http) {
    }

    getStudentNamesForAdmin(classNo: number, section: string, subject: string){
        let headers = this.createAuthorizationHeader(localStorage.getItem('authenticatedUser'));
        return this.http.get(this.serverUrl+this.getStudentNameUrl+
                        "classNo="+classNo+"&section="+section+"&subject="+subject, {headers: headers})
                        .map(this.extractData);
    }

    submitAttendance(attendanceObject: Array<Attendance>, subject: string){
        let headers = this.createAuthorizationHeader(localStorage.getItem('authenticatedUser'));
        return this.http.post(this.serverUrl+this.submitAttendanceUrl+"subjectName="+subject, 
                    attendanceObject, {headers: headers}).map(this.extractData);
    }

    getAttendance(subject: string){
        let headers = this.createAuthorizationHeader(localStorage.getItem('authenticatedUser'));
        return this.http.get(this.serverUrl+this.getAttendanceUrl+"subjectName="+subject, 
                    {headers: headers}).map(this.extractData);
    }

    private extractData(data: Response) {
            return data.json();
    }

    createAuthorizationHeader(userName: string):  Headers{
        var headers = new Headers();
        headers.append('Authorization', 'Basic dG9tY2F0OnRvbWNhdA==');
        headers.append('userName', userName);
        headers.append('customAuthorization', localStorage.getItem('token'));
        return headers;
    }
}