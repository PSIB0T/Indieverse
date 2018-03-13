import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './nav/nav.component';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { BrowseComponent } from './browse/browse.component';
import { GenreComponent } from './genre/genre.component';
import { DiscoverComponent } from './discover/discover.component';
import { CardComponent } from './card/card.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [NavComponent, DashboardRootComponent, BrowseComponent, GenreComponent, DiscoverComponent, CardComponent, ChartsComponent]
})
export class DashboardModule { }
