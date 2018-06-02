import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  // The client instance of socket.io
  private socket: SocketIOClient.Socket;

  // Constructor with an injection of ToastService
  constructor() {
    // this.socket = io();
  }
}
