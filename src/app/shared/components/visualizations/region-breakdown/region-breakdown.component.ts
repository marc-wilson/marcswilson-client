import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChadwickService } from '../../../services/chadwick.service';

@Component({
  selector: 'app-region-breakdown',
  templateUrl: './region-breakdown.component.html',
  styleUrls: ['./region-breakdown.component.scss']
})
export class RegionBreakdownComponent implements OnInit {
  private readonly _chadwickService: ChadwickService;
  private _activePoint: { name: string, value: string };
  @Output() dataPointClickEmitter: EventEmitter<{ name: string, value: string }>;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
    this.dataPointClickEmitter = new EventEmitter<{ name: string, value: string }>();
  }

  async ngOnInit() {
    const data = await this._chadwickService.getPlayerRegions();
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
        },
        series: {
          events: {
            click: this.onDataPointClick.bind(this)
          }
        }
      },
      series: [{
        name: 'Players',
        data: data.map( d => ( { name: d.country, y: d.count } ))
      }]
    });
  }
  onDataPointClick(d: MouseEvent): void {
    this._activePoint = { name: 'country', value: d['point'].name };
    this.dataPointClickEmitter.emit(this._activePoint);
  }
}
