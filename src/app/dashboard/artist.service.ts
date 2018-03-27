import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { IArtist } from './../music-player/classes/iArtist';
import { IAlbum } from '../music-player/classes/iAlbum';

@Injectable()
export class ArtistService {

  constructor(private apollo: Apollo) {}

  fetchArtist(artistId): Observable<IArtist> {
    return this.apollo.query({query: gql`{
                            user(userId:"${artistId}"){
                                id
                                username
                                descripion
                                coverImage
                                albums{
                                id
                                title
                                albumArt
                                musics{
                                    id
                                    title
                                }
                                }
                            }
                        }`}).map((res: any) => res.data.user);
  }

  fetchAlbum(albumId): Observable<IAlbum> {
    return this.apollo.query({query: gql`{
                            album(albumId:"${albumId}"){
                                title
                                descripion
                                albumArt
                                date
                                artist{
                                    username
                                }
                                musics{
                                    id
                                    title
                                }
                            }
                        }`}).map((res: any) => res.data.album);
  }
}
