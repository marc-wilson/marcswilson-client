import { Component, OnInit } from '@angular/core';
import { ChadwickService } from '../../../services/chadwick.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-oldest-franchises',
  templateUrl: './oldest-franchises.component.html',
  styleUrls: ['./oldest-franchises.component.scss']
})
export class OldestFranchisesComponent implements OnInit {
  private _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    const data = await this._chadwickService.getOldestFranchises();
    this.buildChart(data);
  }
  buildChart(data): void {
    console.log(data);
    const teamNames = data.map( d => d.name );
    Highcharts.chart('franchises', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Oldest Franchises'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: teamNames,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Years / Win %'
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
        name: 'Years Active',
        data: data.map( d => d.count )

      }, {
        name: 'Win %',
        data: data.map( d => d.winPercentage )

      }]
    });
  }

}
