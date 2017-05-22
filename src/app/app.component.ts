import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent  implements OnInit{ 
    ngOnInit(){
        localStorage.clear();
    }
}
