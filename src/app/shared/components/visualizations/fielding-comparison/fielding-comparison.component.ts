import { Component, Input, OnInit } from '@angular/core';
import { PlayerDetail } from '../../../models/player-detail';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-fielding-comparison',
  templateUrl: './fielding-comparison.component.html',
  styleUrls: ['./fielding-comparison.component.scss']
})
export class FieldingComparisonComponent implements OnInit {
  @Input() player1: PlayerDetail;
  @Input() player2: PlayerDetail;
  public player1Totals: { a: number, e: number, dp: number, g: number, gs: number, zr: number };
  public player2Totals: { a: number, e: number, dp: number, g: number, gs: number, zr: number };
  public hasData: boolean;
  constructor() { }

  ngOnInit() {
  }
  refresh(player1: PlayerDetail, player2: PlayerDetail) {
    this.player1 = player1;
    this.player2 = player2;
    if ( (this.player1 && this.player2) && (this.player1.batting || this.player2.batting)) {
      this.hasData = true;
      this.player1Totals = {
        a: this.player1.fielding.reduce( (total, b) => total + b.A, 0),
        e: this.player1.fielding.reduce( (total, b) => total + b.E, 0),
        dp: this.player1.fielding.reduce( (total, b) => total + b.DP, 0),
        g: this.player1.fielding.reduce( (total, b) => total + b.G, 0),
        gs: this.player1.fielding.reduce( (total, b) => total + b.GS, 0),
        zr: this.player1.fielding.reduce( (total, b) => total + b.ZR, 0),
      };
      this.player2Totals = {
        a: this.player2.fielding.reduce( (total, b) => total + b.A, 0),
        e: this.player2.fielding.reduce( (total, b) => total + b.E, 0),
        dp: this.player2.fielding.reduce( (total, b) => total + b.DP, 0),
        g: this.player2.fielding.reduce( (total, b) => total + b.G, 0),
        gs: this.player2.fielding.reduce( (total, b) => total + b.GS, 0),
        zr: this.player2.fielding.reduce( (total, b) => total + b.ZR, 0),
      };
    }
    this.buildChart();
  }
  buildChart(): void {
    const categories = [
      'Assists', 'Errors', 'Double Plays', 'Games', 'Starts', 'Zone Rating'
    ];
    Highcharts.chart('fieldingComparison', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Fielding'
      },
      subtitle: {
        text: 'Chadwick Bureau Baseball Databank'
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: this.player1.fullName,
        data: [
          this.player1Totals.a,
          this.player1Totals.e,
          this.player1Totals.dp,
          this.player1Totals.g,
          this.player1Totals.gs,
          this.player1Totals.zr
        ]
      }, {
        name: this.player2.fullName,
        data: [
          this.player2Totals.a,
          this.player2Totals.e,
          this.player2Totals.dp,
          this.player2Totals.g,
          this.player2Totals.gs,
          this.player2Totals.zr
        ]
      }]
    });
  }
}
