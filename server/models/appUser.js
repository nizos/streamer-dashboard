// Require Mongoose
const mongoose = require('mongoose');

// Define the schema
const Schema = mongoose.Schema;

// APP USER
const AppUserSchema = new Schema({
    id:                     {type: String, required: true},
    login:                  {type: String, required: true},
    display_name:           {type: String, required: true},
    prefered_username:      {type: String, required: false},
    type:                   {type: String, required: false, default: ''},
    broadcaster_type:       {type: String, required: false},
    description:            {type: String, required: false},
    profile_image_url:      {type: String, required: false},
    offline_image_url:      {type: String, required: false},
    view_count:             {type: String, required: true},
    email:                  {type: String, required: false, default: ''},
    client_id:              {type: String, required: true},
    redirect_uri:           {type: String, required: true},
    response_type:          {type: String, required: false},
    access_token:           {type: String, required: true},
    refresh_token:          {type: String, required: true},
    expires_in:             {type: String, required: true},
    id_token:               {type: String, required: true},
    scope:                  {type: String, required: true},
    alg:                    {type: String, required: true},
    typ:                    {type: String, required: true},
    kid:                    {type: String, required: true},
    aud:                    {type: String, required: true},
    exp:                    {type: String, required: true},
    iat:                    {type: String, required: true},
    iss:                    {type: String, required: true},
    sub:                    {type: String, required: true},
    azp:                    {type: String, required: false},
    created_at:             {type: Date, required: true, default: Date.now()},
    updated_at:             {type: Date, required: true, default: Date.now()}
});

// Export function to create AppUser model class
module.exports = mongoose.model('AppUser', AppUserSchema, 'AppUsers');
