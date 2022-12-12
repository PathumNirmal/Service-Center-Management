const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const vehicleRoutes = require('./api/routes/vehicles');
const userRoutes = require('./api/routes/user');
const customerRoutes = require('./api/routes/customer');
const serviceTypeRoutes = require('./api/routes/service_type');
const servicePartRoutes = require('./api/routes/service_parts');
const customerVehicleRoutes = require('./api/routes/customer_vehicle');
const bookingRoutes = require('./api/routes/booking');

mongoose.connect('mongodb://127.0.0.1:27017/ServiceCenter', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

mongoose.Promise = global.Promise;

// app.use(morgan('dev'));
// app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/vehicles', vehicleRoutes);
app.use('/user', userRoutes);
app.use('/customer', customerRoutes);
app.use('/service_type', serviceTypeRoutes);
app.use('/service_part', servicePartRoutes);
app.use('/customer_vehicle', customerVehicleRoutes);
app.use('/booking', bookingRoutes);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works'
//     });
// });

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;