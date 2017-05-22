import { Component, Input, OnChanges} from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { LoginFormComponent } from './../login/loginForm.component';
import { User } from './../login/pojo/user';

@Component({
    selector: 'my-body',
    templateUrl: './body.html',
    styleUrls: ['./body.css', './../../css/style.css', './../../css/bootstrap.min.css']
})

export class BodyComponent {
    @Input() tabName: string;
    showLogin: boolean;
    user: User;
    constructor(){
        this.showLogin = true;
    }    

    checkTab(){
        return this.tabName;
    }

    setLogin(user: User){
        if(user == null)
            this.showLogin = true;
        else    
            this.showLogin = false;

        this.user = user;
    }

    checkLogin(){
        return this.showLogin;
    }
}
