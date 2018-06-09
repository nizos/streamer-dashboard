/*
 * @Author: Nizars
 * @Date: 2018-06-02 18:57:13
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 05:52:30
 */

import { Component } from '@angular/core';
import { SocketService } from './socket/socket.service';
import { Event } from './shared/models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private socketService: SocketService, private router: Router) {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.socketService.onAuthenticated()
      .subscribe((token: string) => {
        console.log('Authenticated!');
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('Connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('Disconnected');
      });
  }
}
