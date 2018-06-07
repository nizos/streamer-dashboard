/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:35:02
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 09:25:28
 */

import { Request, Response, Router } from 'express';
import User from '../models/User';

class UsersRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  // Get all users
  public all(req: Request, res: Response): void {
    User.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  // Get a user
  public one(req: Request, res: Response): void {
    const userID: string = req.params.userID;

    User.findOne(userID)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  // Register a user
  public create(req: Request, res: Response): void {
    const id:                string = req.body.id;
    const profile:           string = req.body.profile;
    const id_token:          string = req.body.id_token;
    const access_token:      string = req.body.access_token;
    const refresh_token:     string = req.body.refresh_token;
    const user = new User({id, profile, id_token, access_token, refresh_token});

    user.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  // Update a user
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

  // Delete a user
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
