const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    phone: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String,
        required: true, 
        unique: true ,
        // match: regular expression on stack overflaw
    },
    password: { type: String, required: true},
    role: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);