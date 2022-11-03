const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nic: {type: String, required: true, unique: true},
    name: { type: String, require: true },
    phone: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String,
        required: true, 
        unique: true,
        // match: regular expression on stack overflaw
    },
    password: { type: String, required: true},
    role: { type: String, required: true },
    // vehicle_id: [
    //     {type: Schema.Types.ObjectId, ref: 'Customer_Vehicle_Detail'}
    // ]
});

module.exports = mongoose.model('Customer', customerSchema);