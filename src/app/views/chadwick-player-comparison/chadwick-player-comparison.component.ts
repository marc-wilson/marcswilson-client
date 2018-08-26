import { Component, OnInit, ViewChild } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';
import { ChadwickPlayerSearchResult } from '../../shared/models/chadwick-player-search-result';
import { PlayerDetail } from '../../shared/models/player-detail';
import { FormControl } from '@angular/forms';
import { HittingComparisonComponent } from '../../shared/components/visualizations/hitting-comparison/hitting-comparison.component';
import { FieldingComparisonComponent } from '../../shared/components/visualizations/fielding-comparison/fielding-comparison.component';
import { PitchingComparisonComponent } from '../../shared/components/visualizations/pitching-comparison/pitching-comparison.component';

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
  private termChecker: string;
  @ViewChild('fieldingCompare') fieldingCompare: FieldingComparisonComponent;
  @ViewChild('hittingCompare') hittingCompare: HittingComparisonComponent;
  @ViewChild('pitchingCompare') pitchingCompare: PitchingComparisonComponent;
  constructor(_chadwickService: ChadwickService) {
    this.player1Ctrl = new FormControl();
    this.player2Ctrl = new FormControl();
    this._chadwickService = _chadwickService;
  }

  ngOnInit() {
    this.player1Ctrl.valueChanges.subscribe( _val => {
      if (_val && _val.length > 5) {
        this.termChecker = _val;
        this.searchPlayers(_val);
      }
    });
    this.player2Ctrl.valueChanges.subscribe( _val => {
      if (_val && _val.length > 5) {
        this.termChecker = _val;
        this.searchPlayers(_val);
      }
    });
  }
  async searchPlayers(term: string) {
    if (term && term.length > 5) {
      setTimeout( async () => {
        if (term === this.termChecker) {
          this.results = await this._chadwickService.searchPlayers( term );
          this.termChecker = null;
        }
      }, 1000);
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
      this.fieldingCompare.refresh(this.player1Detail, this.player2Detail);
      this.hittingCompare.refresh(this.player1Detail, this.player2Detail);
      if (this.pitchingCompare) {
        this.pitchingCompare.refresh( this.player1Detail, this.player2Detail );
      }
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
