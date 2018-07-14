import { Component, OnInit, ViewChild } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';
import { HomerunComparisonComponent } from '../../shared/components/visualizations/homerun-comparison/homerun-comparison.component';
import { ChadwickPlayerSearchResult } from '../../shared/models/chadwick-player-search-result';

@Component({
  selector: 'app-chadwick-player-comparison',
  templateUrl: './chadwick-player-comparison.component.html',
  styleUrls: ['./chadwick-player-comparison.component.scss']
})
export class ChadwickPlayerComparisonComponent implements OnInit {
  public player1: { name: string, playerID: string };
  public player2: { name: string, playerID: string };
  public results: ChadwickPlayerSearchResult[];
  private readonly _chadwickService: ChadwickService;
  @ViewChild('homerunCompare') homerunCompare: HomerunComparisonComponent;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    this.results = await this._chadwickService.searchPlayers('Mike Zunino');
    this.player1 = this.results[0];
    this.player2 = this.results[1];
    await this.onPlayerChanged();
  }
  async searchPlayers(evt) {
    const results = await this._chadwickService.searchPlayers(evt.value);
    this.results = results;
  }
  async onPlayerChanged() {
    if (this.player1 && this.player2) {
      const data = await this._chadwickService.getPlayerComparisons(this.player1.playerID, this.player2.playerID);
      this.player1 = data[0];
      this.player2 = data[1];
      this.homerunCompare.refresh(this.player1, this.player2);
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
