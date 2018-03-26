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

  fetchSong(): Observable<IMusic> {
    return this.apollo.query({query: gql`{
                            musics {
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
                        }`}).map((res: any) => res.data.musics[0]);
  }

  prepareUrl(url) {
    return `${url}?client_id=${this.clientId}`
  }

  load(url) {
    this.audio.src = this.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play()
  }
}
