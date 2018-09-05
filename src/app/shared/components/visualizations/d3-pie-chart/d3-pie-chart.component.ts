import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-d3-pie-chart',
  templateUrl: './d3-pie-chart.component.html',
  styleUrls: ['./d3-pie-chart.component.scss']
})
export class D3PieChartComponent implements OnInit {
  @ViewChild('svg') svg: ElementRef;
  constructor() {
  }

  ngOnInit() {
    console.log(this.svg);
  }

}
