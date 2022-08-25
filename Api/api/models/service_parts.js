const mongoose = require('mongoose');

const servicePartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, require: true },
    brand: { type: String, require: true },
    identification_no: { type: String, require: true },
    quantity_type: { type: String, require: true },
    quantity: { type: String, require: true },
    unit: { type: String, require: true },
    unit_price: { type: String, require: true }
});

module.exports = mongoose.model('Service_part', servicePartSchema);