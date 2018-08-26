import { Component, Input, OnInit } from '@angular/core';
import { PlayerDetail } from '../../../models/player-detail';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pitching-comparison',
  templateUrl: './pitching-comparison.component.html',
  styleUrls: ['./pitching-comparison.component.scss']
})
export class PitchingComparisonComponent implements OnInit {
  @Input() player1: PlayerDetail;
  @Input() player2: PlayerDetail;
  public player1Totals: { w: number, l: number, era: number, g: number, gs: number, so: number };
  public player2Totals: { w: number, l: number, era: number, g: number, gs: number, so: number };
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
        w: this.player1.pitching.reduce( (total, b) => total + b.W, 0),
        l: this.player1.pitching.reduce( (total, b) => total + b.L, 0),
        era: this.player1.pitching.reduce( (total, b) => total + b.ERA, 0),
        g: this.player1.pitching.reduce( (total, b) => total + b.G, 0),
        gs: this.player1.pitching.reduce( (total, b) => total + b.GS, 0),
        so: this.player1.pitching.reduce( (total, b) => total + b.SO, 0),
      };
      this.player2Totals = {
        w: this.player2.pitching.reduce( (total, b) => total + b.W, 0),
        l: this.player2.pitching.reduce( (total, b) => total + b.L, 0),
        era: this.player2.pitching.reduce( (total, b) => total + b.ERA, 0),
        g: this.player2.pitching.reduce( (total, b) => total + b.G, 0),
        gs: this.player2.pitching.reduce( (total, b) => total + b.GS, 0),
        so: this.player2.pitching.reduce( (total, b) => total + b.SO, 0),
      };
    }
    this.buildChart();
  }
  buildChart(): void {
    const categories = [
      'Wins', 'Loses', 'ERA', 'Games', 'Starts', 'Strikeouts'
    ];
    Highcharts.chart('pitchingComparison', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Pitching'
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
          this.player1Totals.w,
          this.player1Totals.l,
          this.player1Totals.era,
          this.player1Totals.g,
          this.player1Totals.gs,
          this.player1Totals.so
        ]
      }, {
        name: this.player2.fullName,
        data: [
          this.player2Totals.w,
          this.player2Totals.l,
          this.player2Totals.era,
          this.player2Totals.g,
          this.player2Totals.gs,
          this.player2Totals.so
        ]
      }]
    });
  }
}
