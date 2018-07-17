import { Component, OnInit, ViewChild } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';
import { HomerunComparisonComponent } from '../../shared/components/visualizations/homerun-comparison/homerun-comparison.component';
import { ChadwickPlayerSearchResult } from '../../shared/models/chadwick-player-search-result';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { PlayerDetail } from '../../shared/models/player-detail';

@Component({
  selector: 'app-chadwick-player-comparison',
  templateUrl: './chadwick-player-comparison.component.html',
  styleUrls: ['./chadwick-player-comparison.component.scss']
})
export class ChadwickPlayerComparisonComponent implements OnInit {
  public player1: ChadwickPlayerSearchResult;
  public player2: ChadwickPlayerSearchResult;
  public player1Detail: PlayerDetail;
  public player2Detail: PlayerDetail;
  public results: ChadwickPlayerSearchResult[];
  private readonly _chadwickService: ChadwickService;
  @ViewChild('homerunCompare') homerunCompare: HomerunComparisonComponent;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
    this.player1 = new ChadwickPlayerSearchResult();
    this.player2 = new ChadwickPlayerSearchResult();
  }

  ngOnInit() {
  }
  async searchPlayers(term: string) {
    if (term && term.length > 2) {
      const results = await this._chadwickService.searchPlayers( term );
      this.results = results;
    } else {
      this.results = null;
    }
  }
  async onPlayerChanged(evt: MatAutocompleteSelectedEvent, player: number) {
    const result = evt.option.value;
  console.log(result);
    if (player === 1) {
      this.player1 = result;
    }
    console.log('player1', this.player1);
    console.log('player2', this.player2);
    // if (this.player1 && this.player2) {
    //   const data = await this._chadwickService.getPlayerComparisons(this.player1.playerID, this.player2.playerID);
    //   console.log(data);
    //   // this.player1 = data[0];
    //   // this.player2 = data[1];
    //   // this.homerunCompare.refresh(this.player1, this.player2);
    // }
  }
  displayFn(result) {
    if (result) {
      return result.name;
    } else {
      return '';
    }
  }

}
