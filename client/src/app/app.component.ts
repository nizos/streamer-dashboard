/*
 * @Author: Nizars
 * @Date: 2018-06-02 18:57:13
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 11:11:29
 */

import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service';
import { Event } from './shared/models/event';
import { AppUser } from './shared/models/appUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  ioConnection: any;
  authenticatedUsers: AppUser[] = [];
  constructor(private socketService: SocketService) {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onAuthenticatedUser()
      .subscribe((authenticatedUser: AppUser) => {
        this.authenticatedUsers.push(authenticatedUser);
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
