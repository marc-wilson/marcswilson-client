import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChadwickService } from '../../../services/chadwick.service';
@Component({
  selector: 'app-top-world-series-winners',
  templateUrl: './top-world-series-winners.component.html',
  styleUrls: ['./top-world-series-winners.component.scss']
})
export class TopWorldSeriesWinnersComponent implements OnInit {
  private _chadwickService: ChadwickService;
  private _activePoint: { name: string, value: string };
  @Output() dataPointClickEmitter: EventEmitter<{ name: string, value: string }>;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
    this.dataPointClickEmitter = new EventEmitter<{ name: string, value: string }>();
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
        },
        series: {
          events: {
            click: this.onDataPointClick.bind(this)
          }
        }
      },
      series: [{
        name: 'Share',
        data: data.map( d => ({ name: d.name, y: d.count, franchID: d.franchID }))
      }]
    });
  }
  onDataPointClick(d: MouseEvent): void {
    console.log(d);
    if (!this._activePoint) {
      this._activePoint = { name: 'teamID', value: d['point'].franchID };
    } else if (this._activePoint.value === d['point'].name) {
      this._activePoint = null;
    } else {
      this._activePoint = { name: 'teamID', value: d['point'].franchID };
    }

    this.dataPointClickEmitter.emit(this._activePoint);
  }

}
