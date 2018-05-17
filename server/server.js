// Define our dependencies
const express           = require('express');
const session           = require('express-session');
const passport          = require('passport');
const api               = require('./routes/api');
const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const User              = require('./models/clientUser');
const request           = require('request');
const handlebars        = require('handlebars');
const bodyParser        = require('body-parser');
const jwt               = require('jsonwebtoken');
const mongoose          = require('mongoose');
const http              = require('http');
const cors              = require('cors');
const path              = require('path');

// Define our constants
const TWITCH_CLIENT_ID  = '64yjyuw2d5wjq45su6usd4s8micmnj';
const TWITCH_SECRET     = '03dm71bp4ok4jty86vuy0q57esbuix';
const SESSION_SECRET    = 'Q5rS_q#(LNJ^&7c~f4+.SbBmX|md';
const CALLBACK_URL      = 'http://localhost:3000/auth/twitch/callback';
const DATABASE          = 'mongodb://StreamerDashboardDBAdmin:OKGJbhny35xaixbB7mklQhBT56TE@ds117960.mlab.com:17960/streamerdashboarddb';
const port              = process.env.PORT || 3000;

// Define our variables

var _accessToken        = '';
var _refreshToken       = '';
var users               = [];
var connections         = [];

// Initialize Express and middlewares
const app               = express();
const router            = express.Router();
const server            = require('http').createServer(app);
const io                = require('socket.io').listen(server);

// Setup Express
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

// Set our api routes and port
app.use('/api', api);
app.set('port', port);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    if (req.session && req.session.passport && req.session.passport.user) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    } else {
        res.send('<html><head><title>Twitch Auth Sample</title></head><a href="/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>');
    }
});

// Set route to start OAuth link, this is where you define scopes to request
app.get('/auth/twitch', passport.authenticate('twitch', {
    scope: 'analytics:read:games bits:read clips:edit user:edit user:read:email openid'
}));
  
// Set route for OAuth redirect
app.get('/auth/twitch/callback', passport.authenticate('twitch', {
    successRedirect: '/',
    failureRedirect: '/'
}));

// Socket events
io.sockets.on('connection', function(socket) {
    console.log('Socket connected');

    // Socket event for clientUser created
    socket.on('clientUserSaved', function(clientUserSaved) {
        io.emit('clientUserSaved', clientUserSaved);
    });

    // Socket event for clientUser updated
    socket.on('clientUserUpdated', function(clientUserUpdated) {
        io.emit('clientUserUpdated', clientUserUpdated);
    });
});

passport.use('twitch', new OAuth2Strategy( {
    authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
    tokenURL: 'https://id.twitch.tv/oauth2/token',
    clientID: TWITCH_CLIENT_ID,
    clientSecret: TWITCH_SECRET,
    callbackURL: CALLBACK_URL,
    state: true
    },
    function (accessToken, refreshToken, profile, done) {
        profile.accessToken = accessToken;
        profile.refreshToken = refreshToken;
        _accessToken = accessToken;
        _refreshToken = refreshToken;
        done(null, profile);
    }
));

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = function (accessToken, done) {
    var options = {
        url: 'https://api.twitch.tv/helix/users?id=116069219',
        method: 'GET',
        headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': 'Bearer ' + _accessToken
        }
    };
    request(options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            done(null, JSON.parse(body));
        } else {
            done(JSON.parse(body));
        }
    });
};

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));