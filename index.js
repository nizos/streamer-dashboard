/*
 * @Author: Nizars
 * @Date: 2018-05-27 09:19:35
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 09:46:29
 */

 // Import environment keys and values
 require('dotenv').config();

 // Import dependancies and modules
const express           = require('express');
const session           = require('express-session');
const passport          = require('passport');
const api               = require('./server/routes/api');
const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const AppUser           = require('./server/models/appUser');
const findOrCreate      = require('mongoose-findorcreate');
const request           = require('request');
const handlebars        = require('handlebars');
const bodyParser        = require('body-parser');
const jwt               = require('jsonwebtoken');
const mongoose          = require('mongoose');
const http              = require('http');
const cors              = require('cors');
const path              = require('path');
const dbRegistrer       = require('./server/data/helpers/dbRegistrer');
const dbGetter          = require('./server/data/helpers/dbGetter');

// Initialize Express and middlewares
const app               = express();
const router            = express.Router();
const server            = http.createServer(app);
const io                = require('socket.io').listen(server);

// Setup Express
app.use(session({
    secret: process.env.TWITCH_SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
    if (req.session && req.session.passport && req.session.passport.user) {
        res.sendFile(path.resolve('src/index.html'));
    } else {
        res.send('<html><head><title>Twitch Auth Sample</title></head><a href="/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>');
    }
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);


// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Server running on localhost:${port}`));

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
    authorizationURL: process.env.TWITCH_AUTHORIZE_URL,
    tokenURL: process.env.TWITCH_REFRESH_URL,
    clientID: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_SECRET,
    callbackURL: process.env.TWITCH_REDIRECT_URI,
    state: true
    },
    function (accessToken, refreshToken, id_token, profile, done) {
        // get the decoded payload and header
        const decoded = jwt.decode(id_token.id_token, {complete: true});

        // console log
        console.log('====================================');
        console.log('CALLED: passport.use(twitch, new OAuth2Strategy() from INDEX.JS');
        console.log('id: '+profile.data[0].id);
        console.log('login: '+profile.data[0].login);
        console.log('display_name: '+profile.data[0].display_name);
        console.log('type: '+profile.data[0].type);
        console.log('broadcaster_type: '+profile.data[0].broadcaster_type);
        console.log('description: '+profile.data[0].description);
        console.log('profile_image_url: '+profile.data[0].profile_image_url);
        console.log('offline_image_url: '+profile.data[0].offline_image_url);
        console.log('view_count: '+profile.data[0].view_count);
        console.log('email: '+profile.data[0].email);
        console.log('AccessToken: '+accessToken);
        console.log('RefreshToken: '+refreshToken);
        console.log('====================================');
        // Prepare AppUserData
        const appUserData = {
            id                              : profile.data[0].id,
            login                           : profile.data[0].login,
            display_name                    : profile.data[0].display_name,
            preferred_username              : decoded.payload.preferred_username,
            type                            : profile.data[0].type,
            broadcaster_type                : profile.data[0].broadcaster_type,
            description                     : profile.data[0].description,
            profile_image_url               : profile.data[0].profile_image_url,
            offline_image_url               : profile.data[0].offline_image_url,
            view_count                      : profile.data[0].view_count,
            email                           : profile.data[0].email,
            client_id                       : process.env.TWITCH_CLIENT_ID,
            redirect_uri                    : process.env.TWITCH_REDIRECT_URI,
            response_type                   : process.env.TWITCH_RES,
            access_token                    : id_token.access_token,
            refresh_token                   : refreshToken,
            expires_in                      : id_token.expires_in,
            id_token                        : id_token.id_token,
            scope                           : id_token.scope,
            alg                             : decoded.header.alg,
            typ                             : decoded.header.typ,
            kid                             : decoded.header.kid,
            aud                             : decoded.payload.aud,
            exp                             : decoded.payload.exp,
            iat                             : decoded.payload.iat,
            iss                             : decoded.payload.iss,
            sub                             : decoded.payload.sub,
            azp                             : decoded.payload.azp,
            created_at                      : Date.now(),
            updated_at                      : Date.now(),
        };

        // Register App User to database
        dbRegistrer.registerAppUser(appUserData);
        done(null, profile);
    }
));

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
    const options = {
        url: `${process.env.TWITCH_API_URL}users?id=${process.env.TWITCH_USER_ID}`,
        method: 'GET',
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': 'Bearer ' + accessToken
        }
    };
    request(options, (error, response, body) => {
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
