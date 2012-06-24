/** User Schema for CrowdNotes **/

var mongoose = require('mongoose');
var   Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

// Define schema
var ComputerSchema = new Schema({
    ip: { type: String, unique: true, required: true }
  , mac: [ { type: String, unique: true, required: true } ]
  , user: [ { type: ObjectId, ref: "user", required: true } ]
});

module.exports = mongoose.model('Computer', ComputerSchema);
