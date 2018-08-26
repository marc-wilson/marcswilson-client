import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PlayerDetail } from '../../../models/player-detail';
@Component({
  selector: 'app-hitting-comparison',
  templateUrl: './hitting-comparison.component.html',
  styleUrls: ['./hitting-comparison.component.scss']
})
export class HittingComparisonComponent implements OnInit {
  @Input() player1: PlayerDetail;
  @Input() player2: PlayerDetail;
  public player1Totals: { hr: number, doubles: number, triples: number, ab: number, h: number, so: number, r: number, ibb: number, rbi: number };
  public player2Totals: { hr: number, doubles: number, triples: number, ab: number, h: number, so: number, r: number, ibb: number, rbi: number };
  public hasData: boolean;
  constructor() { }

  ngOnInit() {
  }
  refresh(player1: PlayerDetail, player2: PlayerDetail) {
    this.player1 = player1;
    console.log(this.player1);
    this.player2 = player2;
    if ( (this.player1 && this.player2) && (this.player1.batting || this.player2.batting)) {
      this.hasData = true;
      this.player1Totals = {
        hr: this.player1.batting.reduce( (total, b) => total + b.HR, 0),
        doubles: this.player1.batting.reduce( (total, b) => total + b['2B'], 0),
        triples: this.player1.batting.reduce( (total, b) => total + b['3B'], 0),
        ab: this.player1.batting.reduce( (total, b) => total + b.AB, 0),
        h: this.player1.batting.reduce( (total, b) => total + b.H, 0),
        so: this.player1.batting.reduce( (total, b) => total + b.SO, 0),
        r: this.player1.batting.reduce( (total, b) => total + b.R, 0),
        ibb: this.player1.batting.reduce( (total, b) => total + b.IBB, 0),
        rbi: this.player1.batting.reduce( (total, b) => total + b.RBI, 0),
      };
      this.player2Totals = {
        hr: this.player2.batting.reduce( (total, b) => total + b.HR, 0),
        doubles: this.player2.batting.reduce( (total, b) => total + b['2B'], 0),
        triples: this.player2.batting.reduce( (total, b) => total + b['3B'], 0),
        ab: this.player2.batting.reduce( (total, b) => total + b.AB, 0),
        h: this.player2.batting.reduce( (total, b) => total + b.H, 0),
        so: this.player2.batting.reduce( (total, b) => total + b.SO, 0),
        r: this.player2.batting.reduce( (total, b) => total + b.R, 0),
        ibb: this.player2.batting.reduce( (total, b) => total + b.IBB, 0),
        rbi: this.player2.batting.reduce( (total, b) => total + b.RBI, 0),
      };
      console.log(this.player1Totals);
      console.log(this.player2Totals);
    }
    this.buildChart();
  }
  buildChart(): void {
    const categories = [
      'Homeruns', 'Double Plays', 'Triple Plays', 'At Bats', 'Hits', 'Strike Outs', 'Rruns', 'Walks', 'RBI'
    ];
    Highcharts.chart('hittingComparison', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Hitting'
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
          this.player1Totals.hr,
          this.player1Totals.doubles,
          this.player1Totals.triples,
          this.player1Totals.ab,
          this.player1Totals.h,
          this.player1Totals.so,
          this.player1Totals.r,
          this.player1Totals.ibb,
          this.player1Totals.rbi,
        ]
      }, {
        name: this.player2.fullName,
        data: [
          this.player2Totals.hr,
          this.player2Totals.doubles,
          this.player2Totals.triples,
          this.player2Totals.ab,
          this.player2Totals.h,
          this.player2Totals.so,
          this.player2Totals.r,
          this.player2Totals.ibb,
          this.player2Totals.rbi,
        ]
      }]
    });
  }

}
