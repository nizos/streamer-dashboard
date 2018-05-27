/*
 * @Author: Nizars
 * @Date: 2018-05-27 10:27:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 10:55:13
 */


// Import Environment data
require('dotenv').config();

// Import the required modules
const async             = require('async');
const database          = require('../db');
const AppUser           = require('../../models/appUser');
const dbGetter          = {};


// GET APP USER PROFILE
dbGetter.getAppUserProfile = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {id: 1, login: 1, display_name: 1, prefered_username: 1, type: 1, broadcaster_type: 1, description: 1, profile_image_url: 1, offline_image_url: 1, view_count: 1, email: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getAppUserProfile returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getAppUserProfile returning no results');
        return 0;
    };

    console.log('dbGetter.getAppUserProfile returning result: ' + result[0]);
    return result[0];
};

// GET LOGIN
dbGetter.getLogin = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {login: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getLogin returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getLogin returning no results');
        return 0;
    };

    console.log('dbGetter.getLogin returning result: ' + result[0]);
    return result[0];
};


// GET DISPLAY NAME
dbGetter.getDisplayName = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {display_name: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getDisplayName returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getDisplayName returning no results');
        return 0;
    };

    console.log('dbGetter.getDisplayName returning result: ' + result[0]);
    return result[0];
};

// GET TYPE
dbGetter.getType = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {type: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getType returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getType returning no results');
        return 0;
    };

    console.log('dbGetter.getType returning result: ' + result[0]);
    return result[0];
};

// GET BROADCASTER TYPE
dbGetter.getBroadcasterType = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {broadcaster_type: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getBroadcasterType returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getBroadcasterType returning no results');
        return 0;
    };

    console.log('dbGetter.getBroadcasterType returning result: ' + result[0]);
    return result[0];
};


// GET DESCRIPTION
dbGetter.getDescription = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {description: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getDescription returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getDescription returning no results');
        return 0;
    };

    console.log('dbGetter.getDescription returning result: ' + result[0]);
    return result[0];
};

// GET PROFILE IMAGE URL
dbGetter.getProfileImageUrl = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {profile_image_url: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getProfileImageUrl returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getProfileImageUrl returning no results');
        return 0;
    };

    console.log('dbGetter.getProfileImageUrl returning result: ' + result[0]);
    return result[0];
};

// GET OFFLINE IMAGE URL
dbGetter.getOfflineImageUrl = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {offline_image_url: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getOfflineImageUrl returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getOfflineImageUrl returning no results');
        return 0;
    };

    console.log('dbGetter.getOfflineImageUrl returning result: ' + result[0]);
    return result[0];
};

// GET VIEW COUNT
dbGetter.getViewCount = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {view_count: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getViewCount returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getViewCount returning no results');
        return 0;
    };

    console.log('dbGetter.getViewCount returning result: ' + result[0]);
    return result[0];
};

// GET EMAIL
dbGetter.getEmail = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {email: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getEmail returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getEmail returning no results');
        return 0;
    };

    console.log('dbGetter.getEmail returning result: ' + result[0]);
    return result[0];
};

// GET JWT HEADER
dbGetter.getJWTHeader = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {alg: 1, typ: 1, kid: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getJWTHeader returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getJWTHeader returning no results');
        return 0;
    };

    console.log('dbGetter.getJWTHeader returning result: ' + result[0]);
    return result[0];
};

// GET ALG
dbGetter.getAlg = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {alg: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getAlg returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getAlg returning no results');
        return 0;
    };

    console.log('dbGetter.getAlg returning result: ' + result[0]);
    return result[0];
};

// GET TYP
dbGetter.getTyp = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {typ: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getTyp returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getTyp returning no results');
        return 0;
    };

    console.log('dbGetter.getTyp returning result: ' + result[0]);
    return result[0];
};

// GET KID
dbGetter.getKid = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {kid: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getKid returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getKid returning no results');
        return 0;
    };

    console.log('dbGetter.getKid returning result: ' + result[0]);
    return result[0];
};

// GET JWT PAYLOAD
dbGetter.getJWTPayload = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {aud: 1, exp: 1, iat: 1, iss: 1, sub: 1, azp: 1, prefered_username: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getJWTPayload returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getJWTPayload returning no results');
        return 0;
    };

    console.log('dbGetter.getJWTPayload returning result: ' + result[0]);
    return result[0];
};

// GET AUD
dbGetter.getAud = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {aud: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getAud returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getAud returning no results');
        return 0;
    };

    console.log('dbGetter.getAud returning result: ' + result[0]);
    return result[0];
};

