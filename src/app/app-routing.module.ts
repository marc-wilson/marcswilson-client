import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ChadwickComponent } from './views/chadwick/chadwick.component';
import { ChadwickStatsComponent } from './views/chadwick-stats/chadwick-stats.component';
import { ChadwickPlayerComparisonComponent } from './views/chadwick-player-comparison/chadwick-player-comparison.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/chadwick' },
  { path: 'home', component: HomeViewComponent },
  { path: 'chadwick', component: ChadwickComponent, children: [
      { path: 'overview', component: ChadwickStatsComponent },
      { path: 'player-comparison', component: ChadwickPlayerComparisonComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
