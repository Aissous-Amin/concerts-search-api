const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const concertsSchema = new Schema({
    bandId: {
        type: String,
        ref: 'bands'
    },
    venueId: {
        type: String,
        ref: 'venues'
    },
    date: Date
}, {
    timestamps: true
});

module.exports.Concerts = mongoose.model('Concerts', concertsSchema);
