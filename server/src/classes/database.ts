/*
 * @Author: Nizars
 * @Date: 2018-06-07 13:42:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 14:53:39
 */

import * as mongoose from 'mongoose';

export class Database {
  private mongo_uri: string;
  private database: typeof mongoose;
  private connection: Promise<typeof mongoose>;

  constructor() {
    this.create();
    this.config();
    this.connect();
  }

  // Create Database
  private create(): void {{
    this.database = mongoose;
  }}

  // Configure Database
  private config(): void {{
    this.database.Promise = global.Promise;
    this.mongo_uri = <string>process.env.MONGODB_URI;
  }}

  // Connect Database
  private connect(): void {{
    this.connection = mongoose.connect(this.mongo_uri, (error) => {
      if (error) {
        console.log(`ERROR: Couldn't connect to database.`);
        console.log(error);
      } else {
        console.log(`Connected to database`);
      }
    });
  }}

  // Export
  public getDataBase(): any {
    return this.database;
  }
}
