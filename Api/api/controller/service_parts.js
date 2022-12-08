const mongoose = require('mongoose');

const ServicePart = require("../models/service_parts");

exports.add = (req, res, next) => {
    console.log(req.file);
    const servicePart = new ServicePart({
        _id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        brand: req.body.brand,
        identify_no: req.body.identify_no,
        quantity_type: req.body.quantity_type,
        quantity: req.body.quantity,
        unit: req.body.unit,
        unit_price: req.body.price
    });
    servicePart
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created record successfully',
                createRecord: {
                    type: result.type,
                    brand: result.brand,
                    identify_no: result.identify_no,
                    quantity_type: result.quantity_type,
                    quantity: result.quantity,
                    unit: result.unit,
                    unit_price: result.price,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/service_part/" + result._id
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
    ServicePart.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                service_parts: docs.map(doc => {
                    return {
                        type: doc.type,
                        brand: doc.brand,
                        identify_no: doc.identify_no,
                        quantity_type: doc.quantity_type,
                        quantity: doc.quantity,
                        unit: doc.unit,
                        unit_price: doc.unit_price,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/service_part/" + doc._id
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
    const id = req.params.spId;
    
    ServicePart.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if(doc) {
                res.status(200).json({
                    service_part: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all records',
                        usr: 'http://localhost:3000/service_part'
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
    const id = req.params.spId;
    ServicePart.findOneAndUpdate({ _id: id}, {
        $set: req.body
    }).then(result => {
                res.status(200).json({
                    message: 'Record updated',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/service_part/' + id
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
    const id = req.params.stId;
    ServicePart.remove({ _id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Record deleted',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}