import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './../../config';
import { ApolloQueryResult } from 'apollo-client';
import 'rxjs/add/operator/map';
import { IMusic } from './music-player/classes/iMusic';

@Injectable()
export class UploadService {
    constructor(private apollo: Apollo, private http: HttpClient) {}

    loadAlbums(userId: string) {
        const query = gql`{
            user(userId:"${userId}"){
                id
                albums{
                  id
                  title
                }
              }
            }`
        return this.apollo.query({query})
                          .map((res: any) => res.data.user)
    }

    uploadMusic(music: IMusic) {
        const mutation = gql`
        mutation addMusic {
            addMusic(title:"${music.title}", genre:"${music.genre}",
                    streamUrl:"${music.streamUrl}"
                    albumId:"${music.album.id}") {
              title
              id
            }
        }
        `
        return this.apollo.mutate({mutation});
    }

    uploadFile(file: File) {
        const input = new FormData();
        input.append('fileName', file);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this.http.post(`${config.server}/uploadFile`, input, {headers})
                        .map((res: any) => `${config.server}/${res.filename}`)
    }
}
