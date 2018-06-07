/*
 * @Author: Nizars
 * @Date: 2018-06-05 02:13:35
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 11:06:12
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Event } from '../models/event';
import { AppUser } from '../models/appUser';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Injectable()
export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public onAuthenticatedUser(): Observable<AppUser> {
        return new Observable<AppUser>(observer => {
            this.socket.on('authenticatedUser', (data: AppUser) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
