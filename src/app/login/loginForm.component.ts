import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { Credentials } from './pojo/credentials';
import { AuthenticationService } from './../services/Authentication.Service';
import { User } from './pojo/user';

@Component({
    selector: 'login-form',
    templateUrl: './loginForm.html',
    styleUrls: ['./loginForm.css', './../../css/style.css', './../../css/bootstrap.min.css']
})

export class LoginFormComponent implements OnInit{
    credentials: any = {};
    submitted = false;
    user: User; 
    errorMessage: string = null;
    errorMessageFlag: boolean = false;

    @Output() loginResult = new EventEmitter<User>();
    
    constructor(private authenticationService: AuthenticationService){
    }  

    ngOnInit() {
        this.loginResult.emit(null);
        this.authenticationService.logout();
    }

    login(credentials: Credentials, e: any){
        this.authenticationService.login(credentials).subscribe(userData => {
                this.user = userData;
                if(this.user != null){
                    localStorage.setItem('user', JSON.stringify(this.user));
                    this.loginResult.emit(this.user);
                } 
        }, error => {
            this.errorMessageFlag = true;
            if(error.status == 401)
                this.errorMessage = "Invalid User ID Password Combination";
            else
                this.errorMessage = "There was an error process your request, please try again after some time";
            
            this.user = new User(null, null, null, null, null, null, null, null, this.errorMessage, true, null, null, null);

            this.loginResult.emit(this.user);
    });
    }

    showFormControls(form: any) {
        return form && form.controls['username'].value && form.controls['password'].value;
  }
}
