import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadwickStatsComponent } from './chadwick-stats.component';
import { BoxscoresComponent } from '../../shared/components/boxscores/boxscores.component';
import { SingleNumberVizComponent } from '../../shared/components/visualizations/single-number-viz/single-number-viz.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RegionBreakdownComponent } from '../../shared/components/visualizations/region-breakdown/region-breakdown.component';
import { HittingBreakdownComponent } from '../../shared/components/visualizations/hitting-breakdown/hitting-breakdown.component';
import { OldestFranchisesComponent } from '../../shared/components/visualizations/oldest-franchises/oldest-franchises.component';
import {
  TopWorldSeriesWinnersComponent
} from '../../shared/components/visualizations/top-world-series-winners/top-world-series-winners.component';
import { AttendanceTrendComponent } from '../../shared/components/visualizations/attendance-trend/attendance-trend.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChadwickStatsComponent', () => {
  let component: ChadwickStatsComponent;
  let fixture: ComponentFixture<ChadwickStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttendanceTrendComponent,
        BoxscoresComponent,
        ChadwickStatsComponent,
        HittingBreakdownComponent,
        OldestFranchisesComponent,
        RegionBreakdownComponent,
        SingleNumberVizComponent,
        TopWorldSeriesWinnersComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChadwickStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
