// Define our dependencies
const express          = require('express');
const session          = require('express-session');
const passport         = require('passport');
const OAuth2Strategy   = require('passport-oauth').OAuth2Strategy;
const request          = require('request');
const handlebars       = require('handlebars');
const bodyParser       = require('body-parser');
const jwt              = require('jsonwebtoken');
const mongoose         = require('mongoose');
const cors             = require('cors');
const User             = require('../models/clientUser');

// Define our constants
const TWITCH_CLIENT_ID = '64yjyuw2d5wjq45su6usd4s8micmnj';
const TWITCH_SECRET    = '03dm71bp4ok4jty86vuy0q57esbuix';
const SESSION_SECRET   = 'Q5rS_q#(LNJ^&7c~f4+.SbBmX|md';
const CALLBACK_URL     = 'http://localhost:3000/auth/twitch/callback';
const PORT             = 3000;

// Database
const DATABASE = 'mongodb://StreamerDashboardDBAdmin:OKGJbhny35xaixbB7mklQhBT56TE@ds117960.mlab.com:17960/streamerdashboarddb';
var _accessToken = '';
var _refreshToken = '';


// Initialize Express and middlewares
const app       = express();
const router    = express.Router();

// Setup Express
app.use(session({secret: SESSION_SECRET, resave: false, saveUninitialized: false}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(DATABASE, err => {
    if(err) {
        console.log('Error! ' + err);
    } else {
        console.log('Connected to mongodb');
    }
});

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
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
}

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

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
    _accessToken = accessToken;
    _refreshToken = refreshToken;
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


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretkey');
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

router.get('/', (req, res) => {
    res.send('From API route');
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if(error) {
            console.log('Error! ' + error);
        } else {
            let payload = {subject: registeredUser._id};
            let token = jwt.sign(payload, 'secretkey');
            res.status(200).send({token});
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log('Error! ' + error);
        } else {
            if(!user) {
                res.status(401).send('Invalid email');
            } else {
                if(user.password !== userData.password) {
                    res.status(401).send('Invalid password');
                } else {
                    let payload = {subject: user._id};
                    let token = jwt.sign(payload, 'secretkey');
                    res.status(200).send({token});
                }
            }
        }
    })
});

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ];
    res.json(events);
});

router.get('/special', verifyToken, (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ];
    res.json(events);
});

router.get('/users/:id', (req, res) => {
    console.log('req.param.id: ' + req.param.id);
    var options = {
        url: `https://api.twitch.tv/helix/users?id=${req.param.id}`,
        method: 'GET',
        headers: {
          'Client-ID': TWITCH_CLIENT_ID,
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + _accessToken
        }
    };
    request(options, function (error, response, body) {
        console.log('options: ');
        console.log(options);
        console.log('error: ');
        console.log(error);
        // console.log('response: ');
        // console.log(response);
        console.log('body: ');
        console.log(body);
        console.log(JSON.parse(body));
        console.log(body.data);
    
        if (response && response.statusCode == 200) {
            let user = JSON.parse(body);
            res.json(user);
        } else {
            let user = JSON.parse(body);
            res.json(user);
        }
      });
});

module.exports = router;