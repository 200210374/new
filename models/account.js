/**
 * Created by Brandon Roy on 26/11/2016.
 */

//this model is for parts of the app to access the account schema


var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

var accountSchema = new mongoose.Schema({

    oauthID: String,
    created: Date
});

accountSchema.plugin(plm);
module.exports = mongoose.model('Account', accountSchema);