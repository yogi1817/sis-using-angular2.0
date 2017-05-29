import { Component, Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html'
})
export class PieChartComponent {
  // Pie
  pieChartLabels:string[] = ['Present', 'Absent'];
  @Input()
  pieChartData:number[] = [10,90];
  pieChartType:string = 'pie';
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
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}