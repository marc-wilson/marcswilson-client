import { Component, OnInit } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';
import { ChadwickCounts } from '../../shared/models/chadwick-counts';

@Component({
  selector: 'app-chadwick-stats',
  templateUrl: './chadwick-stats.component.html',
  styleUrls: ['./chadwick-stats.component.scss']
})
export class ChadwickStatsComponent implements OnInit {
  private readonly _chadwickService: ChadwickService;
  public counts: ChadwickCounts;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    this.counts = await this._chadwickService.getChadwickCounts();
  }

}
