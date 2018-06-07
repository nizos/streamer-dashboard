/*
 * @Author: Nizars
 * @Date: 2018-06-07 11:19:45
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 12:35:33
 */


import { IdToken } from './IdToken';
import { Profile } from './Profile';

export class User {
  constructor(
    private id: string,
    private profile: Profile,
    private access_token: string,
    private refresh_token: string,
    private id_token: IdToken,
    private created_at: Date,
    private updated_at: Date
  ) {}
}
