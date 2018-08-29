import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UIService } from './shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navState = true;
  private readonly _uiService: UIService;
  constructor(_uiService: UIService) {
    this._uiService = _uiService;
    Highcharts.setOptions({
      credits: {
        enabled: false
      },
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
          ]
        };
      })
    });
  }
  ngOnInit(): void {
    this._uiService.navEmitter.subscribe( _showNav => {
      this.navState = _showNav;
    });
  }
}
