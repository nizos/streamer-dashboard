/*
 * @Author: Nizars
 * @Date: 2018-05-27 12:15:54
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 15:25:10
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const express           = require('express');
const session           = require('express-session');
const passport          = require('passport');
const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const request           = require('request');
const bodyParser        = require('body-parser');
const jwt               = require('jsonwebtoken');
const http              = require('http');
const cors              = require('cors');
const path              = require('path');
const status            = require('http-status');
const dbRegistrer       = require('../data/helpers/dbRegistrer');
const dbGetter          = require('../data/helpers/dbGetter');
const dbSetter          = require('../data/helpers/dbSetter');

// Initialize Express and middlewares
const app               = express();
const twitchAPI         = express.Router();

// Setup Express
twitchAPI.use(session({
  secret: process.env.TWITCH_SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
twitchAPI.use(cors());
twitchAPI.use(bodyParser.json());
twitchAPI.use(bodyParser.urlencoded({ extended: false }));
twitchAPI.use(express.static('public'));
twitchAPI.use(passport.initialize());
twitchAPI.use(passport.session());

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
twitchAPI.get('/login', async (req, res) => {
  console.log('twitchAPI: twitchAPI.get(/login)');
  // var idToken = await dbGetter.getJWTIdToken(116069219);

  if (req.session && req.session.passport && req.session.passport.user) {
    console.log('twitchAPI req.session demands passed');
    let token = await dbGetter.getJWTIdToken(116069219);
    console.log('twitchAPI responding with token:');
    console.log(token);
    res.status(200).send({token});
  } else {

    res.redirect('http://localhost:3000/auth/twitch');
}
});

// Set route to start OAuth link, this is where you define scopes to request
twitchAPI.get('/twitch', (req, res) => passport.authenticate('twitch', { 
  scope: 'bits:read clips:edit user:edit user:read:email openid'
})(req, res));

// Set route for OAuth redirect
twitchAPI.get('/twitch/callback', (req, res) => passport.authenticate('twitch', {
  successRedirect: '/auth/login',
  failureRedirect: '/auth/login'
})(req, res));

// Passport
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
  console.log('twitchAPI: passport.user called');
  const decoded = jwt.decode(id_token.id_token, {complete: true});
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
  console.log(appUserData);
  done(null, profile);
}));

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
      console.log('twitchAPI: status code 200');
      done(null, JSON.parse(body));
    } else {
      console.log('twitchAPI: status code !200');
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

module.exports = twitchAPI;
