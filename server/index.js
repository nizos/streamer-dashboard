// Define our dependencies
var express        = require('express');
var session        = require('express-session');
var passport       = require('passport');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var request        = require('request');
var handlebars     = require('handlebars');
const jwt          = require('jsonwebtoken');
const mongoose     = require('mongoose');
const cors         = require('cors');

// MODELS
const ClientUser   = require('./models/clientUser');

// Define our constants, you will change these with your own
const TWITCH_CLIENT_ID = '64yjyuw2d5wjq45su6usd4s8micmnj';
const TWITCH_SECRET    = '03dm71bp4ok4jty86vuy0q57esbuix';
const SESSION_SECRET   = 'Q5rS_q#(LNJ^&7c~f4+.SbBmX|md';
const CALLBACK_URL     = 'http://localhost:3000/auth/twitch/callback';  // You can run locally with - http://localhost:3000/auth/twitch/callback
const DATABASE         = 'mongodb://StreamerDashboardDBAdmin:OKGJbhny35xaixbB7mklQhBT56TE@ds117960.mlab.com:17960/streamerdashboarddb';

// Initialize Express and middlewares
var app       = express();
const router  = express.Router();

mongoose.connect(DATABASE, err => {
  if(err) {
      console.log('Error! ' + err);
  } else {
      console.log('Connected to mongodb');
  }
});

app.use(session({secret: SESSION_SECRET, resave: false, saveUninitialized: false}));
app.use(cors());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
  var options = {
    url: 'https://api.twitch.tv/helix/user',
    method: 'GET',
    headers: {
      'Client-ID': TWITCH_CLIENT_ID,
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Authorization': 'Bearer ' + accessToken
    }
  };
  request(options, function (error, response, body) {

    console.log('options: ');
    console.log(options);
    console.log('error: ');
    console.log(error);
    console.log('response: ');
    console.log(response);
    console.log('body: ');
    console.log(body);


    if (response && response.statusCode == 200) {
      done(null, JSON.parse(body));
    } else {
      done(JSON.parse(body));
    }
  });
}

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

var userData = {};
passport.use('twitch', new OAuth2Strategy({
    authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
    tokenURL: 'https://id.twitch.tv/oauth2/token',
    clientID: TWITCH_CLIENT_ID,
    clientSecret: TWITCH_SECRET,
    callbackURL: CALLBACK_URL,
    state: true
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;

    console.log('Access token: ' + accessToken);
    console.log('Refresh token: ' + refreshToken);
    console.log('Profile: ');
    console.log(profile);
    console.log('Done: ');
    console.log(done);

    // this.userData = profile.data[0];
    // console.log('userData: ');
    // console.log(this.userData);

    // Securely store user profile in your DB
    /* let clientUserData = {
      _id: profile._id,
      accessToken: profile.accessToken,
      refreshToken: profile.refreshToken
    };
    let clientUser = new ClientUser(clientUserData);
    clientUser.save(function(err, clientUser) {

      if(err !== null) {
        console.log('err: ');
        console.log(err);
      }
      if(clientUser !== null) {
        console.log('clientUser: ');
        console.log(clientUser);
      }
        done(err, clientUser);
    }) */
    //  User.findOrCreate(..., function(err, user) {
    //    done(err, user);
    //  });


    // Securely store user profile in your DB
    //User.findOrCreate(..., function(err, user) {
    //  done(err, user);
    //});

    done(null, profile);
  }
));

// Set route to start OAuth link, this is where you define scopes to request
app.get('/auth/twitch', passport.authenticate('twitch', { scope: 'analytics:read:games bits:read clips:edit user:edit user:read:email openid' }));

// Set route for OAuth redirect
app.get('/auth/twitch/callback', passport.authenticate('twitch', { successRedirect: '/', failureRedirect: '/' }));

// Define a simple template to safely generate HTML with values from user's profile
var template = handlebars.compile(`
<html><head><title>Twitch Auth Sample</title></head>
<table>
    <tr><th>Access Token</th><td>{{accessToken}}</td></tr>
    <tr><th>Refresh Token</th><td>{{refreshToken}}</td></tr>
    <tr><th>Display Name</th><td>{{display_name}}</td></tr>
    <tr><th>Bio</th><td>{{bio}}</td></tr>
    <tr><th>Image</th><td>{{logo}}</td></tr>
</table></html>`);

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get('/', function (req, res) {
  if(req.session && req.session.passport && req.session.passport.user) {
    res.send(template(req.session.passport.user));
  } else {
    res.send('<html><head><title>Twitch Auth Sample</title></head><a href="/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>');
  }
});

app.listen(3000, function () {
  console.log('Twitch auth sample listening on port 3000!')
});
