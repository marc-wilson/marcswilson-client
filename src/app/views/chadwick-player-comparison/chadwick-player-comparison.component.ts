import { Component, OnInit } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';

@Component({
  selector: 'app-chadwick-player-comparison',
  templateUrl: './chadwick-player-comparison.component.html',
  styleUrls: ['./chadwick-player-comparison.component.scss']
})
export class ChadwickPlayerComparisonComponent implements OnInit {
  public player1: { name: string, playerID: string };
  public player2: { name: string, playerID: string };
  public results: any;
  private readonly _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    this.results = await this._chadwickService.searchPlayers('Mike Zunino');
    this.player1 = this.results[0];
    this.player2 = this.results[1];
  }
  async searchPlayers(evt) {
    const docs = await this._chadwickService.searchPlayers(evt.value);
    this.results = docs;
  }
  onPlayerChanged(evt, player) {
    player.name = evt.name;
    player.playerID = evt.playerID;
    console.log(player);
  }
}
