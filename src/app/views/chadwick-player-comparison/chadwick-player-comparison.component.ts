import { Component, OnInit, ViewChild } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';
import { HomerunComparisonComponent } from '../../shared/components/visualizations/homerun-comparison/homerun-comparison.component';
import { ChadwickPlayerSearchResult } from '../../shared/models/chadwick-player-search-result';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { PlayerDetail } from '../../shared/models/player-detail';
import { FormControl } from '@angular/forms';
import { HittingComparisonComponent } from '../../shared/components/visualizations/hitting-comparison/hitting-comparison.component';

@Component({
  selector: 'app-chadwick-player-comparison',
  templateUrl: './chadwick-player-comparison.component.html',
  styleUrls: ['./chadwick-player-comparison.component.scss']
})
export class ChadwickPlayerComparisonComponent implements OnInit {
  public player1Ctrl: FormControl;
  public player2Ctrl: FormControl;
  public player1Detail: PlayerDetail;
  public player2Detail: PlayerDetail;
  public results: ChadwickPlayerSearchResult[];
  private readonly _chadwickService: ChadwickService;
  @ViewChild('homerunCompare') homerunCompare: HomerunComparisonComponent;
  @ViewChild('hittingCompare') hittingCompare: HittingComparisonComponent;
  constructor(_chadwickService: ChadwickService) {
    this.player1Ctrl = new FormControl();
    this.player2Ctrl = new FormControl();
    this._chadwickService = _chadwickService;
  }

  ngOnInit() {
    this.player1Ctrl.valueChanges.subscribe( _val => {
      if (_val && _val.length > 3) {
        this.searchPlayers(_val);
      }
    });
    this.player2Ctrl.valueChanges.subscribe( _val => {
      if (_val && _val.length > 3) {
        this.searchPlayers(_val);
      }
    });
  }
  async searchPlayers(term: string) {
    if (term && term.length > 2) {
      const results = await this._chadwickService.searchPlayers( term );
      this.results = results;
    } else {
      this.results = null;
    }
  }
  async onPlayerChanged() {
    const player1: ChadwickPlayerSearchResult = this.player1Ctrl.value;
    const player2: ChadwickPlayerSearchResult = this.player2Ctrl.value;
    this.results = null;
    if (player1 && player2) {
      const data = await this._chadwickService.getPlayerComparisons(player1.playerID, player2.playerID);
      console.log(data);
      this.player1Detail = data[0];
      this.player2Detail = data[1];
      this.homerunCompare.refresh(this.player1Detail, this.player2Detail);
      this.hittingCompare.refresh(this.player1Detail, this.player2Detail);
    }
  }
  displayFn(result) {
    if (result) {
      return result.name;
    } else {
      return '';
    }
  }

}
