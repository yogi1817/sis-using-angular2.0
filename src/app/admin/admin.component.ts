import { Component, Input } from '@angular/core';
import { User } from './../login/pojo/user';

@Component({
    selector: 'admin-tab',
    templateUrl: './admin.html',
    styleUrls: ['./admin.css', './../../css/style.css', './../../css/bootstrap.min.css']
})

export class AdminComponent {
    @Input() user: User;

    constructor(){
    }    

    getWelcomeMessage(){
        return "Welcome "+this.user.firstName+" , You are logged in as "+this.user.role;
    }
}
