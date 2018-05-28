/*
 * @Author: Nizars
 * @Date: 2018-05-28 11:22:31
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 11:59:40
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const dbGetter          = require('../../data/helpers/dbGetter');
const request           = require('request');
const rp                = require('request-promise');
const to                = require('await-to-js').to;
const videos            = {};

// Get Videos
videos.getVideos = async function (twitchUserId) {

    // Each request must specify one or more video ids, one user_id, or one game_id.
    // REQUIRED
    let id;         	// string	ID of the video being queried. Limit: 100.
                        // If this is specified, you cannot use any of the optional query string parameters below.
    let user_id;	    // string	ID of the user who owns the video. Limit 1.
    let game_id;	    // string	ID of the game the video is of. Limit 1.

    // OPTIONAL
    // These can be used if the request specifies a user_id or game_id, not a video id.
    let after;	        // string	Cursor for forward pagination: tells the server where to start fetching the next set of results,
                        // in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.
    let before;         //	string	Cursor for backward pagination: tells the server where to start fetching the next set of results,
                        // in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.
    let first;	        // string	Number of values to be returned when getting videos by user or game ID. Limit: 100. Default: 20.
    let language;       //	string	Language of the video being queried. Limit: 1.
    let period;         //	string	Period during which the video was created. Valid values: "all", "day", "week", "month". Default: "all".
    let sort;           //	string	Sort order of the videos. Valid values: "time", "trending", "views". Default: "time".
    let type;           //	string	Type of video. Valid values: "all", "upload", "archive", "highlight". Default: "all".

    // RESPONSE
    let created_at;	    //	string	Date when the video was created.
    let description;	//	string	Description of the video.
    let duration;	    //	string	Length of the video.
    let id;	            //	string	ID of the video.
    let language;	    //	string	Language of the video.
    let pagination;	    //	string	A cursor value, to be used in a subsequent request to specify the starting point of the next set of results.
    let published_at;	//	string	Date when the video was published.
    let thumbnail_url;	//	object	Template URL for the thumbnail of the video.
    let title;	        //	string	Title of the video.
    let type;	        //	string	Type of video. Valid values: "upload", "archive", "highlight".
    let url;	        //	object	URL of the video.
    let user_id;	    //	string	ID of the user who owns the video.
    let view_count;	    //	int	Number of times the video has been viewed.
    let viewable;	    //	string	Indicates whether the video is publicly viewable. Valid values: "public", "private".

    // {
    //     "data": [{
    //       "id": "234482848",
    //       "user_id": "67955580",
    //       "title": "-",
    //       "description": "",
    //       "created_at": "2018-03-02T20:53:41Z",
    //       "published_at": "2018-03-02T20:53:41Z",
    //       "url": "https://www.twitch.tv/videos/234482848",
    //       "thumbnail_url": "https://static-cdn.jtvnw.net/s3_vods/bebc8cba2926d1967418_chewiemelodies_27786761696_805342775/thumb/thumb0-%{width}x%{height}.jpg",
    //       "viewable": "public",
    //       "view_count": 142,
    //       "language": "en",
    //       "type": "archive",
    //       "duration": "3h8m33s"
    //     }],
    //     "pagination":{"cursor":"eyJiIjpudWxsLCJhIjoiMTUwMzQ0MTc3NjQyNDQyMjAwMCJ9"}
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

module.exports = videos;