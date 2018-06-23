/*
 * @Author: Nizars
 * @Date: 2018-06-06 22:53:09
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-08 20:08:01
 */


import * as express from 'express';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as socketIO from 'socket.io';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as http from 'http';
import UsersRouter from './routes/UsersRouter';
import AuthRouter from './routes/AuthRouter';

// App
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Router
const router: express.Router = express.Router();
app.use('/', router);
app.use('/api/v1/users', UsersRouter);
app.use('/auth/twitch', AuthRouter);


// Database
const database = mongoose;
database.Promise = global.Promise;
const mongo_uri = <string>process.env.MONGODB_URI;
database.connect(mongo_uri, (error) => {
  if (error) {
    console.log(`[DB] [ERROR]: Couldn't connect to database.`);
    console.log(`[DB] [ERROR]: ${error}`);
  } else {
    console.log(`[DB] Successfully connected to database.`);
  }
});
const connection = database.connection;

// Server
const server = http.createServer(app);
const port = process.env.SERVER_PORT;
server.listen(port, () => {
  console.log(`[SV] Magic happening on http://localhost:${port}/`);
});


// Socket
const clients: any[] = [];
const io = socketIO(server);
io.on('connect', (client: any) => {
  console.log(`[IO] Client connected on port ${port}. Id: ${client.id}.`);
  clients.push(client);
  console.log(`[IO] ${clients.length} clients are now connected.`);

  client.on('authenticated', (token: string) => {
    console.log(`[SV] authenticated user.`);
    io.emit('authenticated', token);
  });

  client.on('disconnect', () => {
    console.log(`[IO] Client disconnected on port ${port}. Id: ${client.id}.`);
    clients.splice(client.id);
    console.log(`[IO] ${clients.length} clients are now connected.`);
  });
});



export { app, database, server, io, clients };
