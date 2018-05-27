/*
 * @Author: Nizars
 * @Date: 2018-05-27 09:19:52
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 09:36:06
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
const router            = express.Router();
var status              = require('http-status');


function getCredentials(userId) {
    console.log('====================================');
    console.log('CALLED: function getCredentials(userId) in API.JS');

    // var result = await dbRegistrer.getAppUserProfile(userId);

    var _accessToken = '';
    // find clientUser with id matching userId, selecting the 'accessToken' field
    ClientUser.findOne({ 'id': userId }, 'accessToken', function (err, accessToken) {
        if (err) {
            // console log error
            console.log(`Error: from getCredentials(`+userId+`); in api.js`);
            console.log(`Couldn't find entry with id: `+userId+` in database.`);
            console.log(err);
        } else {
            console.log(`Success: found clientUser with id:`+userId+` in database.`);
            console.log(`clientUser has accessToken: `+accessToken+`.`);
            _accessToken = accessToken;
        }
    });
    console.log('====================================');
    return _accessToken;
}

// TODO: checkCredentials
function checkCredentials() {

}

// TODO: refreshCredentials
function refreshCredentials() {

}

// Get User from Twitch
function getUserById(userId, accessToken) {
    console.log('====================================');
    console.log('CALLED: function getUserById(userId, accessToken) in API.JS');
    var options = {
        url: `${process.env.TWITCH_API_URL}users?id=${process.env.TWITCH_USER_ID}`,
        method: 'GET',
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': 'Bearer ' + accessToken
        }
    };
    var userFound = {
        id: 'id',
        login: 'login',
        display_name: 'display_name',
        type: 'type',
        broadcaster_type: 'broadcaster_type',
        description: 'description',
        profile_image_url: 'profile_image_url',
        offline_image_url: 'offline_image_url',
        view_count: 'view_count',
        email: 'email'
    };
    request(options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            var result = JSON.parse(body);
            userFound = {
                id: result.data[0].id,
                login: result.data[0].login,
                display_name: result.data[0].display_name,
                type: result.data[0].type,
                broadcaster_type: result.data[0].broadcaster_type,
                description: result.data[0].description,
                profile_image_url: result.data[0].profile_image_url,
                offline_image_url: result.data[0].offline_image_url,
                view_count: result.data[0].view_count,
                email: result.data[0].email
            };
            // console log result
            console.log('====================================');
            console.log('SUCCESS: response & response.statusCode == 200');
            console.log('id: '+userFound.id);
            console.log('login: '+userFound.login);
            console.log('display_name: '+userFound.display_name);
            console.log('type: '+userFound.type);
            console.log('broadcaster_type: '+userFound.broadcaster_type);
            console.log('description: '+userFound.description);
            console.log('profile_image_url: '+userFound.profile_image_url);
            console.log('offline_image_url: '+userFound.offline_image_url);
            console.log('view_count: '+userFound.view_count);
            console.log('email: '+userFound.email);
            console.log('====================================');
            return JSON.stringify(userFound);

        } else {
            console.log('====================================');
            console.log('ERROR: in function getUserById(userId, accessToken) in API.JS');
            console.log('response && response.statusCode !== 200!');
            console.log('Could be an error:');
            console.log(error);
            console.log('id: '+userFound.id);
            console.log('login: '+userFound.login);
            console.log('display_name: '+userFound.display_name);
            console.log('type: '+userFound.type);
            console.log('broadcaster_type: '+userFound.broadcaster_type);
            console.log('description: '+userFound.description);
            console.log('profile_image_url: '+userFound.profile_image_url);
            console.log('offline_image_url: '+userFound.offline_image_url);
            console.log('view_count: '+userFound.view_count);
            console.log('email: '+userFound.email);
            console.log('====================================');
            return JSON.stringify(userFound);
        }
    });
    console.log('====================================');
    return JSON.stringify(userFound);
}



// GET a user by ID.
router.get('/user/:userId', async (req, res) => {
    console.log('====================================');
    console.log('CALLED: function router.get(/user/userId, (req, res) in API.JS');
    var userId = req.params.userId;
    var result = await dbGetter.getAppUserProfile(userId);
    userFound = {
        id: result.id,
        login: result.login,
        display_name: result.display_name,
        type: result.type,
        broadcaster_type: result.broadcaster_type,
        description: result.description,
        profile_image_url: result.profile_image_url,
        offline_image_url: result.offline_image_url,
        view_count: result.view_count,
        email: result.email
    };
    console.log('userFound: ');
    console.log(userFound);
    res.status(status.OK).json(userFound);
    // var _accessToken = getCredentials(userId);

    // var _accessToken = '';
    // // find clientUser with id matching userId, selecting the 'accessToken' field
    // ClientUser.findOne({ 'id': userId }, 'accessToken', function (err, accessToken) {
    //     if (err) {
    //         // console log error
    //         console.log(`Error: from getCredentials(`+userId+`); in api.js`);
    //         console.log(`Couldn't find entry with id: `+userId+` in database.`);
    //         console.log(err);
    //     } else {
    //         console.log(`Success: found clientUser with id:`+userId+` in database.`);
    //         console.log(`clientUser has accessToken: `+accessToken+`.`);
    //         _accessToken = accessToken;
    //     }
    // });
    console.log('====================================');


    // Get User from Twitch
    // console.log('====================================');
    // console.log('CALLED: function getUserById(userId, accessToken) in API.JS');
    // var options = {
    //     url: 'https://api.twitch.tv/helix/users?id='+userId,
    //     method: 'GET',
    //     headers: {
    //         'Client-ID': TWITCH_CLIENT_ID,
    //         'Accept': 'application/vnd.twitchtv.v5+json',
    //         'Authorization': 'Bearer ' + _accessToken
    //     }
    // };
    // var userFound = {
    //     id: 'id information',
    //     login: 'login information',
    //     display_name: 'display name information',
    //     type: 'type information',
    //     broadcaster_type: 'broadcaster type information',
    //     description: 'description information',
    //     profile_image_url: 'profile image url',
    //     offline_image_url: 'offline image url',
    //     view_count: 'view count information',
    //     email: 'email information'
    // };
    // request(options, function (error, response, body) {
    //     if (response && response.statusCode == 200) {
    //         var result = JSON.parse(body);
    //         userFound = {
    //             id: result.data[0].id,
    //             login: result.data[0].login,
    //             display_name: result.data[0].display_name,
    //             type: result.data[0].type,
    //             broadcaster_type: result.data[0].broadcaster_type,
    //             description: result.data[0].description,
    //             profile_image_url: result.data[0].profile_image_url,
    //             offline_image_url: result.data[0].offline_image_url,
    //             view_count: result.data[0].view_count,
    //             email: result.data[0].email
    //         };
    //         // console log result
    //         console.log('====================================');
    //         console.log('SUCCESS: response & response.statusCode == 200');
    //         console.log('id: '+userFound.id);
    //         console.log('login: '+userFound.login);
    //         console.log('display_name: '+userFound.display_name);
    //         console.log('type: '+userFound.type);
    //         console.log('broadcaster_type: '+userFound.broadcaster_type);
    //         console.log('description: '+userFound.description);
    //         console.log('profile_image_url: '+userFound.profile_image_url);
    //         console.log('offline_image_url: '+userFound.offline_image_url);
    //         console.log('view_count: '+userFound.view_count);
    //         console.log('email: '+userFound.email);
    //         console.log('====================================');
    //         res.status(status.OK).json(userFound);
    //     }
    // });
});



















    // var userFound = {
    //     id: 'id',
    //     login: 'login',
    //     display_name: 'display_name',
    //     type: 'type',
    //     broadcaster_type: 'broadcaster_type',
    //     description: 'description',
    //     profile_image_url: 'profile_image_url',
    //     offline_image_url: 'offline_image_url',
    //     view_count: 'view_count',
    //     email: 'email'
    // };
    // userFound = JSON.parse(getUserById(userId, _accessToken));
    // console.log('userFound is: ');
    // console.log(userFound);
    // console.log('id: '+userFound.id);
    // console.log('login: '+userFound.login);
    // console.log('display_name: '+userFound.display_name);
    // console.log('type: '+userFound.type);
    // console.log('broadcaster_type: '+userFound.broadcaster_type);
    // console.log('description: '+userFound.description);
    // console.log('profile_image_url: '+userFound.profile_image_url);
    // console.log('offline_image_url: '+userFound.offline_image_url);
    // console.log('view_count: '+userFound.view_count);
    // console.log('email: '+userFound.email);
    // console.log('====================================');
    // res.status(status.OK).json(userFound);
// });

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


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

module.exports = router;
