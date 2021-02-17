const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const venuesSchema = new Schema({
    id: ObjectId,
    name: String,
    latitude: String,
    longitude: String
});

module.exports.Venues = mongoose.model('Venues', venuesSchema);
