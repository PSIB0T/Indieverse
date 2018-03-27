import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { IArtist } from './../music-player/classes/iArtist';

@Injectable()
export class ArtistService {

  constructor(private apollo: Apollo) {}

  fetchArtist(artistId): Observable<IArtist> {
    return this.apollo.query({query: gql`{
                            user(userId:"${artistId}"){
                                id
                                username
                                descripion
                                albums{
                                id
                                title
                                musics{
                                    id
                                    title
                                }
                                }
                            }
                        }`}).map((res: any) => res.data.user);
  }
}
