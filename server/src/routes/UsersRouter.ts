/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:35:02
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 00:50:31
 */

import { Request, Response, Router } from 'express';
import User from '../models/User';

class UsersRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    User.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public one(req: Request, res: Response): void {
    const userID: string = req.params.userID;

    User.findOne()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public create(req: Request, res: Response): void {
    const id: string = req.body.id;
    const login: string = req.body.login;
    const display_name: string = req.body.display_name;
    const prefered_username: string = req.body.prefered_username;
    const type: string = req.body.type;
    const broadcaster_type: string = req.body.broadcaster_type;
    const description: string = req.body.description;
    const profile_image_url: string = req.body.profile_image_url;
    const offline_image_url: string = req.body.offline_image_url;
    const view_count: string = req.body.view_count;
    const email: string = req.body.email;

    const client_id: string = req.body.client_id;
    const redirect_uri: string = req.body.redirect_uri;
    const response_type: string = req.body.response_type;
    const access_token: string = req.body.access_token;
    const refresh_token: string = req.body.refresh_token;
    const expires_in: string = req.body.expires_in;
    const id_token: string = req.body.id_token;
    const scope: string = req.body.scope;
    const alg: string = req.body.alg;
    const typ: string = req.body.typ;
    const kid: string = req.body.kid;
    const aud: string = req.body.aud;
    const exp: string = req.body.exp;
    const iat: string = req.body.iat;
    const iss: string = req.body.iss;
    const sub: string = req.body.sub;
    const azp: string = req.body.azp;

    const user = new User({
      id,
      login,
      display_name,
      prefered_username,
      type,
      broadcaster_type,
      description,
      profile_image_url,
      offline_image_url,
      view_count,
      email,

      client_id,
      redirect_uri,
      response_type,
      access_token,
      refresh_token,
      expires_in,
      id_token,
      scope,
      alg,
      typ,
      kid,
      aud,
      exp,
      iat,
      iss,
      sub,
      azp
    });

    user.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public update(req: Request, res: Response): void {
    const id: string = req.body.id;

    User.findOneAndUpdate(( id ), req.body)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public delete(req: Request, res: Response): void {
    const id: string = req.body.id;

    User.findOneAndRemove({ id })
    .then(() => {
      res.status(200).end;
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  // Set up routes
  public routes() {
    this.router.get('/', this.all);
    this.router.get('/:userID', this.one);
    this.router.post('/', this.create);
    this.router.put('/', this.update);
    this.router.delete('/', this.delete);
  }

}

const usersRoutes = new UsersRouter();
usersRoutes.routes();

export default usersRoutes.router;
