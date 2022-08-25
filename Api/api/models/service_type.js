const mongoose = require('mongoose');

const serviceTypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    description: { type: String, require: true },
    basic_charge: { type: String, require: true },
    time_required: { type: String, require: true }
});

module.exports = mongoose.model('Service_type', serviceTypeSchema);