import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { GenreComponent } from './genre/genre.component';
import { DiscoverComponent } from './discover/discover.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardRootComponent, children: [
    { path: 'genre', component: GenreComponent, outlet: 'browse'},
    { path: 'discover', component: DiscoverComponent, outlet: 'browse'},
    { path: 'charts', component: ChartsComponent, outlet: 'browse'},
    { path: '', redirectTo: 'genre', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
