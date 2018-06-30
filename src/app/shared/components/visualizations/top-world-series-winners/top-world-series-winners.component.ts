import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChadwickService } from '../../../services/chadwick.service';
@Component({
  selector: 'app-top-world-series-winners',
  templateUrl: './top-world-series-winners.component.html',
  styleUrls: ['./top-world-series-winners.component.scss']
})
export class TopWorldSeriesWinnersComponent implements OnInit {
  private _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    const data = await this._chadwickService.getTopWorldSeriesWinners();
    this.buildChart(data);
  }
  buildChart(data) {
    Highcharts.chart('worldSeriesWins', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Top World Series Winners'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Share',
        data: data.map( d => ({ name: d.name, y: d.count }))
      }]
    });
  }

}
