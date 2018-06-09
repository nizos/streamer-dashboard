/*
 * @Author: Nizars
 * @Date: 2018-06-07 01:09:10
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-08 20:21:35
 */

import * as express from 'express';
import * as passport from 'passport';
import * as OAuth2Strategy from 'passport-oauth2';
import * as request from 'request';
import User from '../schemas/User';
import { io } from '../index';

class AuthRouter {
  public router: express.Router;
  constructor() {
    this.router = express.Router();

    // Use passport
    passport.use('twitch', new OAuth2Strategy( {
      authorizationURL: process.env.TWITCH_AUTHORIZE_URL,
      tokenURL: process.env.TWITCH_REFRESH_URL,
      clientID: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_SECRET,
      callbackURL: process.env.TWITCH_REDIRECT_URI
    },
    function (accessToken, refreshToken, id_token, profile, done) {
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
      registerUser(newUser);
      done(undefined, profile);
    }));

    // Strategy
    OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
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
      User.findOneAndRemove({id: userID}, async function(err: any, result: any) {
        if (err) {
            console.log(`[DB] [ERROR] Couldn't remove found user with matching id: ${userID}.`);
            console.log(`[DB] [ERROR] ${err}`);
        }
        if (result) {
            console.log(`[DB] User with matching id removed. id: ${userID}.`);
        }
      });
      User.create(newUser, async (err: any, newUser: any) => {
        if (err) {
          console.log(`[DB] [ERROR] Couldn't add new user to database. id: ${userID}.`);
          console.log(`[DB] [ERROR] ${err}`);
        } else {
          console.log(`[DB] User successfully added to database. id: ${userID}.`);
          console.log(`newUser id_token:`);
          console.log(newUser.id_token[0].id_token);
          io.emit('authenticated', newUser.id_token[0].id_token);
        }
      });
    }
    this.routes();
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
