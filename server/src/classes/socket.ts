/*
 * @Author: Nizars
 * @Date: 2018-06-07 13:42:15
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 14:59:09
 */

import * as socketIo from 'socket.io';
import * as http from 'http';
import { User } from '../models/User';

export class Socket {
  private socket: SocketIO.Server;
  private port: string | number;

  constructor(server: http.Server) {
    this.create(server);
    this.config();
    this.listen();
  }

  // Create socket
  private create(server: http.Server): void {{
    this.socket = socketIo(server);
  }}

  // Configure socket
  private config(): void {{
    this.port = process.env.SERVER_PORT;
  }}

  // Listen
  private listen(): void {{
    this.socket.on('connect', (socket: any) => {
      console.log('Connected client on port %s', this.port);

      socket.on('authenticated', (newUser: User) => {
        console.log('[server](message): %s', JSON.stringify(newUser));
        this.socket.emit('authenticated', newUser);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }}

  // Export
  public getSocket(): SocketIO.Server {
    return this.socket;
  }
}
