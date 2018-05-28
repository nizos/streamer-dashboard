/*
 * @Author: Nizars
 * @Date: 2018-05-28 11:16:12
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-28 11:58:39
 */
 
 
 // Import environment keys and values
 require('dotenv').config();

 // Import dependancies and modules
 const dbGetter              = require('../../data/helpers/dbGetter');
 const request               = require('request');
 const rp                    = require('request-promise');
 const to                    = require('await-to-js').to;
 const streams              = {};
 
 // Get Streams
 streams.getStreams = async function (twitchUserId) {
 
     // OPTIONAL
     let after;             // string	Cursor for forward pagination: tells the server where to start fetching the next set of results,
                            // in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.

    let before;             // string	Cursor for backward pagination: tells the server where to start fetching the next set of results,
                            // in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.

    let community_id;	    // string	Returns streams in a specified community ID. You can specify up to 100 IDs.

    let first;	            // integer	Maximum number of objects to return. Maximum: 100. Default: 20.

    let game_id;	        // string	Returns streams broadcasting a specified game ID. You can specify up to 100 IDs.

    let language;	        // string	Stream language. You can specify up to 100 languages.

    let user_id;	        // string	Returns streams broadcast by one or more specified user IDs. You can specify up to 100 IDs.

    let user_login;	        // string	Returns streams broadcast by one or more specified user login names. You can specify up to 100 names.
 
 
     // RESPONSE
    //  {
    //     "data": [
    //       {
    //         "id": "26007494656",
    //         "user_id": "23161357",
    //         "game_id": "417752",
    //         "community_ids": [
    //           "5181e78f-2280-42a6-873d-758e25a7c313",
    //           "848d95be-90b3-44a5-b143-6e373754c382",
    //           "fd0eab99-832a-4d7e-8cc0-04d73deb2e54"
    //         ],
    //         "type": "live",
    //         "title": "Hey Guys, It's Monday - Twitter: @Lirik",
    //         "viewer_count": 32575,
    //         "started_at": "2017-08-14T16:08:32Z",
    //         "language": "en",
    //         "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_lirik-{width}x{height}.jpg"
    //       },
    //       ...
    //     ],
    //     "pagination": {
    //       "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ=="
    //     }
    //   }


    // {
    //     "data": [
    //       {
    //         "id": "26007351216",
    //         "user_id": "7236692",
    //         "game_id": "29307",
    //         "community_ids": [
    //           "848d95be-90b3-44a5-b143-6e373754c382",
    //           "fd0eab99-832a-4d7e-8cc0-04d73deb2e54",
    //           "ff1e77af-551d-4993-945c-f8ceaa2a2829"
    //         ],
    //         "type": "live",
    //         "title": "[Punday Monday] Necromancer - Dan's First Character - Maps - !build",
    //         "viewer_count": 5723,
    //         "started_at": "2017-08-14T15:45:17Z",
    //         "language": "en",
    //         "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-{width}x{height}.jpg"
    //       },
    //       ...
    //      ],
    //      "pagination": {
    //        "cursor": "eyJiIjp7Ik9mZnNldCI6MH0sImEiOnsiT2Zmc2V0Ijo0MH19"
    //      }
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
 
 
 module.exports = streams;