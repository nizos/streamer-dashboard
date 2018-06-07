/*
 * @Author: Nizars
 * @Date: 2018-06-07 01:09:10
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 09:22:18
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
import User from '../models/User';


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
      // const decoded = jwt.decode(id_token, {complete: true});
      const newUser = {
        id                 : profile.data[0].id,
        profile            : profile.data[0],
        access_token       : accessToken,
        refresh_token      : refreshToken,
        id_token           : id_token,
        created_at         : Date.now(),
        updated_at         : Date.now(),
      };
      // function check for user then add/remove/update
      console.log(newUser);
      registerUser(newUser);
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
          done(undefined, JSON.parse(body));
        } else {
          done(JSON.parse(body));
        }
      });
    };

    // Serialize
    passport.serializeUser(function (user, done) {
      done(undefined, user);
    });

    // Deserialize
    passport.deserializeUser(function (user, done) {
      done(undefined, user);
    });

    // Register user
    async function registerUser(newUser: any) {
      const userID = newUser.id;

      // find if user exists
      User.findOneAndRemove({id: userID}, async function(err, result) {
        if (err) {
            console.log('Could not remove previously found AppUser with similar id');
            console.log(err);
        }
        if (result) {
            console.log('AppUser with similar id was found and removed');
        }
      });


      User.create(newUser, async (err: any, newUser: any) => {
        if (err) {
          console.log(`Error: couldn't register App User`);
          console.log(err);
        } else {
          console.log(`SUCCESS: App User added to database`);
        }
      });
    }
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
