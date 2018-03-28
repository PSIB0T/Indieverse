import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import {IUser} from './login/classes/iUser';

@Injectable()
export class LoginService {
    currentUser: IUser;

    constructor() {
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
}
