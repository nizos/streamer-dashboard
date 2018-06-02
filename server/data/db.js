/*
 * @Author: Nizars
 * @Date: 2018-05-27 10:27:09
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 16:09:01
 */

// Import the env variables
require('dotenv').config();

// Import the required modules
const database          = require('mongoose');
const AppUser           = require('../models/appUser');

// Set up default mongoose connection
const mongoDB = process.env.DATABASE_FULL_URL;

// Get Mongoose to use the global promise library
database.Promise = global.Promise;

// Connect to database
database.connect(mongoDB, function(err){
  if(err){
      console.error('Error! ' + err)
  } else {
    console.log('Connected to mongodb')      
  }
});

// Get the default connection
const db = database.connection;

// Bind connection to error event to get notifications of connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = database;
