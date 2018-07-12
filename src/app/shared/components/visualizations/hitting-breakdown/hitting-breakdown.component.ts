import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChadwickService } from '../../../services/chadwick.service';

@Component({
  selector: 'app-hitting-breakdown',
  templateUrl: './hitting-breakdown.component.html',
  styleUrls: ['./hitting-breakdown.component.scss']
})
export class HittingBreakdownComponent implements OnInit {
  private _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    const data = await this._chadwickService.getTopHitters();
    this.buildChart(data);
  }
  buildChart(data): void {
    const playerNames = data.map( d => d.name );
    Highcharts.chart('hittingBreakdown', {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: 'Top Hitters in MLB History'
      },
      subtitle: {
        text: 'Source: Chadwick Bureau Baseball Databank'
      },
      xAxis: [{
        categories: playerNames,
        crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Batting Average',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }, { // Secondary yAxis
        title: {
          text: 'Homeruns',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value}',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }],
      tooltip: {
        shared: true
      },
      series: [{
        name: 'Homeruns',
        type: 'column',
        yAxis: 1,
        data: data.map( d => d.homeRuns ),
        tooltip: {
          valueSuffix: ''
        }

      }, {
        name: 'Batting Average',
        type: 'spline',
        data: data.map( d => d.battingAverage),
        tooltip: {
          valueSuffix: ''
        }
      }]
    });
  }

}
