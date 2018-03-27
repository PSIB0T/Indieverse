import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { IMusic } from './classes/iMusic';

@Injectable()
export class MusicFetchService {
  audio: any;
  clientId = 'WSHQEBO9PuA7NSFJj2TDNMLoJaoP2tG2'

  constructor(private apollo: Apollo) {
    this.audio = new Audio();
  }

  fetchSong(musicId): Observable<IMusic> {
    return this.apollo.query({query: gql`{
                            music(musicId: "${musicId}"){
                                title
                                streamUrl
                                coverArt
                                album{
                                    title
                                    artist{
                                        username
                                    }
                                }
                            }
                        }`}).map((res: any) => res.data.music);
  }

  prepareUrl(url) {
    return `${url}?client_id=${this.clientId}`
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0.0;
  }

  load(url) {
    this.audio.src = this.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play()
  }

  formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }
}
