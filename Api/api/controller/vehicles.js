const Vehicle = require('../models/vehicle');
const mongoose = require('mongoose');

exports.vehicles_get_all = (req, res, next) => {
    Vehicle.find()
        .select('brand model manufacture_year _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                vehicles: docs.map(doc => {
                    return {
                        brand: doc.brand,
                        model: doc.model,
                        manufacture_year: doc.manufacture_year,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/vehicles/" + doc._id
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

exports.vehicles_create_vehicle = (req, res, next) => {
    const vehicle = new Vehicle({
        _id: new mongoose.Types.ObjectId(),
        brand: req.body.brand,
        model: req.body.model,
        manufacture_year: req.body.manufacture_year
    });
    vehicle
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created vehicle successfully',
                createVehicle: {
                    brand: result.brand,
                    model: result.model,
                    manufacture_year: result.manufacture_year,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/vehicles/" + result._id
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

exports.vehicles_get_vehicle = (req, res, next) => {
    const id = req.params.vehicleId;
    
    Vehicle.findById(id)
        .select('brand model manufacture_year _id')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if(doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all vehicles',
                        usr: 'http://localhost:3000/vehicles'
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

// exports.vehicles_update_vehicle = (req, res, next) => {
//     const id = req.params.vehicleId;
//     const updateOps = {};
//     for( const ops of req.body) {
//         updateOps[ops.propName] = ops.value;
//     }
//     Vehicle.update({ _id: id }, { $set: updateOps })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Vehicle updated',
//                 request: {
//                     type: 'GET',
//                     url: 'http://localhost:3000/vehicles/' + id
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// }

exports.vehicles_delete_vehicle = (req, res, next) => {
    const id = req.params.vehicleId;
    Vehicle.remove({ _id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Vehicle deleted',
                // request: {
                //     type: 'POST',
                //     url: 'http://localhost:3000/vehicles',
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