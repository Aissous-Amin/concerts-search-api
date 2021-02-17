const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bandsSchema = new Schema({
    id: ObjectId,
    name: String
});

module.exports.Bands = mongoose.model('Bands', bandsSchema);

