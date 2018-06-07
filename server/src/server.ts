/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:13:06
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 04:46:40
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
import * as http from 'http';
import * as cors from 'cors';
import * as path from 'path';

import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

import UsersRouter from './routes/UsersRouter';
import AuthRouter from './routes/AuthRouter';

class Server {

  // Set app to of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  // Application config
  public config(): void {
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

  // Application routes
  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use('/', router);
    this.app.use('/api/v1/users', UsersRouter);
    this.app.use('/auth/twitch', AuthRouter);
  }
}

// export
export default new Server().app;
