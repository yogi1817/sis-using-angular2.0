import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { BackendService } from './../../services/Backend.Service';
import { User } from './../../login/pojo/user';
import { Assignment } from './../../login/pojo/Assignment';

@Component({
    selector: 'read-assignments',
    templateUrl: './readAssignments.html',
    styleUrls: ['./readAssignments.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReadAssignmentsComponent implements OnInit{
    user: User;
    assignmentList: Array<Assignment>;

    ngOnInit(){
        this.user = JSON.parse(localStorage.getItem('user'));
        this.backendService.getAssignmentForStudent().subscribe(classData => {
            this.assignmentList = classData;
            this.cdr.detectChanges();
        });
    }

    constructor(private backendService: BackendService, private cdr:ChangeDetectorRef){
    }

    downloadAssignment(assignment: Assignment){
        console.log(assignment);
        var a = document.createElement("a");
        document.body.appendChild(a);
        this.backendService.downloadAssignment(assignment.subject, assignment.assignmentName)
                    .subscribe(classData => {
            var fileURL = URL.createObjectURL(classData);
            a.href = fileURL;
            a.download = assignment.assignmentName;
            a.click();
            window.URL.revokeObjectURL(fileURL);
        });
    }

    uploadAssignment(){
        console.log("test");
    }
}