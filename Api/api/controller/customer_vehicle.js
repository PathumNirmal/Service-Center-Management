const mongoose = require('mongoose');

const CustomerVehicle = require("../models/customer_vehicle");

exports.add = (req, res, next) => {
    console.log(req.file);
    const customerVehicle = new CustomerVehicle({
        _id: new mongoose.Types.ObjectId(),
        vehicle_no: req.body.vehicle_no,
        brand: req.body.brand,
        model: req.body.model,
        milage: req.body.milage,
        manufacture_year: req.body.manufacture_year,
        customer_id: req.body.customer_id,
    });
    customerVehicle
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created record successfully',
                createRecord: {
                    veh_no: result.vehicle_no,
                    brand: result.brand,
                    model: result.model,
                    milage: result.milage,
                    man_year: result.manufacture_year,
                    owner_id: result.customer_id,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/customer_vehicle/" + result._id
                    }
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

exports.get_all = (req, res, next) => {
    CustomerVehicle.find()
        // .select('name price _id productImage')
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
        // .select('name price _id productImage')
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

exports.update = (req, res, next) => {
    const id = req.params.cvId;
    CustomerVehicle.findOneAndUpdate({ _id: id}, {
        $set: req.body
    }).then(result => {
                res.status(200).json({
                    message: 'Record updated',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/customer_vehicle/' + id
                    }
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.delete = (req, res, next) => {
    const id = req.params.cvId;
    CustomerVehicle.remove({ _id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Record deleted',
                // request: {
                //     type: 'POST',
                //     url: 'http://localhost:3000/service_type',
                //     body: { name: 'String', price: 'Number'}
                // }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}