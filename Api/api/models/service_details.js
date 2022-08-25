const mongoose = require('mongoose');

const serviceDetailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    vehicle_number: { type: String, require: true },
    milage: { type: String, require: true },
    date: { type: String, require: true },
    bill_no: { type: String, require: true },
    amount: { type: String, require: true }
});

module.exports = mongoose.model('Service_Detail', serviceDetailSchema);