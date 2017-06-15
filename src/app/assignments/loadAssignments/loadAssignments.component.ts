import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { BackendService } from './../../services/Backend.Service';
import { User } from './../../login/pojo/user';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'load-assignments',
    templateUrl: './loadAssignments.html',
    styleUrls: ['./loadAssignments.css', './../../../css/style.css', './../../../css/bootstrap.min.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoadAssignmentsComponent implements OnInit{
    
    url: string= 'http://localhost:8080/sisbe/assignments/admin';
    user: User;
    selectedClassNo: number;
    sections: Array<String> = []; 
    selectedSection: string;
    loadSectionFlag: boolean = false;
    subjects: Array<String> = [];
    selectedSubject: string;
    loadSubject: boolean = false;
    fileUploadFlag: boolean = false;
    loadCompletionDateFlag: boolean = false;
    completionDate: Date;
    failedUploadFlag: boolean = false;
    failureMessage: string;
    successMessage:string;
    successMessageFlag: boolean = false;

    headers: Array<{name: string, value: string}>;
    additionalParameter: Array<{[key: string]: any}>;
    uploader: FileUploader;

    constructor(private backendService: BackendService, private cdr:ChangeDetectorRef){
    }

    ngOnInit(){
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    loadSection($event: number){
        this.sections = [" "];
        this.user.classDetails.forEach(element => {
            if(element.classNo == $event){
                this.loadSectionFlag = true;
                this.sections.push(element.section);
            }
        });
        this.loadSubject = false;
        this.loadCompletionDateFlag = false;
        this.fileUploadFlag = false;
        this.failedUploadFlag = false;
        this.successMessageFlag = false;
        this.selectedClassNo = $event;
    }

    loadSubjects($event: string){
        this.subjects = [" "];
        this.user.classDetails.forEach(element => {
            if(element.classNo == this.selectedClassNo && element.section == $event){
                this.loadSubject = true;
                this.subjects.push(...element.subject);
            }
        });
        this.loadCompletionDateFlag = false;
        this.fileUploadFlag = false;
        this.failedUploadFlag = false;
        this.successMessageFlag = false;
        this.selectedSection = $event;
    }

    loadCompletionDate($event: string){
        this.selectedSubject = $event;
        this.loadCompletionDateFlag = true;
        this.fileUploadFlag = false;
        this.failedUploadFlag = false;
        this.successMessageFlag = false;
    }

    loadFileUploadOptions($event: Date){
        this.completionDate = $event;
        this.fileUploadFlag = true;
        this.failedUploadFlag = false;
        this.successMessageFlag = false;

        this.headers = this.backendService.createAuthorizationHeaderForFileUpload();

        this.uploader = new FileUploader({
            headers: this.headers,
            url: this.url
        });

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
                form.append("class", this.selectedClassNo);
                form.append("section", this.selectedSection);
                form.append("subject", this.selectedSubject);
                form.append("completionDate", this.completionDate);
        };
    }

     reset(){
        this.loadSectionFlag = false;
        this.loadSubject = false;
        this.loadCompletionDateFlag = false;
        this.fileUploadFlag = false;
        this.failedUploadFlag = false;
        this.successMessageFlag = false;
    }
}