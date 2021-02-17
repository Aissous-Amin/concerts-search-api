const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const concertsSchema = new Schema({
    bandId: ObjectId,
    venueId: ObjectId,
    date: Date
}, {
    timestamps: true
});

module.exports.Concerts = mongoose.model('Concerts', concertsSchema);
