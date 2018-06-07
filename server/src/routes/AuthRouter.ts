/*
 * @Author: Nizars
 * @Date: 2018-06-07 01:09:10
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 04:42:57
 */

import { Request, Response, Router } from 'express';
import * as passport from 'passport';
import * as OAuth2Strategy from 'passport-oauth2';
import * as request from 'request';
import * as handlebars from 'handlebars';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as http from 'http';
import * as cors from 'cors';
import * as path from 'path';
import { OAuth } from 'oauth';


class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();


  // Use passport
  passport.use('twitch', new OAuth2Strategy( {
    authorizationURL: process.env.TWITCH_AUTHORIZE_URL,
    tokenURL: process.env.TWITCH_REFRESH_URL,
    clientID: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_SECRET,
    callbackURL: process.env.TWITCH_REDIRECT_URI
  },
  function (accessToken, refreshToken, id_token, profile, done) {
    console.log('Running: usePassport');
    const decoded = jwt.decode(id_token.id_token, {complete: true});
    const user = {
      id                              : profile.data[0].id,
      login                           : profile.data[0].login,
      display_name                    : profile.data[0].display_name,
      type                            : profile.data[0].type,
      broadcaster_type                : profile.data[0].broadcaster_type,
      description                     : profile.data[0].description,
      profile_image_url               : profile.data[0].profile_image_url,
      offline_image_url               : profile.data[0].offline_image_url,
      view_count                      : profile.data[0].view_count,
      email                           : profile.data[0].email,
      client_id                       : process.env.TWITCH_CLIENT_ID,
      redirect_uri                    : process.env.TWITCH_REDIRECT_URI,
      response_type                   : process.env.TWITCH_RES,
      access_token                    : id_token.access_token,
      refresh_token                   : refreshToken,
      expires_in                      : id_token.expires_in,
      id_token                        : id_token.id_token,
      scope                           : id_token.scope,
      created_at                      : Date.now(),
      updated_at                      : Date.now(),
    };
    console.log('User: ');
    console.log(user);
    // function check for user then add/remove/update
    // dbRegistrer.registerAppUser(user);
    done(undefined, profile);

  }));

  // Strategy
  OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
    console.log('Running: strategy');
    const options = {
      url: `${process.env.TWITCH_API_URL}/users?id=${process.env.TWITCH_USER_ID}`,
      method: 'GET',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Authorization': 'Bearer ' + accessToken
      }
    };
    request(options, (error, response, body) => {
      console.log('Running: strategy request');
      if (response && response.statusCode == 200) {
        console.log('Response: 200 in usePassport request');
        console.log('Response: ');
        console.log(JSON.parse(body));
        done(undefined, JSON.parse(body));
      } else {
        console.log('Response: !200 in usePassport request');
        console.log('Response: ');
        console.log(JSON.parse(body));
        done(JSON.parse(body));
      }
    });
  };



  // Serialize
  passport.serializeUser(function (user, done) {
    console.log('Running: serialize');
    done(undefined, user);
  });

  // Deserialize
  passport.deserializeUser(function (user, done) {
    console.log('Running: deserialize');
    done(undefined, user);
  });


}

  // Set up routes
  public routes() {
    this.router.get('/', passport.authenticate('twitch', {scope: 'analytics:read:games bits:read clips:edit user:edit user:read:email openid'}));
    this.router.get('/callback', passport.authenticate('twitch', {successRedirect: 'http://localhost:4200/home', failureRedirect: 'http://localhost:4200/auth-error'}));
  }
}

const authRoutes = new AuthRouter();
authRoutes.routes();

export default authRoutes.router;
