/*
 * @Author: Nizars
 * @Date: 2018-06-07 10:58:08
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 11:05:08
 */

import { Profile } from './profile';
import { IdToken } from './idToken';

export interface User {
  id?: number;
  profile?: Profile;
  access_token?: string;
  refresh_token?: string;
  id_token?: IdToken;
  created_at?: Date;
  updated_at?: Date;
}
