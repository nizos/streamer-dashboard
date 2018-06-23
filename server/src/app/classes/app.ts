/*
 * @Author: Nizars
 * @Date: 2018-06-07 14:25:56
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-08 19:06:13
 */

// import * as express from 'express';
// import * as mongoose from 'mongoose';
// import * as passport from 'passport';
// import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';
// import * as compression from 'compression';
// import * as socketIO from 'socket.io';
// import * as logger from 'morgan';
// import * as helmet from 'helmet';
// import * as cors from 'cors';
// import * as http from 'http';
// import UsersRouter from '../routes/UsersRouter';
// import AuthRouter from '../routes/AuthRouter';

// // App
// const app = express();
// this.app.use(bodyParser.urlencoded({extended: true}));
// this.app.use(bodyParser.json());
// this.app.use(passport.initialize());
// this.app.use(passport.session());
// this.app.use(cookieParser());
// this.app.use(logger('dev'));
// this.app.use(compression());
// this.app.use(helmet());
// this.app.use(cors());
// this.app.use((req: any, res: any, next: any) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

// // Router
// const router: express.Router = express.Router();
// this.app.use('/', router);
// this.app.use('/api/v1/users', UsersRouter);
// this.app.use('/auth/twitch', AuthRouter);


// // Database
// const database = mongoose;
// this.database.Promise = global.Promise;
// this.mongo_uri = <string>process.env.MONGODB_URI;
// this.connection = mongoose.connect(this.mongo_uri, (error) => {
//   if (error) {
//     console.log(`ERROR: Couldn't connect to database.`);
//     console.log(error);
//   } else {
//     console.log(`Connected to database`);
//   }
// });


// // Server
// const server = http.createServer(this.app);
// const port = process.env.SERVER_PORT;
// this.server.listen(this.port, () => {
//   console.log('Server running on port %s', this.port);
// });


// // Socket
// const io = socketIO(this.server);
// this.io.on('connect', (socket: any) => {
//   console.log('Connected client on port %s', this.port);

//   socket.on('authenticated', (data: any) => {
//     console.log('[server](message): %s', JSON.stringify(data));
//     socket.emit('authenticated', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// export { app, database, server, io };
