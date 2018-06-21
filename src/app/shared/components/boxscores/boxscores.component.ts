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
  private _shiftCounter = 0;
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
  shiftLeft(): void {
    const boxscoresEl = this._elementRef.nativeElement.querySelector('#boxscores');
    this._shiftCounter += 600;
    boxscoresEl.scroll({
      left: this._shiftCounter,
      behavior: 'smooth'
    });
  }
  shiftRight(): void {
    if (this._shiftCounter > 0) {
      const boxscoresEl = this._elementRef.nativeElement.querySelector( '#boxscores' );
      this._shiftCounter -= 600;
      boxscoresEl.scroll( {
        left: this._shiftCounter,
        behavior: 'smooth'
      } );
    }
  }
}
