const express = require('express');
const router = express.Router();

const BookingController = require('../controller/booking');

router.post("/", BookingController.add);

// router.get("/", BookingController.get_all);

// router.get("/:cvId", BookingController.get_one);

router.get("/:cvId", BookingController.count);

module.exports = router;