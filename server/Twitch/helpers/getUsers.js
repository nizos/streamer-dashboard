/*
 * @Author: Nizars
 * @Date: 2018-05-27 12:19:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 06:33:26
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
// const twitchAPI             = require('../twitchAPI');
const dbGetter              = require('../../data/helpers/dbGetter');
const request               = require('request');
const async                 = require('async');
const getUsers              = {};
const rp                    = require('request-promise'),
    { to }                  = require('await-to-js');

// Get Single User by ID
getUsers.SingleUserById = async function (twitchUserId) {
        let err, result;

        let user = {
            id: 'undefined',
            login: 'undefined',
            display_name: 'undefined',
            type: 'undefined',
            broadcaster_type: 'undefined',
            description: 'undefined',
            profile_image_url: 'undefined',
            offline_image_url: 'undefined',
            view_count: 'undefined',
            email: 'undefined'
        }

        let accessToken = dbGetter.getAccessToken(116069219);

        let options = {
            url: `${process.env.TWITCH_API_URL}users?id=${twitchUserId}`,
            method: 'GET',
            headers: {
                'Client-ID': process.env.TWITCH_CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        [ err, result ] = await to(rp(options));

        if (!err) {
            let responseBody = JSON.parse(result);

            user = {
                id: responseBody.data[0].id,
                login: responseBody.data[0].login,
                display_name: responseBody.data[0].display_name,
                type: responseBody.data[0].type,
                broadcaster_type: responseBody.data[0].broadcaster_type,
                description: responseBody.data[0].description,
                profile_image_url: responseBody.data[0].profile_image_url,
                offline_image_url: responseBody.data[0].offline_image_url,
                view_count: responseBody.data[0].view_count
            }
        }

        console.log(user);

        return user;
}




























    // let err, result;
    // let user = {
    //     id: 'undefined',
    //     login: 'undefined',
    //     display_name: 'undefined',
    //     type: 'undefined',
    //     broadcaster_type: 'undefined',
    //     description: 'undefined',
    //     profile_image_url: 'undefined',
    //     offline_image_url: 'undefined',
    //     view_count: 'undefined',
    //     email: 'undefined'
    // }
    // let accessToken = dbGetter.getAccessToken(116069219);
    // let options = {
    //     url: `${process.env.TWITCH_API_URL}users?id=${twitchUserId}`,
    //     method: 'GET',
    //     headers: {
    //         'Client-ID': process.env.TWITCH_CLIENT_ID,
    //         'Accept': 'application/vnd.twitchtv.v5+json',
    //         'Authorization': 'Bearer ' + accessToken
    //     }
    // };
    // request(options, function (error, response, body) {
    //     if (response && response.statusCode == 200) {
    //         console.log('getUsers.SingleUserById status code 200');
    //         var responseBody = JSON.parse(body);
    //         user = {
    //             id: responseBody.data[0].id,
    //             login: responseBody.data[0].login,
    //             display_name: responseBody.data[0].display_name,
    //             type: responseBody.data[0].type,
    //             broadcaster_type: responseBody.data[0].broadcaster_type,
    //             description: responseBody.data[0].description,
    //             profile_image_url: responseBody.data[0].profile_image_url,
    //             offline_image_url: responseBody.data[0].offline_image_url,
    //             view_count: responseBody.data[0].view_count
    //         }
    //         console.log(user);
    //         return user;
    //     } else {
    //         console.log('getUsers.SingleUserById status code !200');
    //         // console.log(JSON.parse(body));
    //         // return user;
    //     }
    // });
    // console.log(user);
    // return user;
// };

module.exports = getUsers;
