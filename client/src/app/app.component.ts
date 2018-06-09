/*
 * @Author: Nizars
 * @Date: 2018-06-02 18:57:13
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-08 19:32:12
 */

import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service';
import { Event } from './shared/models/event';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // ioConnection: any;
  // user: User;
  constructor(private socketService: SocketService) {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    // this.ioConnection = this.socketService.onAuthenticated()
    //   .subscribe(() => {
    //   });

    this.socketService.onAuthenticated()
      .subscribe((token: string) => {
        console.log('Authenticated!');
        console.log('token:');
        console.log(token);
        localStorage.setItem('token', token);
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

}
