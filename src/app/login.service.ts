import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as config from './../../config.js';
import {IUser} from './login/classes/iUser';
import { IArtist } from './music-player/classes/iArtist';

@Injectable()
export class LoginService {
    currentUser: IUser;

    constructor(private http: HttpClient, private apollo: Apollo) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    login(user: IUser): Observable<IUser> {
        let isVerified: boolean;
        if (user.username === 'username' && user.password === 'password') {
            isVerified = true;
        }

        return Observable.create((observer: Observer<IUser>) => {
            if (isVerified) {
                observer.next(user);
            } else {
                observer.error('Username is incorrect');
            }
        });
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

    signUp(user: IArtist): Observable<IArtist> {
        const mutation = gql`mutation adduser{
            addUser(firstname:"${user.firstname}" lastname:"${user.lastname}" email:"${user.email}" username:"${user.username}"
                    password:"${user.password}" profileImage: "${user.profileImage}" coverImage: "${user.coverImage}"){
                firstname
                lastname
            }
        }
        `
        return this.apollo
                    .mutate({mutation})
    }
}
