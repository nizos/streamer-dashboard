/*
 * @Author: Nizars
 * @Date: 2018-05-27 09:19:52
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-31 16:54:52
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
const twUsers           = require('../Twitch/helpers/users');


// GET a user by ID
router.get('/userbyid/:userId', async (req, res) => {
    console.log('CALLED: function router.get(/userbyid/userId, (req, res) in API.JS');
    var userId = req.params.userId;
    var result = await twUsers.SingleUserById(userId);
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
    console.log('Result from twitchGetUser.SingleUserById(userId) in api.js:');
    console.log(userFound);
    res.status(status.OK).json(userFound);
});

// GET a user by Login
router.get('/userbylogin/:userLogin', async (req, res) => {
    console.log('CALLED: function router.get(/userbylogin/userLogin, (req, res) in API.JS');
    var userLogin = req.params.userLogin;
    var result = await twUsers.SingleUserByLogin(userLogin);
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
    console.log('Result from twitchGetUser.SingleUserById(userId) in api.js:');
    console.log(userFound);
    res.status(status.OK).json(userFound);
});


module.exports = router;
