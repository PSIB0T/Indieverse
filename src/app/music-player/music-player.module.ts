import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicPlayerRoutingModule } from './music-player-routing.module';
import { MusicRootComponent } from './music-root/music-root.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicControlComponent } from './music-control/music-control.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';

@NgModule({
  imports: [
    CommonModule,
    MusicPlayerRoutingModule
  ],
  declarations: [MusicRootComponent, MusicDetailsComponent, MusicControlComponent, MusicProgressComponent]
})
export class MusicPlayerModule { }
