/*
 * @Author: Nizars
 * @Date: 2018-05-27 10:57:53
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 12:03:47
 */

 // Import Environment data
require('dotenv').config();

// Import the required modules
const async             = require('async');
const database          = require('../db');
const AppUser           = require('../../models/appUser');
const dbSetter          = {};



// SET APP USER PROFILE
dbSetter.setAppUserProfile = async function (appUserId, appUserlogin, appUserDisplayName, appUserPreferedUsername, appUserType, appUserBroadcasterType, appUserDescription, appUserProfileImageUrl, appUserOfflineImageUrl, appUserViewCount, appUserEmail) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {login: appUserlogin, display_name: appUserDisplayName, prefered_username: appUserPreferedUsername, type: appUserType, broadcaster_type: appUserBroadcasterType, description: appUserDescription, profile_image_url: appUserProfileImageUrl, offline_image_url: appUserOfflineImageUrl, view_count: appUserViewCount, email: appUserEmail});
    if(err) {
        console.log('dbSetter.setAppUserProfile returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setAppUserProfile returning no results');
        return 0;
    };

    console.log('dbSetter.setAppUserProfile returning result: ' + result[0]);
    return result[0];
};

// SET LOGIN
dbSetter.setLogin = async function (appUserId, appUserlogin) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {login: appUserlogin});
    if(err) {
        console.log('dbSetter.setLogin returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setLogin returning no results');
        return 0;
    };

    console.log('dbSetter.setLogin returning result: ' + result[0]);
    return result[0];
};


// SET DISPLAY NAME
dbSetter.setDisplayName = async function (appUserId, appUserDisplayName) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {display_name: appUserDisplayName});
    if(err) {
        console.log('dbSetter.setDisplayName returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setDisplayName returning no results');
        return 0;
    };

    console.log('dbSetter.setDisplayName returning result: ' + result[0]);
    return result[0];
};

// SET TYPE
dbSetter.setType = async function (appUserId, appUserType) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {type: appUserType});
    if(err) {
        console.log('dbSetter.setType returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setType returning no results');
        return 0;
    };

    console.log('dbSetter.setType returning result: ' + result[0]);
    return result[0];
};

// SET BROADCASTER TYPE
dbSetter.setBroadcasterType = async function (appUserId, appUserBroadcasterType) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {broadcaster_type: appUserBroadcasterType});
    if(err) {
        console.log('dbSetter.setBroadcasterType returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setBroadcasterType returning no results');
        return 0;
    };

    console.log('dbSetter.setBroadcasterType returning result: ' + result[0]);
    return result[0];
};


// SET DESCRIPTION
dbSetter.setDescription = async function (appUserId, appUserDescription) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {description: appUserDescription});
    if(err) {
        console.log('dbSetter.setDescription returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setDescription returning no results');
        return 0;
    };

    console.log('dbSetter.setDescription returning result: ' + result[0]);
    return result[0];
};

// SET PROFILE IMAGE URL
dbSetter.setProfileImageUrl = async function (appUserId, appUserProfileImageUrl) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {profile_image_url: appUserProfileImageUrl});
    if(err) {
        console.log('dbSetter.setProfileImageUrl returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setProfileImageUrl returning no results');
        return 0;
    };

    console.log('dbSetter.setProfileImageUrl returning result: ' + result[0]);
    return result[0];
};

// SET OFFLINE IMAGE URL
dbSetter.setOfflineImageUrl = async function (appUserId, appUserOfflineImageUrl) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {offline_image_url: appUserOfflineImageUrl});
    if(err) {
        console.log('dbSetter.setOfflineImageUrl returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setOfflineImageUrl returning no results');
        return 0;
    };

    console.log('dbSetter.setOfflineImageUrl returning result: ' + result[0]);
    return result[0];
};

// SET VIEW COUNT
dbSetter.setViewCount = async function (appUserId, appUserViewCount) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {view_count: appUserViewCount});
    if(err) {
        console.log('dbSetter.setViewCount returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setViewCount returning no results');
        return 0;
    };

    console.log('dbSetter.setViewCount returning result: ' + result[0]);
    return result[0];
};

// SET EMAIL
dbSetter.setEmail = async function (appUserId, appUserEmail) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {email: appUserEmail});
    if(err) {
        console.log('dbSetter.setEmail returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setEmail returning no results');
        return 0;
    };

    console.log('dbSetter.setEmail returning result: ' + result[0]);
    return result[0];
};

