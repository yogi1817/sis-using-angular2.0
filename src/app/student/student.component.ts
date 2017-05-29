import { Component, Input } from '@angular/core';
import { User } from './../login/pojo/user';

@Component({
    selector: 'student-tab',
    templateUrl: './student.html',
    styleUrls: ['./student.css', './../../css/style.css', './../../css/bootstrap.min.css']
})

export class StudentComponent {
    @Input() user: User;

    constructor(){
    }    

    getWelcomeMessage(){
        return "Welcome "+this.user.firstName+" , You are logged in as "+this.user.role;
    }
}
