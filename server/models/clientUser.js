const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientUserSchema = new Schema({
    id: String,
    accessToken: String,
    refreshToken: String,
    created_at: Date,
    updated_at: Date
});

// on every save, add the date and edit updated date
clientUserSchema.pre('save', function (next) {
    // The current date
    var currentDate = new Date();

    // edit the updated_at field to the current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

// Create a model from the schema
var ClientUser = mongoose.model('ClientUser', clientUserSchema);

// Exports it to be abailable in all the application
module.exports = ClientUser;
