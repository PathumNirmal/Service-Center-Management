const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/user");

exports.user_add = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            name: req.body.name,
                            nic: req.body.nic,
                            phone: req.body.phone,
                            address: req.body.address,
                            email: req.body.email,
                            password: hash,
                            role: req.body.role,
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User Created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    erro: err
                                });
                            })
                    }
                })
            }
        })
}

exports.user_login = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id,
                            role: user[0].role
                        }, 
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth successfull',
                        token: token
                    });
                }
                return res.status(401).json({
                    message: 'Auth failed'
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.user_delete = (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then( result => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.user_get_all = (req, res, next) => {
    User.find()
        // .select('brand model manufacture_year _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        name: doc.name,
                        nic: doc.nic,
                        phone: doc.manufacture_year,
                        address: doc.address,
                        email: doc.email,
                        vehicle_id: doc.vehicle_id,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/user/" + doc._id
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

exports.users_get_user = (req, res, next) => {
    const id = req.params.userId;
    
    User.findById(id)
        // .select('brand model manufacture_year _id')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if(doc) {
                res.status(200).json({
                    user: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all users',
                        usr: 'http://localhost:3000/user'
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

exports.users_update_user = (req, res, next) => {
    const id = req.params.userId;
    User.findOneAndUpdate({ _id: id}, {
        $set: req.body
    }).then(result => {
                res.status(200).json({
                    message: 'User updated',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/user/' + id
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