/*
 * @Author: Nizars
 * @Date: 2018-05-27 12:19:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 11:59:13
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const dbGetter          = require('../../data/helpers/dbGetter');
const request           = require('request');
const rp                = require('request-promise');
const to                = require('await-to-js').to;
const users             = {};

// Get Single User by ID
users.SingleUserById = async function (twitchUserId) {
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

// Get Single User by Login
users.SingleUserByLogin = async function (twitchUserId) {
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
            login: twitchUserId
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


// Get Users Follows
users.usersFollows = async function (twitchUserId) {

    // URLs
    // GET https://api.twitch.tv/helix/users/follows?from_id=<user ID>
    // GET https://api.twitch.tv/helix/users/follows?to_id=<user ID>


    // At minimum, from_id or to_id must be provided for a query to be valid.

    // OPTIONAL
    let after;	        //  string	Cursor for forward pagination: tells the server where to start fetching the next set of results,
                        //  in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.
    let first;	        //  integer	Maximum number of objects to return. Maximum: 100. Default: 20.
    let from_id;        //	string	User ID. The request returns information about users who are being followed by the from_id user.
    let to_id;          //	string	User ID. The request returns information about users who are following the to_id user.

    // RESPONSE
    let followed_at;    //	string	Date and time when the from_id user followed the to_id user.
    let from_id;	    //	string	ID of the user following the to_id user.
    let pagination;	    //	string	A cursor value, to be used in a subsequent request to specify the starting point of the next set of results.
    let to_id;	        //	object	ID of the user being followed by the from_id user.
    let total;	        //	int	    Total number of items returned.
                        //	If only from_id was in the request, this is the total number of followed users.
                        //  If only to_id was in the request, this is the total number of followers.
                        //	If both from_id and to_id were in the request, this is 1 (if the "from" user follows the "to" user) or 0.

    // {
    //     "total": 12345,
    //     "data":
    //     [
    //        {
    //           "from_id": "171003792",
    //           "to_id": "23161357",
    //           "followed_at": "2017-08-22T22:55:24Z"
    //        },
    //        {
    //           "from_id": "113627897",
    //           "to_id": "23161357",
    //           "followed_at": "2017-08-22T22:55:04Z"
    //        },
    //        ...
    //     ],
    //     "pagination":{
    //       "cursor": "eyJiIjpudWxsLCJhIjoiMTUwMzQ0MTc3NjQyNDQyMjAwMCJ9"
    //     }
    //  }



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
            login: twitchUserId
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


module.exports = users;
