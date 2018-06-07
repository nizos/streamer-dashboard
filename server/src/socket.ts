/*
 * @Author: Nizars
 * @Date: 2018-06-07 13:42:15
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 13:46:49
 */

import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport';
import * as OAuth2Strategy from 'passport-oauth2';
import * as request from 'request';
import * as handlebars from 'handlebars';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as socketIo from 'socket.io';
import * as http from 'http';
import * as cors from 'cors';
import * as path from 'path';
import * as debug from 'debug';

import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

import UsersRouter from './routes/UsersRouter';
import AuthRouter from './routes/AuthRouter';

import { User } from './models/User';

export class Socket {

  public static readonly PORT: number = 8080;
  private app: express.Application;
  private appServer: http.Server;
  public socket: SocketIO.Server;
  private port: string | number;

  constructor() {
    this.create();
    this.config();
    this.listen();
  }

  // Create socket
  private create(): void {{
    this.socket = socketIo(this.appServer);
  }}

  // Configure socket
  private config(): void {{
    this.socket = socketIo(this.appServer);
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
