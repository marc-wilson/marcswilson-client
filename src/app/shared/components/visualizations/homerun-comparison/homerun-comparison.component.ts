import { Component, Input, OnInit } from '@angular/core';
import { ChadwickService } from '../../../services/chadwick.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-homerun-comparison',
  templateUrl: './homerun-comparison.component.html',
  styleUrls: ['./homerun-comparison.component.scss']
})
export class HomerunComparisonComponent implements OnInit {
  @Input() player1;
  @Input() player2;
  private readonly _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  ngOnInit() {
    if (this.player1 && this.player2 && this.player1.batting && this.player2.batting) {
      // this.buildChart();
    }
  }
  refresh(player1, player2): void {
    this.player1 = player1;
    this.player2 = player2;
    this.buildChart();
  }
  buildChart(): void {
    Highcharts.chart('homerunComparison', {

      title: {
        text: 'Homeruns by Season'
      },

      subtitle: {
        text: 'Chadwick Baseball Databank'
      },

      yAxis: {
        title: {
          text: 'Homeruns'
        }
      },
      xAxis: {
        title: {
          text: 'Seasons'
        },
        tickInterval: 1
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 0
        }
      },

      series: [
        {
          name: `${this.player1.data.nameFirst} ${this.player1.data.nameLast}`,
          data: this.player1.data.batting.map( b => b.HR )
        },
        {
          name: `${this.player2.data.nameFirst} ${this.player2.data.nameLast}`,
          data: this.player2.data.batting.map( b => b.HR )
        }
      ],
    });
  }

}
