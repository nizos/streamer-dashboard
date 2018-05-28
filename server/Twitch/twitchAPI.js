/*
 * @Author: Nizars
 * @Date: 2018-05-27 12:15:54
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 12:52:39
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const express           = require('express');
const session           = require('express-session');
const passport          = require('passport');
const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const ApptUser          = require('../models/appUser');
const findOrCreate      = require('mongoose-findorcreate');
const request           = require('request');
const handlebars        = require('handlebars');
const bodyParser        = require('body-parser');
const jwt               = require('jsonwebtoken');
const mongoose          = require('mongoose');
const http              = require('http');
const cors              = require('cors');
const path              = require('path');
const dbRegistrer       = require('../data/helpers/dbRegistrer');
const dbGetter          = require('../data/helpers/dbGetter');
const dbSetter          = require('../data/helpers/dbSetter');
const router            = express.Router();
const status            = require('http-status');
const twitchAPI;


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
        done(null, profile);
    }
));


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
