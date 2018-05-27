/*
 * @Author: Nizars
 * @Date: 2018-05-27 10:26:50
 * @Last Modified by:   Nizars
 * @Last Modified time: 2018-05-27 10:26:50
 */


// Import the env variables
require('dotenv').config();

// Import the required modules
const async             = require('async');
const database          = require('../db');
const AppUser           = require('../../models/appUser');
const dbRegistrer       = {};


// Register App User
dbRegistrer.registerAppUser = async function (appUserData) {

    // AppUser.findOneAndRemove({id: appUserData.id}, async (err, result) => {
    //     if(err) {
    //         console.log('Could not remove previously found AppUser with similar id');
    //         console.log(err);
    //     };
    //     if(result) {
    //         console.log('AppUser with similar id was found and removed');
    //         console.log(result);
    //     };
    // });


    AppUser.create({
            id:                     appUserData.id,
            login:                  appUserData.login,
            display_name:           appUserData.display_name,
            prefered_username:      appUserData.prefered_username,
            type:                   appUserData.type,
            broadcaster_type:       appUserData.broadcaster_type,
            description:            appUserData.description,
            profile_image_url:      appUserData.profile_image_url,
            offline_image_url:      appUserData.offline_image_url,
            view_count:             appUserData.view_count,
            email:                  appUserData.email,
            client_id:              appUserData.client_id,
            redirect_uri:           appUserData.redirect_uri,
            response_type:          appUserData.response_type,
            access_token:           appUserData.access_token,
            refresh_token:          appUserData.refresh_token,
            expires_in:             appUserData.expires_in,
            id_token:               appUserData.id_token,
            scope:                  appUserData.scope,
            alg:                    appUserData.alg,
            typ:                    appUserData.typ,
            kid:                    appUserData.kid,
            aud:                    appUserData.aud,
            exp:                    appUserData.exp,
            iat:                    appUserData.iat,
            iss:                    appUserData.iss,
            sub:                    appUserData.sub,
            azp:                    appUserData.azp,
            created_at:             appUserData.created_at,
            updated_at:             appUserData.updated_at,
        }, async (err, appUser) => {
        if(err) {
            console.log(`Error: couldn't register App User`);
            console.log(err);
        } else {
            console.log(`SUCCESS: App User added to database`);
        }
    });
};

// Export Register function
module.exports = dbRegistrer;
