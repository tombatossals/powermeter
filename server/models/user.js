/** User Schema for CrowdNotes **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passport = require('passport');

// Define schema
var UserSchema = new Schema({
    name : { 
        first: { type: String, required: true } 
      , last: { type: String, required: true }
    }
  , email: { type: String, unique: true }
});

module.exports = mongoose.model('User', UserSchema);

UserSchema.method('findOrCreate', function(profile, callback) {
    console.log(profile);
});