// GET EXP
dbGetter.getExp = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {exp: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getExp returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getExp returning no results');
        return 0;
    };

    console.log('dbGetter.getExp returning result: ' + result[0]);
    return result[0];
};

// GET IAT
dbGetter.getIat = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {iat: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getIat returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getIat returning no results');
        return 0;
    };

    console.log('dbGetter.getIat returning result: ' + result[0]);
    return result[0];
};

// GET ISS
dbGetter.getIss = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {iss: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getIss returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getIss returning no results');
        return 0;
    };

    console.log('dbGetter.getIss returning result: ' + result[0]);
    return result[0];
};

// GET SUB
dbGetter.getSub = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {sub: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getSub returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getSub returning no results');
        return 0;
    };

    console.log('dbGetter.getSub returning result: ' + result[0]);
    return result[0];
};

// GET AZP
dbGetter.getAzp = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {azp: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getAzp returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getAzp returning no results');
        return 0;
    };

    console.log('dbGetter.getAzp returning result: ' + result[0]);
    return result[0];
};

// GET PREFERED USERNAME
dbGetter.getPreferedUsername = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {prefered_username: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getPreferedUsername returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getPreferedUsername returning no results');
        return 0;
    };

    console.log('dbGetter.getPreferedUsername returning result: ' + result[0]);
    return result[0];
};

// GET JWT ID TOKEN
dbGetter.getJWTIdToken = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {access_token: 1, expires_in: 1, id_token: 1, scope: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getJWTIdToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getJWTIdToken returning no results');
        return 0;
    };

    console.log('dbGetter.getJWTIdToken returning result: ' + result[0]);
    return result[0];
};

// GET ACCESS TOKEN
dbGetter.getAccessToken = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {access_token: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getAccessToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getAccessToken returning no results');
        return 0;
    };

    console.log('dbGetter.getAccessToken returning result: ' + result[0]);
    return result[0];
};

// GET EXPIRES IN
dbGetter.getExpiresIn = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {expires_in: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getExpiresIn returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getExpiresIn returning no results');
        return 0;
    };

    console.log('dbGetter.getExpiresIn returning result: ' + result[0]);
    return result[0];
};

// GET ID TOKEN
dbGetter.getIdToken = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {id_token: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getIdToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getIdToken returning no results');
        return 0;
    };

    console.log('dbGetter.getIdToken returning result: ' + result[0]);
    return result[0];
};

// GET SCOPE
dbGetter.getScope = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {scope: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getScope returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getScope returning no results');
        return 0;
    };

    console.log('dbGetter.getScope returning result: ' + result[0]);
    return result[0];
};

// GET JWT
dbGetter.getJWT = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {alg: 1, typ: 1, kid: 1, aud: 1, exp: 1, iat: 1, iss: 1, sub: 1, azp: 1, prefered_username: 1, access_token: 1, expires_in: 1, id_token: 1, scope: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getJWT returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getJWT returning no results');
        return 0;
    };

    console.log('dbGetter.getJWT returning result: ' + result[0]);
    return result[0];
};

// GET CLIENT ID
dbGetter.getClientId = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {client_id: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getClientId returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getClientId returning no results');
        return 0;
    };

    console.log('dbGetter.getClientId returning result: ' + result[0]);
    return result[0];
};

// GET REDIRECT URI
dbGetter.getRedirectUri = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {redirect_uri: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getRedirectUri returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getRedirectUri returning no results');
        return 0;
    };

    console.log('dbGetter.getRedirectUri returning result: ' + result[0]);
    return result[0];
};

// GET RESPONSE TYPE
dbGetter.getResponseType = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {response_type: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getResponseType returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getResponseType returning no results');
        return 0;
    };

    console.log('dbGetter.getResponseType returning result: ' + result[0]);
    return result[0];
};

// GET REFRESH TOKEN
dbGetter.getRefreshToken = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {refresh_token: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getRefreshToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getRefreshToken returning no results');
        return 0;
    };

    console.log('dbGetter.getRefreshToken returning result: ' + result[0]);
    return result[0];
};

// GET CREATED AT
dbGetter.getCreatedAt = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {created_at: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getCreatedAt returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getCreatedAt returning no results');
        return 0;
    };

    console.log('dbGetter.getCreatedAt returning result: ' + result[0]);
    return result[0];
};

// GET UPDATED AT
dbGetter.getUpdatedAt = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {updated_at: 1, _id: 0});
    if(err) {
        console.log('dbGetter.getUpdatedAt returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbGetter.getUpdatedAt returning no results');
        return 0;
    };

    console.log('dbGetter.getUpdatedAt returning result: ' + result[0]);
    return result[0];
};

// Export dbGetter function
module.exports = dbGetter;