// SET JWT HEADER
dbSetter.setJWTHeader = async function (appUserId, appUserAlg, appUserTyp, appUserKid) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {alg: appUserAlg, typ: appUserTyp, kid: appUserKid});
    if(err) {
        console.log('dbSetter.setJWTHeader returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setJWTHeader returning no results');
        return 0;
    };

    console.log('dbSetter.setJWTHeader returning result: ' + result[0]);
    return result[0];
};

// SET ALG
dbSetter.setAlg = async function (appUserId, appUserAlg) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {alg: appUserAlg});
    if(err) {
        console.log('dbSetter.setAlg returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setAlg returning no results');
        return 0;
    };

    console.log('dbSetter.setAlg returning result: ' + result[0]);
    return result[0];
};

// SET TYP
dbSetter.setTyp = async function (appUserId, appUserTyp) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {typ: appUserTyp});
    if(err) {
        console.log('dbSetter.setTyp returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setTyp returning no results');
        return 0;
    };

    console.log('dbSetter.setTyp returning result: ' + result[0]);
    return result[0];
};

// SET KID
dbSetter.setKid = async function (appUserId, appUserKid) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {kid: appUserKid});
    if(err) {
        console.log('dbSetter.setKid returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setKid returning no results');
        return 0;
    };

    console.log('dbSetter.setKid returning result: ' + result[0]);
    return result[0];
};

// SET JWT PAYLOAD
dbSetter.setJWTPayload = async function (appUserId, appUserAud, appUserExp, appUserIat, appUserIss, appUserSub, appUserAzp, appUserPreferedUsername) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {aud: appUserAud, exp: appUserExp, iat: appUserIat, iss: appUserIss, sub: appUserSub, azp: appUserAzp, prefered_username: appUserPreferedUsername});
    if(err) {
        console.log('dbSetter.setJWTPayload returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setJWTPayload returning no results');
        return 0;
    };

    console.log('dbSetter.setJWTPayload returning result: ' + result[0]);
    return result[0];
};

// SET AUD
dbSetter.setAud = async function (appUserId, appUserAud) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {aud: appUserAud});
    if(err) {
        console.log('dbSetter.setAud returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setAud returning no results');
        return 0;
    };

    console.log('dbSetter.setAud returning result: ' + result[0]);
    return result[0];
};

// SET EXP
dbSetter.setExp = async function (appUserId, appUserExp) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {exp: appUserExp});
    if(err) {
        console.log('dbSetter.setExp returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setExp returning no results');
        return 0;
    };

    console.log('dbSetter.setExp returning result: ' + result[0]);
    return result[0];
};

// SET IAT
dbSetter.setIat = async function (appUserId, appUserIat) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {iat: appUserIat});
    if(err) {
        console.log('dbSetter.setIat returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setIat returning no results');
        return 0;
    };

    console.log('dbSetter.setIat returning result: ' + result[0]);
    return result[0];
};

// SET ISS
dbSetter.setIss = async function (appUserId, appUserIss) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {iss: appUserIss});
    if(err) {
        console.log('dbSetter.setIss returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setIss returning no results');
        return 0;
    };

    console.log('dbSetter.setIss returning result: ' + result[0]);
    return result[0];
};

// SET SUB
dbSetter.setSub = async function (appUserId, appUserSub) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {sub: appUserSub});
    if(err) {
        console.log('dbSetter.setSub returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setSub returning no results');
        return 0;
    };

    console.log('dbSetter.setSub returning result: ' + result[0]);
    return result[0];
};

// SET AZP
dbSetter.setAzp = async function (appUserId, appUserAzp) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {azp: appUserAzp});
    if(err) {
        console.log('dbSetter.setAzp returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setAzp returning no results');
        return 0;
    };

    console.log('dbSetter.setAzp returning result: ' + result[0]);
    return result[0];
};

// SET PREFERED USERNAME
dbSetter.setPreferedUsername = async function (appUserId, appUserPreferedUsername) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {prefered_username: appUserPreferedUsername});
    if(err) {
        console.log('dbSetter.setPreferedUsername returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setPreferedUsername returning no results');
        return 0;
    };

    console.log('dbSetter.setPreferedUsername returning result: ' + result[0]);
    return result[0];
};

// SET JWT ID TOKEN
dbSetter.setJWTIdToken = async function (appUserId, appUserAccessToken, appUserExpiresIn, appUserIdToken, appUserScope) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {access_token: appUserAccessToken, expires_in: appUserExpiresIn, id_token: appUserIdToken, scope: appUserScope});
    if(err) {
        console.log('dbSetter.setJWTIdToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setJWTIdToken returning no results');
        return 0;
    };

    console.log('dbSetter.setJWTIdToken returning result: ' + result[0]);
    return result[0];
};

