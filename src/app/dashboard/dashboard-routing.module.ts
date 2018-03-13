import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { GenreComponent } from './genre/genre.component';
import { DiscoverComponent } from './discover/discover.component';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardRootComponent, children: [
    { path: 'genre', component: GenreComponent, outlet: 'browse'},
    { path: 'discover', component: DiscoverComponent, outlet: 'browse'},
    { path: 'charts', component: ChartsComponent, outlet: 'browse'},
    { path: '', redirectTo: 'genre', pathMatch: 'full'},
  ]},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
