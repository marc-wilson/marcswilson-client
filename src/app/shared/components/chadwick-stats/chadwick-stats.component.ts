import { Component, OnInit } from '@angular/core';
import { ChadwickService } from '../../services/chadwick.service';
import { ChadwickCounts } from '../../models/chadwick-counts';

@Component({
  selector: 'app-chadwick-stats',
  templateUrl: './chadwick-stats.component.html',
  styleUrls: ['./chadwick-stats.component.scss']
})
export class ChadwickStatsComponent implements OnInit {
  private readonly _chandwickService: ChadwickService;
  public counts: ChadwickCounts;
  constructor(_chadwickService: ChadwickService) {
    this._chandwickService = _chadwickService;
  }

  async ngOnInit() {
    this.counts = await this._chandwickService.getChadwickCounts();
    console.log(this.counts);
  }

}
