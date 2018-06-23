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

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    BoxscoresComponent,
    TeamMapComponent,
    ChadwickStatsComponent,
    SingleNumberVizComponent
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