// SET ACCESS TOKEN
dbSetter.setAccessToken = async function (appUserId, appUserAccessToken) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {access_token: appUserAccessToken});
    if(err) {
        console.log('dbSetter.setAccessToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setAccessToken returning no results');
        return 0;
    };

    console.log('dbSetter.setAccessToken returning result: ' + result[0]);
    return result[0];
};

// SET EXPIRES IN
dbSetter.setExpiresIn = async function (appUserId, appUserExpiresIn) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {expires_in: appUserExpiresIn});
    if(err) {
        console.log('dbSetter.setExpiresIn returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setExpiresIn returning no results');
        return 0;
    };

    console.log('dbSetter.setExpiresIn returning result: ' + result[0]);
    return result[0];
};

// SET ID TOKEN
dbSetter.setIdToken = async function (appUserId, appUserIdToken) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {id_token: appUserIdToken});
    if(err) {
        console.log('dbSetter.setIdToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setIdToken returning no results');
        return 0;
    };

    console.log('dbSetter.setIdToken returning result: ' + result[0]);
    return result[0];
};

// SET SCOPE
dbSetter.setScope = async function (appUserId, appUserScope) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {scope: appUserScope});
    if(err) {
        console.log('dbSetter.setScope returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setScope returning no results');
        return 0;
    };

    console.log('dbSetter.setScope returning result: ' + result[0]);
    return result[0];
};

// SET JWT
dbSetter.setJWT = async function (appUserId, appUserAlg, appUserTyp, appUserKid, appUserAud, appUserExp, appUserIat, appUserIss, appUserSub, appUserAzp, appUserPreferedUsername, appUserAccessToken, appUserExpiresIn, appUserIdToken, appUserScope) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {alg: appUserAlg, typ: appUserTyp, kid: appUserKid, aud: appUserAud, exp: appUserExp, iat: appUserIat, iss: appUserIss, sub: appUserSub, azp: appUserAzp, prefered_username: appUserPreferedUsername, access_token: appUserAccessToken, expires_in: appUserExpiresIn, id_token: appUserIdToken, scope: appUserScope});
    if(err) {
        console.log('dbSetter.setJWT returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setJWT returning no results');
        return 0;
    };

    console.log('dbSetter.setJWT returning result: ' + result[0]);
    return result[0];
};

// SET CLIENT ID
dbSetter.setClientId = async function (appUserId, appUserClientId) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {client_id: appUserClientId});
    if(err) {
        console.log('dbSetter.setClientId returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setClientId returning no results');
        return 0;
    };

    console.log('dbSetter.setClientId returning result: ' + result[0]);
    return result[0];
};

// SET REDIRECT URI
dbSetter.setRedirectUri = async function (appUserId, appUserRedirectUri) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {redirect_uri: appUserRedirectUri});
    if(err) {
        console.log('dbSetter.setRedirectUri returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setRedirectUri returning no results');
        return 0;
    };

    console.log('dbSetter.setRedirectUri returning result: ' + result[0]);
    return result[0];
};

// SET RESPONSE TYPE
dbSetter.setResponseType = async function (appUserId, appUserResponseType) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {response_type: appUserResponseType});
    if(err) {
        console.log('dbSetter.setResponseType returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setResponseType returning no results');
        return 0;
    };

    console.log('dbSetter.setResponseType returning result: ' + result[0]);
    return result[0];
};

// SET REFRESH TOKEN
dbSetter.setRefreshToken = async function (appUserId, appUserRefreshToken) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {refresh_token: appUserRefreshToken});
    if(err) {
        console.log('dbSetter.setRefreshToken returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setRefreshToken returning no results');
        return 0;
    };

    console.log('dbSetter.setRefreshToken returning result: ' + result[0]);
    return result[0];
};

// SET CREATED AT
dbSetter.setCreatedAt = async function (appUserId, appUserCreatedAt) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {created_at: appUserCreatedAt});
    if(err) {
        console.log('dbSetter.setCreatedAt returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setCreatedAt returning no results');
        return 0;
    };

    console.log('dbSetter.setCreatedAt returning result: ' + result[0]);
    return result[0];
};

// SET UPDATED AT
dbSetter.setUpdatedAt = async function (appUserId, appUserUpdatedAt) {
    let err, result;

    result = await AppUser.findOneAndUpdate({ id: appUserId}, {updated_at: appUserUpdatedAt});
    if(err) {
        console.log('dbSetter.setUpdatedAt returning error: ' + err);
        return 0;
    };

    if (!result[0]) {
        console.log('dbSetter.setUpdatedAt returning no results');
        return 0;
    };

    console.log('dbSetter.setUpdatedAt returning result: ' + result[0]);
    return result[0];
};
































// Export dbSetter function
module.exports = dbSetter;


