/*
 * @Author: Nizars
 * @Date: 2018-05-28 11:10:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 11:58:15
 */

 // Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const dbGetter              = require('../../data/helpers/dbGetter');
const request               = require('request');
const rp                    = require('request-promise');
const to                    = require('await-to-js').to;
const games              = {};

// Get Games
games.getGames = async function (twitchUserId) {

    // URL
    // GET https://api.twitch.tv/helix/games

    // For a query to be valid, name and/or id must be specified.

    // REQUIRED
    let id;             // String	Game ID. At most 100 id values can be specified.

    let name;           // Game name. The name must be an exact match. For instance, “Pokemon” will not return a list of Pokemon games;
                        // instead, query the specific Pokemon game(s) in which you are interested. At most 100 name values can be specified.

    // RESPONSE
    let box_art_url;	// object	Template URL for the game’s box art.
    let id;		        // string Game ID.
    let name;	        // string	Game name.



    // {
    //     "data":
    //     [{
    //        "id": "493057",
    //        "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
    //        "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
    //     }]
    //   }


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
        email: 'undefined' }
    let accessToken = dbGetter.getAccessToken(116069219);
    let options = {
        baseUrl: process.env.TWITCH_API_URL,
        uri: '/users',
        method: 'GET',
        qs: {
            id: twitchUserId
        },
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': 'Bearer ' + accessToken
        }
    };

    [err, result] = await to(rp(options));
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
    return user;
}


// Get Top Games
games.getTopGames = async function (twitchUserId) {

    // OPTIONAL
    let after;          // String   Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response.
                        // This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination
                        // response field of a prior query.


    let before;         // string   Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response.
                        // This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination
                        // response field of a prior query.

    let first;          // integer   Maximum number of objects to return. Maximum: 100. Default: 20.


    // RESPONSE
    // {
    //     "data": [
    //       {
    //         "id": "493057",
    //         "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
    //         "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
    //       },
    //       ...
    //     ],
    //     "pagination":{"cursor":"eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ=="}
    //   }


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
        email: 'undefined' }
    let accessToken = dbGetter.getAccessToken(116069219);
    let options = {
        baseUrl: process.env.TWITCH_API_URL,
        uri: '/users',
        method: 'GET',
        qs: {
            id: twitchUserId
        },
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': 'Bearer ' + accessToken
        }
    };

    [err, result] = await to(rp(options));
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
    return user;
}

module.exports = games;