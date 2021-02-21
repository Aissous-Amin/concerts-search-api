const mongoose = require('mongoose');

const { Schema } = mongoose;

const concertSchema = new Schema({
    bandId: {
        type: String,
        ref: 'Band',
    },
    venueId: {
        type: String,
        ref: 'Venue',
    },
    date: Date,
}, { _id: false, autoIndex: false });

concertSchema.virtual('concerts', {
    ref: 'Concert', // The model to use
    localField: '_id', // Find concert where `localField`
    foreignField: 'concert', // is equal to `foreignField`
});

module.exports.Concerts = mongoose.model('Concert', concertSchema);
