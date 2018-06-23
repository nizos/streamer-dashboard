/*
 * @Author: Nizars
 * @Date: 2018-06-07 05:35:45
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-07 09:33:42
 */
import { model, Schema } from 'mongoose';

const IdTokenSchema: Schema = new Schema({
  // id_token
  access_token: {
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
  }
});

export default model('IdToken', IdTokenSchema);
