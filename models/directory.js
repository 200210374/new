/**
 * Created by Brandon Roy on 26/11/2016.
 */




var mongoose = require('mongoose');

var directorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter the name of the business'
    },
    Type: {
        type: String,
        required: 'Enter the type of business'
    },
    Owner: {
        type: String,
        required: 'who is the owner'
    },
    contact: {
        type: String,
        required: 'Enter contact phone number'
    },
    opening: {
        type: String,
        required: 'When was the grand opening '
    }

});

// make the class public
module.exports = mongoose.model('directory', directorySchema);