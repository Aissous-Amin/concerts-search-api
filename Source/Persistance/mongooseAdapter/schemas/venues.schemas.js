const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venuesSchema = new Schema({
    _id: {
        type: Number,
        index: {
            unique: true,
        }
    },
    name: String,
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    }
});

module.exports.Venues = mongoose.model('Venues', venuesSchema);
