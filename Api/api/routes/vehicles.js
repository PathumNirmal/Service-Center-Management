const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const checkAuth = require('../middleware/check-auth');
const VehiclesController = require('../controller/vehicles');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     //reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });

router.get('/', VehiclesController.vehicles_get_all);

router.post('/', VehiclesController.vehicles_create_vehicle);

// router.post('/', checkAuth, upload.single('vehicleImage'), VehicleController.vehicle_create_vehicle);

router.get('/:vehicleId', VehiclesController.vehicles_get_vehicle);

// router.patch('/:vehicleId', checkAuth, VehiclesController.vehicles_update_vehicle);

// router.delete('/:vehicleId', checkAuth, VehiclesController.vehicles_delete_vehicle);

router.patch('/:vehicleId', VehiclesController.vehicles_update_vehicle);

router.delete('/:vehicleId', VehiclesController.vehicles_delete_vehicle);

module.exports = router;