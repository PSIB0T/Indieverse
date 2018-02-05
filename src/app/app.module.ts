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

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponentComponent,
    MusicDetailsComponent,
    PlayerComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    ApiService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
