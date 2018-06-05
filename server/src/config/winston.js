/*
 * @Author: Nizars
 * @Date: 2018-05-27 10:27:19
 * @Last Modified by:   Nizars
 * @Last Modified time: 2018-05-27 10:27:19
 */

// Import the required modules
var appRoot = require('app-root-path');
var winston = require('winston');

// Define custom logging level priorities
var customLevels = {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
};

// Define custom logging colors
var customColors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    verbose: 'white',
    debug: 'blue',
    silly: 'gray'
};

// define the custom settings for each transport (file, console)
var options = {
    file: {
        level: 'info',
        levels: customLevels,
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'silly',
        levels: customLevels,
        colors: customColors,
        handleExceptions: true,
        json: false,
        prettyPrint: true,
        colorize: true,
    },
};



// instantiate a new Winston Logger with the settings defined above
var logger = new winston.Logger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function (message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};

module.exports = logger;
