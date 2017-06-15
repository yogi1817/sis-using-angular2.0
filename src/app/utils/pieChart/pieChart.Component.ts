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

  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}