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
                        // request: {
                        //     type: "GET",
                        //     url: "http://localhost:3000/products/" + doc._id
                        // }
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
    // res.status(200).json({
    //     message: 'Handling GET requests to /products'
    // });
}

exports.vehicles_create_vehicle = (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }
    // console.log(req.file);
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
                    // request: {
                    //     type: 'GET',
                    //     url: "http://localhost:3000/products/" + result._id
                    // }
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

// exports.products_get_product = (req, res, next) => {
//     const id = req.params.productId;
    
//     Product.findById(id)
//         .select('name price _id productImage')
//         .exec()
//         .then(doc => {
//             console.log("From database", doc);
//             if(doc) {
//                 res.status(200).json({
//                     product: doc,
//                     request: {
//                         type: 'GET',
//                         description: 'Get all products',
//                         usr: 'http://localhost:3000/products'
//                     }
//                 });
//             } else {
//                 res.status(404).json({message: 'No valid entry found for procided ID'});
//             }
            
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({error: err});
//         })
//     // if(id === 'special') {
//     //     res.status(200).json({
//     //         message: 'You discovered the special ID',
//     //         id: id
//     //     });
//     // } else {
//     //     res.status(200).json({
//     //         message: 'You passed an ID'
//     //     });
//     // }
// }

// exports.products_update_product = (req, res, next) => {
//     const id = req.params.productId;
//     const updateOps = {};
//     for( const ops of req.body) {
//         updateOps[ops.propName] = ops.value;
//     }
//     Product.update({ _id: id }, { $set: updateOps })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Product updated',
//                 request: {
//                     type: 'GET',
//                     url: 'http://localhost:3000/products/' + id
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
//     // res.status(200).json({
//     //     message: 'Updated product!'
//     // });
// }

// exports.products_delete_product = (req, res, next) => {
//     const id = req.params.productId;
//     Product.remove({ _id: id})
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Product deleted',
//                 request: {
//                     type: 'POST',
//                     url: 'http://localhost:3000/products',
//                     body: { name: 'String', price: 'Number'}
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