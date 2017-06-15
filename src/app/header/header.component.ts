import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { User } from './../login/pojo/user';

@Component({
    selector: 'my-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css', './../../css/style.css', './../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
    tabName: string = 'home';
    user: User;
    body: BodyComponent;
    constructor(private cdr:ChangeDetectorRef){
    } 

    toggleTab(tabName: string){
        this.tabName = tabName;
    }   

    loginTab(){
        if(localStorage.getItem('authenticatedUser') == null){
            return true;
        }

        this.user = JSON.parse(localStorage.getItem('user'));
        //Below code is written to set current page as welcome page and not login page
        if(this.tabName =='loginForm'){  
                if(localStorage.getItem('role') == 'admin'){
                    this.toggleTab('welcomeAdmin');
                    this.cdr.detectChanges();
                }
                else if(localStorage.getItem('role') == 'student'){
                    this.toggleTab('welcomeStudent');
                    this.cdr.detectChanges();
                }
        }    
        return false;
    }

    logout(){
        localStorage.clear();
        this.toggleTab('loginForm');
    }

    adminTab(){
        if(localStorage.getItem('role') == 'admin'){
            return true;
        }
            
        return false;
    }

    studentTab(){
        if(localStorage.getItem('role') == 'student'){
            return true;
        }
            
        return false;
    }
}
