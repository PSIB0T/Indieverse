import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMusic } from './../music-player/classes/iMusic';
import { config } from './../../../config';
import { ApolloQueryResult } from 'apollo-client';

@Injectable()
export class LoadMusic {
    currentUser: IMusic;
    constructor(private apollo: Apollo) {}

    loadFromGenre(name: string) {
        const query = gql`{
            musics(genre:"${name}"){
                genre
                streamUrl
                title
                album{
                  title
                  artist{
                    username
                  }
                }
              }
            }
        `
        return this.apollo.query({query})
                          .map((res: any) => res.data.musics)
    }

    searchMusic(queryString: string) {
      const query = gql`{
        musics(title:"${queryString}"){
            id
            title
            album {
              albumArt
              artist{
                username
              }
            }
          }
        }
      `

      return this.apollo.query({query})
                 .map((res: any) => res.data.musics)
    }

    searchAlbum(queryString: string) {
      const query = gql`{
        albums(title:"${queryString}"){
          title
          id
          albumArt
          artist{
            username
            id
          }
        }
      }
      `

      return this.apollo.query({query})
                 .map((res: any) => res.data.albums)
    }

    loadUsers() {
      const query = gql`{
        users{
            id
            username
          }
        }
      `
      return this.apollo.query({query})
                 .map((res: any) => res.data.users)
    }
}
