import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicRootComponent } from './music-root/music-root.component';

const routes: Routes = [
  { path: 'player', component: MusicRootComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicPlayerRoutingModule { }
