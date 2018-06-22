import { Component, ElementRef, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo.service';
import * as d3 from 'd3';
import * as topojson from 'topojson';

@Component({
  selector: 'app-team-map',
  templateUrl: './team-map.component.html',
  styleUrls: ['./team-map.component.scss']
})
export class TeamMapComponent implements OnInit {
  private readonly _geoService: GeoService;
  private _elementRef: ElementRef;
  private _svg: any;
  private _height = 500;
  private _width = 960;
  public topo: any;
  constructor(_geoService: GeoService, _elementRef: ElementRef) {
    this._geoService = _geoService;
    this._elementRef = _elementRef;
  }

  async ngOnInit() {
    this.topo = await this._geoService.getUSTopoJson();

    const projection = d3.geoAlbersUsa().scale(1070).translate([ this._width / 2, this._height / 2 ]);
    const path = d3.geoPath().projection(projection);
    this._svg = d3.select('svg')
      .attr('width', this._width)
      .attr('height', this._height);

    this._svg.append('rect')
      .attr('class', 'background')
      .attr('width', this._width)
      .attr('height', this._height);
    const g = this._svg.append('g');

    g.append('g')
      .attr('id', 'states')
      .selectAll('path')
      .data(topojson.feature(this.topo, this.topo.objects.states).features)
      .enter().append('path')
      .attr('d', path);

    g.append('path')
      .datum(topojson.mesh(this.topo, this.topo.objects.states, (a, b) => a !== b ))
      .attr('id', 'state-borders')
      .attr('d', path);
  }
}
