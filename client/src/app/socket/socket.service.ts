/*
 * @Author: Nizars
 * @Date: 2018-06-05 02:13:35
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-08 20:30:58
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Event } from '../shared/models/event';
import { User } from '../shared/models/user';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Injectable()
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public onAuthenticated(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('authenticated', (token: string) =>
        observer.next(token));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
