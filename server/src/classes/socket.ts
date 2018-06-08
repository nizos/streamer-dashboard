/*
 * @Author: Nizars
 * @Date: 2018-06-07 13:42:15
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-08 19:06:30
 */

// import * as socketIO from 'socket.io';
// import * as http from 'http';
// import { User } from '../models/User';

// export class Socket {
//   private io: SocketIO.Server;
//   private port: string | number;

//   constructor(server: http.Server) {
//     this.create(server);
//     this.config();
//     this.listen();
//   }

//   // Create socket
//   private create(server: http.Server): void {{
//     this.io = socketIO(server);
//   }}

//   // Configure socket
//   private config(): void {{
//     this.port = process.env.SERVER_PORT;
//   }}

//   // Listen
//   private listen(): void {{
//     this.io.on('connect', (socket: any) => {
//       console.log('Connected client on port %s', this.port);

//       socket.on('authenticated', (data: any) => {
//         console.log('[server](message): %s', JSON.stringify(data));
//         socket.emit('authenticated', data);
//       });

//       socket.on('disconnect', () => {
//         console.log('Client disconnected');
//       });
//     });
//   }}

//   // Export
//   public getSocket(): SocketIO.Server {
//     return this.io;
//   }
// }
