const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientUserSchema = new Schema({
    _id: String,
    accessToken: String,
    refreshToken: String
});
module.exports = mongoose.model('clientUser', clientUserSchema, 'clientUsers');