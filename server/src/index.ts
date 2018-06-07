/*
 * @Author: Nizars
 * @Date: 2018-06-06 22:53:09
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 13:20:16
 */

import * as debug from 'debug';
import * as http from 'http';
import { AppServer } from './server';

const app = new AppServer().getApp();
export { app };
