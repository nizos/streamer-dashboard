/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:13:06
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 13:48:28
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

export class AppServer {

  public static readonly PORT: number = 8080;
  private app: express.Application;
  private appServer: http.Server;
  public io: SocketIO.Server;
  private port: string | number;

  constructor() {
    this.createApp();
    this.configApp();
    this.createServer();
    this.sockets();
    this.routes();
    this.listen();
  }

  // Create App
  private createApp(): void {{
    this.app = express();
  }}

  // Configure App
  private configApp(): void {
    this.port = process.env.SERVER_PORT;
    const MONGO_URI: string = <string>process.env.MONGODB_URI;
    mongoose.connect(MONGO_URI);

    // Express middleware
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

    // cors
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  // Create server
  private createServer(): void {
    this.appServer = http.createServer(this.app);
  }

  // Sockets
  private sockets(): void {
    this.io = socketIo(this.appServer);
  }

  // Application routes
  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use('/', router);
    this.app.use('/api/v1/users', UsersRouter);
    this.app.use('/auth/twitch', AuthRouter);
  }

  // Listen
  private listen(): void {
    this.appServer.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s', this.port);

      socket.on('authenticated', (newUser: User) => {
        console.log('[server](message): %s', JSON.stringify(newUser));
        this.io.emit('authenticated', newUser);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  // Export
  public getApp(): express.Application {
    return this.app;
  }
}

