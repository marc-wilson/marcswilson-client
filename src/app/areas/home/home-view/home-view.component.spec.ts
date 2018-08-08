import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewComponent } from './home-view.component';
import { ChadwickStatsComponent } from '../../../views/chadwick-stats/chadwick-stats.component';
import { BoxscoresComponent } from '../../../shared/components/boxscores/boxscores.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { SingleNumberVizComponent } from '../../../shared/components/visualizations/single-number-viz/single-number-viz.component';
import { RegionBreakdownComponent } from '../../../shared/components/visualizations/region-breakdown/region-breakdown.component';
import { HittingBreakdownComponent } from '../../../shared/components/visualizations/hitting-breakdown/hitting-breakdown.component';
import { OldestFranchisesComponent } from '../../../shared/components/visualizations/oldest-franchises/oldest-franchises.component';
import { TopWorldSeriesWinnersComponent } from '../../../shared/components/visualizations/top-world-series-winners/top-world-series-winners.component';
import { AttendanceTrendComponent } from '../../../shared/components/visualizations/attendance-trend/attendance-trend.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttendanceTrendComponent,
        BoxscoresComponent,
        ChadwickStatsComponent,
        HittingBreakdownComponent,
        HomeViewComponent,
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
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
