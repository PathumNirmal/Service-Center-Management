const mongoose = require('mongoose');

const Booking = require("../models/booking");

exports.add = (req, res, next) => {
    console.log(req.file);
    const booking = new Booking({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        milage: req.body.milage,
        full_service: req.body.full_service,
        under_wash: req.body.under_wash,
        body_wash: req.body.body_wash,
        vaccum: req.body.vaccum,
        interior: req.body.interior,
        engine_oil: req.body.engine_oil,
        brake_oil: req.body.brake_oil,
        gear_oil: req.body.gear_oil,
        oil_filter: req.body.oil_filter,
        fuel_filter: req.body.fuel_filter,
        cabin_filter: req.body.cabin_filter,
        air_filter: req.body.air_filter,
        coolant: req.body.coolant,
        battery_replace: req.body.battery_replace,
        power_steering: req.body.power_steering,
        wheel_balance: req.body.wheel_balance,
        other: req.body.other,
        owner: req.body.owner,
        vehicle: req.body.vehicle,
    });
    booking
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created record successfully',
                createRecord: {
                    date: result.date,
                    time: result.time,
                    status: result.status,
                    milage: result.milage,
                    full_service: result.full_service,
                    under_wash: result.under_wash,
                    body_wash: result.body_wash,
                    vaccum: result.vaccum,
                    interior: result.interior,
                    engine_oil: result.engine_oil,
                    brake_oil: result.brake_oil,
                    gear_oil: result.gear_oil,
                    oil_filter: result.oil_filter,
                    fuel_filter: result.fuel_filter,
                    cabin_filter: result.cabin_filter,
                    air_filter: result.air_filter,
                    coolant: result.coolant,
                    battery_replace: result.battery_replace,
                    power_steering: result.power_steering,
                    wheel_balance: result.wheel_balance,
                    other: result.other,
                    owner: result.owner,
                    vehicle: result.vehicle,
                    _id: result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
    
}

exports.count = (req, res, next) => {
    Booking.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                customer_vehicles: docs.map(doc => {
                    return {
                        vehicle_no: doc.vehicle_no,
                        brand: doc.brand,
                        model: doc.model,
                        milage: doc.milage,
                        man_year: doc.manufacture_year,
                        owner_id: doc.customer_id,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/customer_vehicle/" + doc._id
                        }
                    }
                })
            }
            if(docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.get_one = (req, res, next) => {
    const id = req.params.cvId;
    
    CustomerVehicle.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if(doc) {
                res.status(200).json({
                    customer_vehicle: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all records',
                        usr: 'http://localhost:3000/customer_vehicle'
                    }
                });
            } else {
                res.status(404).json({message: 'No valid entry found for procided ID'});
            }
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
}