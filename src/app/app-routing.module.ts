import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ChadwickComponent } from './views/chadwick/chadwick.component';
import { ChadwickStatsComponent } from './views/chadwick-stats/chadwick-stats.component';
import { ChadwickPlayerComparisonComponent } from './views/chadwick-player-comparison/chadwick-player-comparison.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'about', component: AboutViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'chadwick', component: ChadwickComponent, children: [
      { path: 'overview', component: ChadwickStatsComponent },
      { path: 'player-comparison', component: ChadwickPlayerComparisonComponent }
    ]
  },
  { path: 'portfolio', component: PortfolioViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
