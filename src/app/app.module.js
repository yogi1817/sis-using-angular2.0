"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_charts_1 = require("ng2-charts");
var ng2_file_upload_1 = require("ng2-file-upload");
require("./../../node_modules/chart.js/dist/Chart.bundle.min.js");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var body_component_1 = require("./body/body.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contacts_component_1 = require("./contacts/contacts.component");
var carrers_component_1 = require("./carrers/carrers.component");
var loginForm_component_1 = require("./login/loginForm.component");
var admin_component_1 = require("./admin/admin.component");
var student_component_1 = require("./student/student.component");
var loadAttendance_component_1 = require("./attendance/loadAttendance/loadAttendance.component");
var readAttendance_component_1 = require("./attendance/readAttendance/readAttendance.component");
var loadAssignments_component_1 = require("./assignments/loadAssignments/loadAssignments.component");
var Authentication_Service_1 = require("./services/Authentication.Service");
var Backend_Service_1 = require("./services/Backend.Service");
var OrderByPipe_1 = require("./utils/OrderByPipe");
var pieChart_Component_1 = require("./utils/pieChart/pieChart.Component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, ng2_charts_1.ChartsModule,
            ng2_file_upload_1.FileUploadModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, body_component_1.BodyComponent, home_component_1.HomeComponent,
            about_component_1.AboutComponent, carrers_component_1.CarrersComponent, contacts_component_1.ContactComponent, loginForm_component_1.LoginFormComponent, admin_component_1.AdminComponent,
            loadAttendance_component_1.LoadAttendanceComponent, OrderByPipe_1.OrderByPipe, student_component_1.StudentComponent, readAttendance_component_1.ReadAttendanceComponent,
            pieChart_Component_1.PieChartComponent, loadAssignments_component_1.LoadAssignmentsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [Authentication_Service_1.AuthenticationService, Backend_Service_1.BackendService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map