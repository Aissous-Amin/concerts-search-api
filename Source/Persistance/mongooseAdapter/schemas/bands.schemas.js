const mongoose = require('mongoose');

const { Schema } = mongoose;

const bandSchema = new Schema({
    id: {
        type: String,
        index: {
            unique: true,
        },
    },
    name: String,
}, { _id: false, autoIndex: false });

bandSchema.virtual("bands", {
    ref: "Band", // The model to use
    localField: "id", // Find band where `localField`
    foreignField: "bandId", // is equal to `foreignField`
});

module.exports.Bands = mongoose.model('Band', bandSchema);

