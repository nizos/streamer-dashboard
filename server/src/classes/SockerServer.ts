/*
 * @Author: Nizars
 * @Date: 2018-06-05 23:24:40
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 23:24:40
 */


import Server from './Server';
import * as io from 'socket.io';

class SocketServer extends Server {

  /* this.server of a parent Server class is protected property, so we can access it to add a socket.  */
  private socketServer = io(this.server);

  constructor(public port: number) {
    super(port);
    this.socketServer.on('connection', () => {
      console.log('New connection established');
    });

  }
}
export default SocketServer;
