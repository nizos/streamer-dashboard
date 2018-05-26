// Import the env variables
require('dotenv').config();

// Import the required modules
require('dotenv').config();
const database          = require('mongoose');
const AppUser           = require('../models/appUser');

// Set up default mongoose connection
const mongoDB = process.env.DATABASE_FULL_URL;
database.connect(mongoDB);

// Get Mongoose to use the global promise library
database.Promise = global.Promise;

// Get the default connection
const db = database.connection;

// Bind connection to error event to get notifications of connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = database;
