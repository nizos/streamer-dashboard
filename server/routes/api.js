/*jshint esversion: 6 */
const DATABASE          = 'mongodb://StreamerDashboardDBAdmin:OKGJbhny35xaixbB7mklQhBT56TE@ds117960.mlab.com:17960/streamerdashboarddb';
const TWITCH_CLIENT_ID  = '64yjyuw2d5wjq45su6usd4s8micmnj';
const express           = require('express');
const router            = express.Router();
const findOrCreate      = require('mongoose-findorcreate');
var status              = require('http-status');
var mongoose            = require('mongoose');
var ClientUser          = require('../models/clientUser');
var User                = require('../models/user');
const request           = require('request');

mongoose.connect(DATABASE, err => {
    if(err) {
        console.log('Error! mongoose.connect() in api.js: ' + err);
    } else {
        console.log('API connected to mongodb');
    }
});

function getCredentials(userId) {
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
    var user;
    var options = {
        url: 'https://api.twitch.tv/helix/users?id='+userId,
        method: 'GET',
        headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': 'Bearer ' + accessToken
        }
    };
    request(options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            var result = JSON.parse(body);

            // console log result
            console.log('Success: response & response.statusCode == 200');
            console.log('result:');
            console.log(result.data[0].id);
            console.log('login:');
            console.log(result.data[0].login);
            console.log('display_name:');
            console.log(result.data[0].display_name);
            console.log('type:');
            console.log(result.data[0].type);
            console.log('broadcaster_type:');
            console.log(result.data[0].broadcaster_type);
            console.log('description:');
            console.log(result.data[0].description);
            console.log('profile_image_url:');
            console.log(result.data[0].profile_image_url);
            console.log('offline_image_url:');
            console.log(result.data[0].offline_image_url);
            console.log('view_count:');
            console.log(result.data[0].view_count);
            console.log('email:');
            console.log(result.data[0].email);



            user = new User({
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
            });
        } else {
        }
    });
    return user;
}



// GET a user by ID.
router.get('/user/:userId', (req, res) => {
    var userId = req.params.userId;
    var _accessToken = getCredentials(userId);

    // Check if accessToken is valid
        // If not refresh and update databse entry

    // Use accessToken to make Twitch Request
    var userFound = getUserById(userId, _accessToken);
    if(userFound !== null) {
        res.status(status.OK).send(userFound);
    } else {
        return res.status(status.NOT_FOUND).send({ message: 'User Id is invalid' });
    }
    res.status(status.OK).send(userFound);
});

module.exports = router;
