import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { LoginFormComponent } from './../login/loginForm.component';
import { User } from './../login/pojo/user';

@Component({
    selector: 'my-body',
    templateUrl: './body.html',
    styleUrls: ['./body.css', './../../css/style.css', './../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BodyComponent {
    @Input() tabName: string;
    showLogin: boolean;
    user: User;

    constructor(private cdr:ChangeDetectorRef){
        this.showLogin = true;
    }    

    setLogin(user: User){
        if(user==null)
            this.showLogin = true;
        else if(user.errorMessageFlag)
            this.showLogin = true;
        else    
            this.showLogin = false;

        this.user = user;
    }

    logout(){
        this.showLogin = true;
        this.cdr.detectChanges();
    }
}
