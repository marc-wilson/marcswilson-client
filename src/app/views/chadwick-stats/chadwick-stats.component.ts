import { Component, OnInit, ViewChild } from '@angular/core';
import { ChadwickService } from '../../shared/services/chadwick.service';
import { ChadwickCounts } from '../../shared/models/chadwick-counts';
import { RegionBreakdownComponent } from '../../shared/components/visualizations/region-breakdown/region-breakdown.component';
import { HittingBreakdownComponent } from '../../shared/components/visualizations/hitting-breakdown/hitting-breakdown.component';

@Component({
  selector: 'app-chadwick-stats',
  templateUrl: './chadwick-stats.component.html',
  styleUrls: ['./chadwick-stats.component.scss']
})
export class ChadwickStatsComponent implements OnInit {
  private readonly _chadwickService: ChadwickService;
  public counts: ChadwickCounts;
  @ViewChild('regionBreakdown') regionBreakdown: RegionBreakdownComponent;
  @ViewChild('hittingBreakdown') hittingBreakdown: HittingBreakdownComponent;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    this.counts = await this._chadwickService.getChadwickCounts();
  }
  filterUpdated(filter) {
    this.hittingBreakdown.updateChart(filter);
  }
}
