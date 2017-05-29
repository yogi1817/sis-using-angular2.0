import { Component, Input, OnInit} from '@angular/core';
import { BackendService } from './../../services/Backend.Service';
import { User } from './../../login/pojo/user';
import { Attendance } from './../../login/pojo/Attendance';

@Component({
    selector: 'read-attendance',
    templateUrl: './readAttendance.html',
    styleUrls: ['./readAttendance.css', './../../../css/style.css', './../../../css/bootstrap.min.css']
})

export class ReadAttendanceComponent implements OnInit{
    constructor(private backendService: BackendService){
    }    

    user: User;
    attendenceReceivedMessage: string;
    showPieChart: boolean = false;
    attendanceList: Array<Attendance> = [];
    pieChartData:number[] = [];
    showMonth: boolean = false;
    selectedMonth: string;
    absentDates: Date[];
    showAttendanceFlag: boolean = false;
    ngOnInit(){
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    getAttendance($event: string){
            var blankMonth = new Attendance(null, null, null, "", null);
            this.backendService.getAttendance($event)
                            .subscribe(userData => {
                                this.showMonth=true;
                                this.attendanceList = [];
                                this.attendanceList.push(blankMonth);
                                this.attendanceList.push(...userData);
                            });
    }

    drawPieForMonth($event: string){
        this.selectedMonth = $event;
        this.pieChartData = [];
        for (let entry of this.attendanceList) {
            if(entry.monthName==$event){
                this.pieChartData.push(100-entry.percentageAbsent);
                this.pieChartData.push(entry.percentageAbsent);
            }
        }    
        this.attendenceReceivedMessage = "Your attendance pie for the selected month is";
        this.showPieChart = true;
    }

    showAttendance(){
        this.showAttendanceFlag = true;
        for (let entry of this.attendanceList) {
            if(entry.monthName==this.selectedMonth){
                this.absentDates = entry.datesAbsent;
            }
        }  
    }
}
