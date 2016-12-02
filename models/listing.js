/**
 * Created by Brandon Roy on 26/11/2016.
 */

//this model is for parts of the app to access the listing schema


var mongoose = require('mongoose');
mongodb://<dbuser>:<dbpassword>@ds157487.mlab.com:57487/directory'
var Schema = mongoose.Schema;


var listingSchema = new Schema({
    name: String,
    address: { type: String, required: true, unique: true },
    Type: { type: String, required: true, unique: true },
    owner: { type: String, required: true, unique: true },
    contact: { type: String, required: true, unique: true },
    opening: { type: String, required: true, unique: true }

});


var listing = mongoose.model('listing', listingSchema);


module.exports = listing;