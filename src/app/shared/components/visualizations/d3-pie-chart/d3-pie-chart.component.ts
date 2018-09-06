import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import { arc, pie } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import { interpolate } from 'd3-interpolate';

@Component({
  selector: 'app-d3-pie-chart',
  templateUrl: './d3-pie-chart.component.html',
  styleUrls: ['./d3-pie-chart.component.scss']
})
export class D3PieChartComponent implements OnInit {
  @ViewChild('svg') svg: ElementRef;
  private _dimensions = { height: 540, width: 540, radius: Math.min(540, 540) / 2 };
  private _current: any;
  private _arcGen: any;
  constructor() {
  }

  async ngOnInit() {
    const data: { apples: { region: string, count: number }[], oranges: { region: string, count: number }[] } = {
      apples: [
        { region: 'North', count: 400 },
        { region: 'East', count: 500 },
      ],
      oranges: [
        { region: 'North', count: 200 },
        { region: 'East', count: 300 },
      ]
    };
    const svg = select(this.svg.nativeElement);
    svg.attr('height', this._dimensions.height);
    svg.attr('width', this._dimensions.width);
    svg.append('g').attr('transform', `translate(${this._dimensions.width / 2}, ${this._dimensions.height / 2})`);
    const color = scaleOrdinal(['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f']);
    const pieGen = pie().value(d => d['count'] ).sort(null);
    this._arcGen = arc().innerRadius(0).outerRadius(this._dimensions.radius);
    const path = svg.selectAll('path').data(pieGen(data.apples));
    path.transition().duration(200).attrTween('d', this.arcTween);
    path.enter().append('path')
      .attr('fill', (d, i) => color(i.toString()))
      .attr('d', this._arcGen)
      .attr('stroke', 'white')
      .attr('stroke-width', '6px')
      .each( d => { this._current = d; });
  }
  arcTween(a) {
    const i = interpolate(this._current, a);
    this._current = i(1);
    return (t) => this._arcGen(i(t));
  }
}
