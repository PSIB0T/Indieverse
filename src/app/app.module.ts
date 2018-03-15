import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MusicSearchComponentComponent } from './music-search-component/music-search-component.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { PlayerComponent } from './player/player.component';
import { ProgressComponent } from './progress/progress.component';
import { ApiService } from './api.service';
import { MusicService } from 'app/music.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { MusicComponent } from './music/music.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponentComponent,
    MusicDetailsComponent,
    PlayerComponent,
    ProgressComponent,
    HomeComponent,
    MusicComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [
    ApiService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
