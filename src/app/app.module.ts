import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
import './../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contacts/contacts.component';
import { CarrersComponent } from './carrers/carrers.component';
import { LoginFormComponent } from './login/loginForm.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { LoadAttendanceComponent } from './attendance/loadAttendance/loadAttendance.component';
import { ReadAttendanceComponent } from './attendance/readAttendance/readAttendance.component';
import { LoadAssignmentsComponent } from './assignments/loadAssignments/loadAssignments.component';

import { AuthenticationService } from './services/Authentication.Service';
import { BackendService} from './services/Backend.Service';

import { OrderByPipe } from './utils/OrderByPipe';
import { PieChartComponent } from './utils/pieChart/pieChart.Component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, ChartsModule, 
                  FileUploadModule, Ng2Bs3ModalModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, BodyComponent, HomeComponent, 
                  AboutComponent, CarrersComponent, ContactComponent, LoginFormComponent, AdminComponent,
                  LoadAttendanceComponent, OrderByPipe, StudentComponent, ReadAttendanceComponent,
                  PieChartComponent, LoadAssignmentsComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthenticationService, BackendService]
})

export class AppModule { 

}
