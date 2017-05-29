import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BackendService } from './../../services/Backend.Service';
import { User } from './../../login/pojo/user';
import { ClassDetail } from './../../login/pojo/ClassDetail';
import { Attendance } from './../../login/pojo/Attendance';

@Component({
    selector: 'load-attendance',
    templateUrl: './loadAttendance.html',
    styleUrls: ['./loadAttendance.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoadAttendanceComponent implements OnInit{
    constructor(private backendService: BackendService, private cdr:ChangeDetectorRef){
    }    

    user: User;
    selectedClassNo: number;
    sections: Array<String> = []; 
    selectedSection: string;
    hideSection: boolean = true;
    subjects: Array<String> = [];
    selectedSubject: string;
    hideSubject: boolean = true;
    students: Array<User>;
    hideStudentRow: boolean = true;
    hideAttendanceSubmittedMessage: boolean = true;
    attendenceSubmittedMessage: string;
    week: Array<any> = [];
    todaysDate: Date = new Date();
    attendanceMatrix: Array<Attendance> = [];

    ngOnInit(){
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    loadSection($event: number){
        this.sections = [" "];
        this.user.classDetails.forEach(element => {
            if(element.classNo == $event){
                this.hideSection = false;
                this.sections.push(element.section);
            }
        });
        this.selectedClassNo = $event;
    }

    loadSubjects($event: string){
        this.subjects = [" "];
        this.user.classDetails.forEach(element => {
            if(element.classNo == this.selectedClassNo && element.section == $event){
                this.hideSubject = false;
                this.subjects.push(...element.subject);
            }
        });
        this.selectedSection = $event;
    }

    loadStudents($event: string){
         this.selectedSubject = $event;
         this.backendService.getStudentNamesForAdmin(this.selectedClassNo, 
                                    this.selectedSection, $event).subscribe(classData => {
         this.students = classData;
         this.hideStudentRow = false;
         this.cdr.detectChanges();
        });
    }

    submitAttendance(attendanceMatrix: Array<Attendance>){
        if(attendanceMatrix == null){
            this.attendenceSubmittedMessage = "Please choose at least one checkbox";
        }else{
            this.backendService.submitAttendance(this.attendanceMatrix, this.selectedSubject)
                            .subscribe(userData => {
                                console.log(userData);
                            });
            this.attendenceSubmittedMessage = "Your attendance for this week is submitted";
        }
        this.hideAttendanceSubmittedMessage = false;
        
    }

    getMonday() {
        var todaysDateCopy = new Date();
        var day = this.todaysDate.getDay(),
        //diff = this.todaysDate.getDate() - day + (day == 0 ? -6:1); // if sunday is cunsidered as last week then use -6
        diff = this.todaysDate.getDate() - day + 1;
        return new Date(todaysDateCopy.setDate(diff));
    }

    getDaysAfterDate(date: Date, noOfDays: number){
        return date.setDate(date.getDate() + noOfDays);
    }

    toggleSelection(dayOfWeek: string, rollNo: number){
        var attendance = new Attendance(rollNo, dayOfWeek, null, null, null);
        this.attendanceMatrix.push(attendance);
    }
}
