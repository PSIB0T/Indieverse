import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import 'rxjs/Rx';

@Injectable()
export class MusicService {
  audio: any;

  constructor(private __apiService: ApiService) {
    this.audio = new Audio()
  }
  load(url) {
    this.audio.src = this.__apiService.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play()
  }

  getPlaylistTracks () {
      return this.__apiService.get('https://api.soundcloud.com/playlists/261435196', true)
                              .map(res => res.json())
                              .map(data => data.tracks);
  }

  randomTrack(tracks) {
    const trackLength = tracks.length;
    const randomNumber = Math.floor((Math.random() * trackLength) + 1);
    return tracks[randomNumber];
  }

  formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }

  findTracks(value) {
    return this.__apiService.get(`${this.__apiService.prepareUrl('https://api.soundcloud.com/tracks')}&q=${value}`, false)
      .debounceTime(300)
      .distinctUntilChanged()
      .map(res => res.json())
  }

  xlArtwork(url) {
    return url.replace(/large/, 't500x500');
  }



}
