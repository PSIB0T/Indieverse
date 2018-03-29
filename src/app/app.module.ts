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
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MusicPlayerModule } from './music-player/music-player.module'
import {config} from './../../config';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponentComponent,
    MusicDetailsComponent,
    PlayerComponent,
    ProgressComponent,
    HomeComponent,
    MusicComponent,
    LoginComponent,
    SignupComponent
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
    DashboardModule,
    MusicPlayerModule,
    HttpLinkModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    MusicService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(_appolo: Apollo, httpLink: HttpLink) {
    _appolo.create({
      link: httpLink.create({ uri: config.server + '/graphql' }),
      cache: new InMemoryCache()
    })
  }
}
