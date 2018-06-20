import { Component, ElementRef, OnInit } from '@angular/core';
import { BoxscoresService } from '../../../services/boxscores.service';
import { Boxscores } from '../../models/boxscores';
import { styler, value, listen, pointer, decay } from 'popmotion';

@Component({
  selector: 'app-boxscores',
  templateUrl: './boxscores.component.html',
  styleUrls: ['./boxscores.component.scss']
})
export class BoxscoresComponent implements OnInit {
  private _boxscoresService: BoxscoresService;
  private _elementRef: ElementRef;
  public boxscores: Boxscores;
  constructor(_boxscoresService: BoxscoresService, _elementRef: ElementRef) {
    this._boxscoresService = _boxscoresService;
    this._elementRef = _elementRef;
    console.log(this._elementRef);
  }

  async ngOnInit() {
    this.boxscores = await this._boxscoresService.getCurrentBoxscores();
    console.log(this.boxscores);
  }
}
