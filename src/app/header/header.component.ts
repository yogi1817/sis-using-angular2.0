import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css', './../../css/style.css', './../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
    tabName: string = 'home';
    constructor(private cdr:ChangeDetectorRef){} 

    toggleTab(tabName: string){
        this.tabName = tabName;
    }   

    hideLoginTab(){
        if(localStorage.getItem('authenticatedUser') == null){
            return false;
        }

        //Below code is written to set current page as welcome page and not login page
        if(this.tabName != 'welcomeAdmin' 
                && (this.tabName =='loginForm' || this.tabName =='welcomeAdmin')){
                if(localStorage.getItem('role') == 'admin'){
                    this.toggleTab('welcomeAdmin');
                    this.cdr.detectChanges();
                }
                else if(localStorage.getItem('role') == 'student'){
                    this.toggleTab('welcomeStudent');
                    this.cdr.detectChanges();
                }
        }    
        return true;
    }

    hideAdminTab(){
        if(localStorage.getItem('role') == 'admin'){
            return false;
        }
            
        return true;
    }
}
