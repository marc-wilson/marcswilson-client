import { Component, OnInit } from '@angular/core';
import { BoxscoresService } from '../../../services/boxscores.service';
import { Boxscores } from '../../models/boxscores';

@Component({
  selector: 'app-boxscores',
  templateUrl: './boxscores.component.html',
  styleUrls: ['./boxscores.component.scss']
})
export class BoxscoresComponent implements OnInit {
  private _boxscoresService: BoxscoresService;
  public boxscores: Boxscores;
  constructor(_boxscoresService: BoxscoresService) {
    this._boxscoresService = _boxscoresService;
  }

  async ngOnInit() {
    this.boxscores = await this._boxscoresService.getCurrentBoxscores();
    console.log(this.boxscores);
  }

}
