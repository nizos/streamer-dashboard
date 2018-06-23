/*
 * @Author: Nizars
 * @Date: 2018-06-07 05:35:32
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 11:15:08
 */

import { model, Schema } from 'mongoose';
import IdToken from './IdToken';
import Profile from './Profile';

const UserSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: ''
  },
  // PROFILE
  profile: {
    type: [Profile.schema],
    required: true
  },
  // Access token
  access_token: {
    type: String,
    required: true,
    default: ''
  },
  // Refresh token
  refresh_token: {
    type: String,
    required: true,
    default: ''
  },
  // ID TOKEN
  id_token: {
    type: [IdToken.schema],
    required: true
  },
  // Date & Time
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});

export default model('User', UserSchema);

