/*
 * @Author: Nizars
 * @Date: 2018-06-06 23:35:39
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 06:43:18
 */

import { model, Schema } from 'mongoose';

const ProfileSchema: Schema = new Schema({
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
    required: false,
    default: ''
  }
});

export default model('Profile', ProfileSchema);
