import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { MusicFetchService } from './../music-fetch.service';
import { IMusic } from './../classes/iMusic';

@Component({
  selector: 'app-music-root',
  templateUrl: './music-root.component.html',
  styleUrls: ['./music-root.component.scss']
})
export class MusicRootComponent implements OnInit {
  currentMusic: IMusic = {};
  isLoading: boolean;
  isPaused: boolean;
  position;
  elapsed: string;
  duration: string;
  musicId: string;

  constructor(private _musicFetchService: MusicFetchService,
              private _route: ActivatedRoute) {
    this.position = 0;
    this.isLoading = true;
    this.isPaused = false;
    this.elapsed = '00:00';
    this.duration = '00:00';
    this._route.params.subscribe(params => {
      this.musicId = params['id'];
    });
   }

  ngOnInit() {
    this._musicFetchService.fetchSong(this.musicId)
                           .subscribe((res) => {
                             console.log(res);
                             this.isLoading = false;
                             this.currentMusic = res;
                             this._musicFetchService.play(this.currentMusic.streamUrl)
                             this._musicFetchService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
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

  handleUpdatePosition(new_pos: number) {
    let duration: number =  this._musicFetchService.audio.duration;
    this.position = new_pos;
    duration *= new_pos;
    this._musicFetchService.audio.currentTime = duration;
    this.elapsed = this._musicFetchService.formatTime(this._musicFetchService.audio.currentTime);
  }

  handleTimeUpdate(e) {
    const elapsed: number =  this._musicFetchService.audio.currentTime;
    const duration: number =  this._musicFetchService.audio.duration;
    if (!isNaN(duration)) {
      this.position = elapsed / duration;
    }
    this.elapsed = this._musicFetchService.formatTime(elapsed);
    this.duration = this._musicFetchService.formatTime(duration);
  }

}
