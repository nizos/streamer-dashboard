/*
 * @Author: Nizars
 * @Date: 2018-06-07 01:09:10
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-20 20:32:06
 */

import * as express from 'express';
import * as passport from 'passport';
import * as OAuth2Strategy from 'passport-oauth2';
import * as request from 'request';
import { Request, Response, Router } from 'express';
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
      const query = {id: newUser.id};
      const options = {
        upsert: true,
      };

      // find if user exists
      User.findOneAndUpdate(query, newUser, options, async (err: any, res: any) => {
        if (err) {
          console.log(`[DB] [ERROR] Couldn't add new user to database. id: ${newUser.id}.`);
          console.log(`[DB] [ERROR] ${err}`);
        }
        if (res) {
          console.log(`[DB] User successfully added to database. id: ${newUser.id}.`);
          io.emit('authenticated', newUser.id_token.access_token);
        }
      });
    }
    this.routes();
  }

  // Auth Success
  public success(req: Request, res: Response): void {
  console.log('​AuthRouter -> success');
    res.status(200).send(`!<!DOCTYPE html>
    <html>
    <body>
    <script>
       window.opener.postMessage('AUTHCOMPLETE', '*');
    </script>
    </body>
    </html>`);
  }

  // Auth Error
  public error(req: Request, res: Response): void {
  console.log('​AuthRouter -> error');
    res.status(500).send(`!<!DOCTYPE html>
    <html>
    <body>
    <script>
    window.opener.postMessage('AUTHERROR', '*');
    </script>
    </body>
    </html>`);
  }

  // Set up routes
  public routes() {

    this.router.get('/', passport.authenticate('twitch', {
      scope: 'analytics:read:games analytics:read:extensions bits:read clips:edit user:edit user:read:email user:read:broadcast user:edit:broadcast openid'
    }));

    this.router.get('/callback', passport.authenticate('twitch', {
      successRedirect: '/auth/twitch/success',
      failureRedirect: '/auth/twitch/error'
    }));

    this.router.get('/success', this.success);
    this.router.get('/error', this.error);
  }
}

const authRoutes = new AuthRouter();
authRoutes.routes();

export default authRoutes.router;
