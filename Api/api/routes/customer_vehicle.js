const express = require('express');
const router = express.Router();

const CustomerVehicleController = require('../controller/customer_vehicle');

router.post("/add", CustomerVehicleController.add);

router.get("/", CustomerVehicleController.get_all);

router.get("/:cvId", CustomerVehicleController.get_one);

router.patch("/:cvId", CustomerVehicleController.update);

router.delete("/:cvId", CustomerVehicleController.delete);

module.exports = router;