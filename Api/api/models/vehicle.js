const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    brand: { type: String, require: true },
    model: { type: String, require: true },
    manufacture_year: { type: String, require: true },
    parts: [
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
});

module.exports = mongoose.model('Vehicle', vehicleSchema);