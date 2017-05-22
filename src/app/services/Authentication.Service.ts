import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Credentials } from './../login/pojo/credentials';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthenticationService {
    private serverUrl = 'http://localhost:8080';
    private loginUrl = '/sisbe/login/validateUser';

    constructor(private http: Http) {
    }


    login(credentials: Credentials){
        let headers = this.createAuthorizationHeader(credentials.userName);
        return this.http.post(this.serverUrl+this.loginUrl, credentials, {headers: headers})
                        .map(this.extractData);
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.clear();
    }

    private extractData(data: Response) {
            let token = data.headers.get('jwt');
            let authenticatedUser = data.headers.get('authenticatedUser');
            let role = data.headers.get('role');
            
            if (token) {
                localStorage.setItem('token', 'Bearer '+token);
                localStorage.setItem('authenticatedUser', authenticatedUser);
                localStorage.setItem('role', role);
            }  
            return data.json();
    }

    createAuthorizationHeader(userName: string):  Headers{
        var headers = new Headers();
        headers.append('Authorization', 'Basic dG9tY2F0OnRvbWNhdA==');
        headers.append('userName', userName);
        return headers;
    }

    // private handleError (error: Response | any) {
    //     // In a real world app, you might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }
}