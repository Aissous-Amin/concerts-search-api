const mongoose = require('mongoose');

const { Schema } = mongoose;

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
}, { _id: false, autoIndex: false });

const venueSchema = new Schema({
    id: {
        type: String,
        index: {
            unique: true,
        },
    },
    name: String,
    location: {
        type: pointSchema,
        index: '2dsphere', // Create a special 2dsphere index on `City.location`
    },
}, {
    versionKey: false,
    _id: false,
});

venueSchema.virtual("venues", {
    ref: "Venue", // The model to use
    localField: "id", // Find venue where `localField`
    foreignField: "venueId", // is equal to `foreignField`
});

venueSchema.pre('insertMany', { query: true, document: true }, (next, data) => {
    data.forEach((venue, index) => {
        data[index].location = {
            type: 'Point',
            coordinates: [venue.longitude, venue.latitude],
        };
    });
    next();
});

module.exports.Venues = mongoose.model('Venue', venueSchema);
