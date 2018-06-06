/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:35:39
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-06 23:43:55
 */

import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: ''
  },
  login: {
    type: String,
    required: true,
    default: ''
  },
  display_name: {
    type: String,
    required: true,
    default: ''
  },
  prefered_username: {
    type: String,
    required: true,
    default: ''
  },
  type: {
    type: String,
    required: true,
    default: ''
  },
  broadcaster_type: {
    type: String,
    required: true,
    default: ''
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
  profile_image_url: {
    type: String,
    required: true,
    default: ''
  },
  offline_image_url: {
    type: String,
    required: true,
    default: ''
  },
  view_count: {
    type: String,
    required: true,
    default: ''
  },
  email: {
    type: String,
    required: true,
    default: ''
  },
  client_id: {
    type: String,
    required: true,
    default: ''
  },
  redirect_uri: {
    type: String,
    required: true,
    default: ''
  },
  response_type: {
    type: String,
    required: true,
    default: ''
  },
  access_token: {
    type: String,
    required: true,
    default: ''
  },
  refresh_token: {
    type: String,
    required: true,
    default: ''
  },
  expires_in: {
    type: String,
    required: true,
    default: ''
  },
  id_token: {
    type: String,
    required: true,
    default: ''
  },
  scope: {
    type: String,
    required: true,
    default: ''
  },
  alg: {
    type: String,
    required: true,
    default: ''
  },
  typ: {
    type: String,
    required: true,
    default: ''
  },
  kid: {
    type: String,
    required: true,
    default: ''
  },
  aud: {
    type: String,
    required: true,
    default: ''
  },
  exp: {
    type: String,
    required: true,
    default: ''
  },
  iat: {
    type: String,
    required: true,
    default: ''
  },
  iss: {
    type: String,
    required: true,
    default: ''
  },
  sub: {
    type: String,
    required: true,
    default: ''
  },
  azp: {
    type: String,
    required: true,
    default: ''
  },
  created_at: {
    type: String,
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
