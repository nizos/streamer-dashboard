/*
 * @Author: Nizars
 * @Date: 2018-05-28 10:49:48
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 11:57:44
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const dbGetter              = require('../../data/helpers/dbGetter');
const request               = require('request');
const rp                    = require('request-promise');
const to                    = require('await-to-js').to;
const bits                  = {};

// Get Bits Leaderboard
bits.getLeaderboard = async function (twitchUserId) {
    let count;          // integer	Number of results to be returned. Maximum: 100. Default: 10.

    let period;         // String   Time period over which data is aggregated (PST time zone). This parameter interacts with started_at.
                        // Valid values are given below. Default: "all".
                        // "day" – 00:00:00 on the day specified in started_at, through 00:00:00 on the following day.
                        // "week" – 00:00:00 on Monday of the week specified in started_at, through 00:00:00 on the following Monday.
                        // "month" – 00:00:00 on the first day of the month specified in started_at, through 00:00:00 on the first day of the following month.
                        // "year" – 00:00:00 on the first day of the year specified in started_at, through 00:00:00 on the first day of the following year.
                        // "all" – The lifetime of the broadcaster's channel. If this is specified (or used by default), started_at is ignored.

    let started_at;     // string	Timestamp for the period over which the returned data is aggregated. Must be in RFC 3339 format.
                        // If this is not provided, data is aggregated over the current period; e.g., the current day/week/month/year.
                        // This value is ignored if period is "all".
                        // Any + operator should be URL encoded.
                        // Currently, the HH:MM:SS part of this value is used only to identify a given day in PST and otherwise ignored.
                        // For example, if the started_at value resolves to 5PM PST yesterday and period is "day", data is returned for all of yesterday.

    let user_id;        // string   ID of the user whose results are returned; i.e., the person who paid for the bits.
                        // As long as count is greater than 1, the returned data includes additional users, with Bits amounts above 
                        // and below the user specified by user_id.
                        // If user_id is not provided, the endpoint returns the bits leaderboard data across top users (subject to the value of count).


    // {
    //     "data": [
    //         {
    //             "user_id": "158010205",
    //             "rank": 1,
    //             "score": 12543
    //         },
    //         {
    //             "user_id": "7168163",
    //             "rank": 2,
    //             "score": 6900
    //         },
    //     ],
    //     "date_range": {
    //         "started_at": "2018-02-05T08:00:00Z",
    //         "ended_at": "2018-02-12T08:00:00Z"
    //     },
    //     "total": 2
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

module.exports = bits;