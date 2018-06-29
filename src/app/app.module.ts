import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { BoxscoresComponent } from './shared/components/boxscores/boxscores.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatDividerModule, MatIconModule } from '@angular/material';
import { TeamMapComponent } from './shared/components/team-map/team-map.component';
import { ChadwickStatsComponent } from './shared/components/chadwick-stats/chadwick-stats.component';
import { SingleNumberVizComponent } from './shared/components/visualizations/single-number-viz/single-number-viz.component';
import { PieChartComponent } from './shared/components/visualizations/pie-chart/pie-chart.component';
import { RegionBreakdownComponent } from './shared/components/visualizations/region-breakdown/region-breakdown.component';
import { HittingBreakdownComponent } from './shared/components/visualizations/hitting-breakdown/hitting-breakdown.component';
import { OldestFranchisesComponent } from './shared/components/visualizations/oldest-franchises/oldest-franchises.component';
import { TopWorldSeriesWinnersComponent } from './shared/components/visualizations/top-world-series-winners/top-world-series-winners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    BoxscoresComponent,
    TeamMapComponent,
    ChadwickStatsComponent,
    SingleNumberVizComponent,
    PieChartComponent,
    RegionBreakdownComponent,
    HittingBreakdownComponent,
    OldestFranchisesComponent,
    TopWorldSeriesWinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
