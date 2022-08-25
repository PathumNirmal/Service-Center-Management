const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    for_vehicle: [
        {type: Schema.Types.ObjectId, ref: 'Vehicle'}
    ],
    part_id: [
        {type: Schema.Types.ObjectId, ref: 'Service_part'}
    ]
});

module.exports = mongoose.model('Booking', bookingSchema);