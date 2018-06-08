/*
 * @Author: Nizars
 * @Date: 2018-06-07 14:25:56
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 16:47:40
 */

import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as path from 'path';

import UsersRouter from '../routes/UsersRouter';
import AuthRouter from '../routes/AuthRouter';

export class App {
  private app: express.Application;

  constructor() {
    this.create();
    this.config();
    this.routes();
  }

  // Create App
  private create(): void {{
    this.app = express();
  }}

  // Configure App
  private config(): void {{
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
  }}

  // Set routes
  private routes(): void {{
    const router: express.Router = express.Router();
    this.app.use('/', router);
    this.app.use('/api/v1/users', UsersRouter);
    this.app.use('/auth/twitch', AuthRouter);
  }}

  // Export
  public getApp(): express.Application {
    return this.app;
  }
}
