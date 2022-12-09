const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: { type: String, require: true },
    time: { type: String, require: true },
    status: { type: String, require: true },
    full_service: { type: Boolean},
    under_wash: { type: Boolean},
    body_wash: { type: Boolean},
    vaccum: { type: Boolean},
    interior: { type: Boolean},
    power_steering_oil: { type: Boolean},
    engine_oil: { type: Boolean},
    brake_oil: { type: Boolean},
    gear_oil: { type: Boolean},
    oil_filter: { type: Boolean},
    fuel_filter: { type: Boolean},
    cabin_filter: { type: Boolean},
    air_filter: { type: Boolean},
    coolant: { type: Boolean},
    battery_replace: { type: Boolean},
    wheel_balance: { type: Boolean},
    other: { type: String },
    owner: [
        {type: String}
    ],
    vehicle: [
        {type: String}
    ]
});

module.exports = mongoose.model('Booking', bookingSchema);