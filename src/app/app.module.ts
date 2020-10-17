import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MusicSearchComponentComponent } from './music-search-component/music-search-component.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { PlayerComponent } from './player/player.component';
import { ProgressComponent } from './progress/progress.component';
import { ApiService } from './api.service';
import { MusicService } from 'app/music.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { MusicComponent } from './music/music.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { AlbumComponent } from './album/album.component';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';


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
    HttpClientModule,
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
