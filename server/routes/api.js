/*
 * @Author: Nizars
 * @Date: 2018-05-27 09:19:52
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 06:30:36
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
const twitchGetUser     = require('../Twitch/helpers/getUsers');


// GET a user by ID
router.get('/user/:userId', async (req, res) => {
    console.log('CALLED: function router.get(/user/userId, (req, res) in API.JS');
    var userId = req.params.userId;
    var result = await twitchGetUser.SingleUserById(userId);
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
