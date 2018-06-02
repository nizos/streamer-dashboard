/*
 * @Author: Nizars
 * @Date: 2018-05-27 09:19:35
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 16:15:38
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const express           = require('express');
const session           = require('express-session');
const passport          = require('passport');
const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const status            = require('http-status');
const bodyParser        = require('body-parser');
const jwt               = require('jsonwebtoken');
const request           = require('request');
const cors              = require('cors');
const path              = require('path');
const http              = require('http');
const morgan            = require('morgan');
const winston           = require('./config/winston');
const routesAPI         = require('./routes/api');
const dbRegistrer       = require('./data/helpers/dbRegistrer');
const dbGetter          = require('./data/helpers/dbGetter');
const dbSetter          = require('./data/helpers/dbSetter');

// Initialize Express
const app               = express();
const router            = express.Router();

// Inititialize middleware
app.use(session({
  secret: process.env.TWITCH_SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined', { stream: winston.stream }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routesAPI);

// Catch all other routes and return the index file
app.get('/', async (req, res) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    let token = await dbGetter.getJWTIdToken(116069219);
    console.log('twitchAPI responding with token:');
    console.log(token.access_token);
    res.status(200).send({token});

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
      let decoded = jwt.decode(id_token.id_token, {complete: true});
      let appUserData = {
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
      console.log('registering appUserData');
      console.log(appUserData.display_name);
      // Register App User to database
      dbRegistrer.registerAppUser(appUserData);
      done(null, profile);
  }
));

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
  const options = {
      url: `${process.env.TWITCH_API_URL}/users?id=${process.env.TWITCH_USER_ID}`,
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


// Listen on provided port, on all network interfaces.
app.listen(process.env.SERVER_PORT, () => {
  console.log('Magic happening on http://localhost:' + process.env.SERVER_PORT + '/');
});

module.exports = app;
