const mongoose = require('mongoose');

const customerVehicleDetailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    vehicle_no:{type: String, required: true},
    brand:{type: String, required: true},
    model:{type: String, required: true},
    milage:{type: String, required: true},
    manufacture_year:{type: String, required: true},
    customer_id:{type: Schema.Types.ObjectId, ref: 'Customer'},
});

module.exports = mongoose.model('Customer_Vehicle_Detail', customerVehicleDetailSchema);