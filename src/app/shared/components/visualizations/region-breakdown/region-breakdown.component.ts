import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChadwickService } from '../../../services/chadwick.service';

@Component({
  selector: 'app-region-breakdown',
  templateUrl: './region-breakdown.component.html',
  styleUrls: ['./region-breakdown.component.scss']
})
export class RegionBreakdownComponent implements OnInit {
  private readonly _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    const data = await this._chadwickService.getPlayerRegions();
    console.log('d', data);
    this.buildChart(data);
  }
  buildChart(data): void {
    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Player Origins'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
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
        name: 'Players',
        data: data.map( d => ( { name: d._id, y: d.count } ))
      }]
    });
  }

}
