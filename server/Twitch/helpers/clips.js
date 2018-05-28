/*
 * @Author: Nizars
 * @Date: 2018-05-28 11:00:23
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 11:55:54
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const dbGetter              = require('../../data/helpers/dbGetter');
const request               = require('request');
const rp                    = require('request-promise');
const to                    = require('await-to-js').to;
const clips                 = {};

// Get Clips
clips.getClips = async function (twitchUserId) {

    // URL
    // GET https://api.twitch.tv/helix/bits/leaderboard

    // REQUIRED
    let broadcaster_id; // String	ID of the broadcaster for whom clips are returned.
                        // The number of clips returned is determined by the first query-string parameter (default: 20).
                        // Results are ordered by view count.
    let game_id;        // String   ID of the game for which clips are returned.
                        // The number of clips returned is determined by the first query-string parameter (default: 20).
                        // Results are ordered by view count.
    let id;             // string	ID of the clip being queried. Limit: 100.

    // For a query to be valid, id (one or more), broadcaster_id, or game_id must be specified.
    // You may specify only one of these parameters.

    // OPTIONAL
    let after;          // String   Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response.
                        // This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination
                        // response field of a prior query.
    let before;         // string   Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response.
                        // This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination
                        // response field of a prior query.
    let first;          // integer   Maximum number of objects to return. Maximum: 100. Default: 20.


    // RESPONSE
    let ended_at;       // string	End of the date range for the returned data.
    let rank;           // integer	Leaderboard rank of the user.
    let score;          // integer	Leaderboard score (number of bits) of the user.
    let started_at;     // string	Start of the date range for the returned data.
    let total;          // integer	Total number of results (users) returned.
                        // This is count or the total number of entries in the leaderboard, whichever is less.
    let user_id;        // string	ID of the user (viewer) in the leaderboard entry.

    // {
    //     "data":
    //     [{
    //       "id": "AwkwardHelplessSalamanderSwiftRage",
    //       "url": "https://clips.twitch.tv/AwkwardHelplessSalamanderSwiftRage",
    //       "embed_url": "https://clips.twitch.tv/embed?clip=AwkwardHelplessSalamanderSwiftRage",
    //       "broadcaster_id": "67955580",
    //       "creator_id": "53834192",
    //       "video_id": "205586603",
    //       "game_id": "488191",
    //       "language": "en",
    //       "title": "babymetal",
    //       "view_count": 10,
    //       "created_at": "2017-11-30T22:34:18Z",
    //       "thumbnail_url": "https://clips-media-assets.twitch.tv/157589949-preview-480x272.jpg"
    //     }]
    //   }

    //     {"data":
    //   [{
    //     "id":"RandomClip1",
    //     "url":"https://clips.twitch.tv/AwkwardHelplessSalamanderSwiftRage",
    //     "embed_url":"https://clips.twitch.tv/embed?clip=RandomClip1",
    //     "broadcaster_id":"1234",
    //     "creator_id":"123456",
    //     "video_id":"1234567",
    //     "game_id":"33103",
    //     "language":"en",
    //     "title":"random1",
    //     "view_count":10,
    //     "created_at":"2017-11-30T22:34:18Z",
    //     "thumbnail_url":"https://clips-media-assets.twitch.tv/157589949-preview-480x272.jpg"
    //   },
    //   ...
    //   ]
    //   "pagination": {"cursor": "eyJiIjpudWxsLCJhIjoiIn0"}
    // }

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

// Create Clip
clips.createClip = async function (twitchUserId) {

    // URL
    // POST https://api.twitch.tv/helix/clips

    // REQUIRED
    let broadcaster_id; // String	ID of the stream from which the clip will be made

    // OPTIONAL
    let has_delay;      // boolean   If false, the clip is captured from the live stream when the API is called; otherwise,
                        // a delay is added before the clip is captured (to account for the brief delay between the broadcaster’s
                        // stream and the viewer’s experience of that stream). Default: false.


    // RESPONSE
    let edit_url;       // string	URL of the edit page for the clip.
    let id;             // string	ID of the clip that was created.

    // {
    //     "data":
    //     [{
    //        "id": "FiveWordsForClipSlug",
    //        "edit_url": "http://clips.twitch.tv/FiveWordsForClipSlug/edit"
    //     }]
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

module.exports = clips;