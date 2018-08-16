import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { tween, easing } from 'popmotion';

@Component({
  selector: 'app-single-number-viz',
  templateUrl: './single-number-viz.component.html',
  styleUrls: ['./single-number-viz.component.scss']
})
export class SingleNumberVizComponent implements OnInit {
  @Input() num: number;
  @Input() text: string;
  private readonly _elementRef: ElementRef;
  constructor(_elementRef: ElementRef) {
    this._elementRef = _elementRef;
  }

  ngOnInit() {
    const updateFunc = ( v ) => this.num = v;
    tween( { to: this.num, duration: 1000, ease: easing.easeOut }).start( updateFunc );
  }

}
