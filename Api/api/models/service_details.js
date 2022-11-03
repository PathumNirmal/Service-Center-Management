const mongoose = require('mongoose');

const serviceDetailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_vehicle_id: [
        {type: Schema.Types.ObjectId, ref: 'Customer_Vehicle_Detail'}
    ],
    service_list: [{
        service_name:String,
        status:String
    }],
});

module.exports = mongoose.model('Service_Detail', serviceDetailSchema);