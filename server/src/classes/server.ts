/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:13:06
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 14:54:35
 */

import * as express from 'express';
import * as http from 'http';

export class Server {

  public static readonly PORT: number = 8080;
  private server: http.Server;
  private port: string | number;

  constructor(app: express.Application) {
    this.create(app);
    this.config();
    this.listen();
  }

  // Create server
  private create(app: express.Application): void {{
    this.server = http.createServer(app);
  }}

  // Configure server
  private config(): void {
    this.port = process.env.SERVER_PORT;
  }

  // Listen
  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Server running on port %s', this.port);
    });
  }

  // Export
  public getServer(): http.Server {
    return this.server;
  }
}

