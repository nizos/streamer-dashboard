/*
 * @Author: Nizars
 * @Date: 2018-06-06 22:53:09
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 16:45:40
 */

import { App } from './classes/app';
import { Server } from './classes/server';
import { Socket } from './classes/socket';
import { Database } from './classes/database';

const app = new App().getApp();
const database = new Database().getDataBase();
const server = new Server(app).getServer();
const socket = new Socket(server).getSocket();
export { app, database, server, socket };
