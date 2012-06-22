/** User Schema for CrowdNotes **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passport = require('passport');

// Define schema
var UserSchema = new Schema({
    name : { 
        givenName: { type: String, required: true } 
      , familyName: { type: String, required: true }
    }
  , displayName: { type: String, unique: true }
  , email: [ { type: String, unique: true } ]
});

module.exports = mongoose.model('User', UserSchema);
