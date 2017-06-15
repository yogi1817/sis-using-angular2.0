import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { BackendService } from './../../services/Backend.Service';
import { User } from './../../login/pojo/user';
import { Assignment } from './../../login/pojo/Assignment';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

@Component({
    selector: 'read-assignments',
    templateUrl: './readAssignments.html',
    styleUrls: ['./readAssignments.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReadAssignmentsComponent implements OnInit{
    user: User;
    assignmentList: Array<Assignment>;
    url: string= 'http://localhost:8080/sisbe/assignments/student';

    failedUploadFlag: boolean = false; 
    failureMessage: string;
    successMessage: string;
    successMessageFlag: boolean = false;
    showUploadButton: boolean = false;
    hasBaseDropZoneOver:boolean = false;

    headers: Array<{name: string, value: string}>;
    additionalParameter: Array<{[key: string]: any}>;
    uploader: FileUploader;
    options: FileUploaderOptions = {
        autoUpload: false,
        isHTML5: true,
        filters: [],
        removeAfterUpload: false,
        disableMultipart: false
    };

    ngOnInit(){
        this.user = JSON.parse(localStorage.getItem('user'));
        this.backendService.getAssignmentForStudent().subscribe(classData => {
            this.assignmentList = classData;
            this.cdr.detectChanges();
        });

        this.headers = this.backendService.createAuthorizationHeaderForFileUpload();

        this.uploader = new FileUploader({
            headers: this.headers,
            url: this.url
        });
    }

    constructor(private backendService: BackendService, private cdr:ChangeDetectorRef){
    }

    downloadAssignment(assignment: Assignment){
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

    uploadAssignment(assignment: Assignment){
        this.showUploadButton = true;

        this.uploader.onErrorItem = (item:any, response:any, status:any, headers:any) => {
            this.failureMessage = "There was some error in uploading doc, please contact admin";
            this.failedUploadFlag=true;
            this.successMessageFlag = false;
            this.cdr.detectChanges();
        };

        this.uploader.onSuccessItem = (item:any, response:any, status:any, headers:any) => {
            this.successMessage = "Files were uploaded successfully";
            this.successMessageFlag=true;
            this.failedUploadFlag = false;
            this.cdr.detectChanges();
        };

        this.uploader.onBuildItemForm = (item, form) => {
            form.append("class", this.user.classDetails[0].classNo);
            form.append("section", this.user.classDetails[0].section);
            form.append("subject", assignment.subject);
        };
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }
}