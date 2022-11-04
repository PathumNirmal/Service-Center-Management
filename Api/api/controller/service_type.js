const mongoose = require('mongoose');

const ServiceType = require("../models/service_type");

exports.add = (req, res, next) => {
    console.log(req.file);
    const serviceType = new ServiceType({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        basic_charge: req.body.charge,
        time_required: req.body.time
    });
    serviceType
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created record successfully',
                createRecord: {
                    name: result.name,
                    description: result.description,
                    basic_charge: result.basic_charge,
                    time_required: result.time_required,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/service_type/" + result._id
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
    ServiceType.find()
        // .select('name price _id productImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                service_types: docs.map(doc => {
                    return {
                        name: doc.name,
                        description: doc.description,
                        basic_charge: doc.charge,
                        time_required: doc.time,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/service_type/" + doc._id
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
    const id = req.params.stId;
    
    ServiceType.findById(id)
        // .select('name price _id productImage')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if(doc) {
                res.status(200).json({
                    service_type: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all records',
                        usr: 'http://localhost:3000/service_type'
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
    const id = req.params.stId;
    ServiceType.findOneAndUpdate({ _id: id}, {
        $set: req.body
    }).then(result => {
                res.status(200).json({
                    message: 'Record updated',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/service_type/' + id
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
    ServiceType.remove({ _id: id})
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