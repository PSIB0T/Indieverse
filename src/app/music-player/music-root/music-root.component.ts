import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MusicFetchService } from './../music-fetch.service';
import { IMusic } from './../classes/iMusic';

@Component({
  selector: 'app-music-root',
  templateUrl: './music-root.component.html',
  styleUrls: ['./music-root.component.scss']
})
export class MusicRootComponent implements OnInit {
  currentMusic: IMusic = {};
  isLoading = true;
  isPaused = false;

  constructor(private _musicFetchService: MusicFetchService) {

   }

  ngOnInit() {
    this._musicFetchService.fetchSong()
                           .subscribe((res) => {
                             this.isLoading = false;
                             this.currentMusic = res;
                             this._musicFetchService.play(this.currentMusic.streamUrl)
                           })
  }

  pause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this._musicFetchService.audio.pause();
    } else {
      this._musicFetchService.audio.play();
    }
  }

}
