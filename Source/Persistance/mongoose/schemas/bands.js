const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandsSchema = new Schema({
    _id: {
        type: Number,
        index: {
            unique: true,
        }
    },
    name: String
});

/*bandsSchema.pre('save', {query: true, document: true}, (err, data, next) => {
    this._id = data.id;
    this.name = data.name;
    next();
});*/

module.exports.Bands = mongoose.model('Bands', bandsSchema);

