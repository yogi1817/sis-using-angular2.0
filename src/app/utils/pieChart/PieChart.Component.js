"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PieChartComponent = (function () {
    function PieChartComponent() {
        // Pie
        this.pieChartLabels = ['Present', 'Absent'];
        this.pieChartData = [10, 90];
        this.pieChartType = 'pie';
    }
    // lineChartColors:Array<any> = [
    //   { // grey
    //     backgroundColor: 'rgba(0, 255,0.2)',
    //     borderColor: 'rgba(0, 255, 0)',
    //     pointBackgroundColor: 'rgba(0, 255, 0)',
    //     pointBorderColor: '#fff',
    //     pointHoverBackgroundColor: '#fff',
    //     pointHoverBorderColor: 'rgba(0, 255,0.8)'
    //   },
    //   { // dark grey
    //     backgroundColor: 'rgba(255, 0,0.2)',
    //     borderColor: 'rgba(255, 0, 0)',
    //     pointBackgroundColor: 'rgba(255, 0, 0)',
    //     pointBorderColor: '#fff',
    //     pointHoverBackgroundColor: '#fff',
    //     pointHoverBorderColor: 'rgba(255, 0, 0)'
    //   }
    // ];
    // events
    PieChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return PieChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PieChartComponent.prototype, "pieChartData", void 0);
PieChartComponent = __decorate([
    core_1.Component({
        selector: 'pie-chart',
        templateUrl: './pieChart.html'
    })
], PieChartComponent);
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=pieChart.Component.js.map